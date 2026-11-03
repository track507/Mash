// Splits a script into top-level statements with stable keys and a formatting-independent form
import { createHash } from "node:crypto";
import { parse } from "acorn";

const PARSE_OPTIONS = { ecmaVersion: "latest", allowReturnOutsideFunction: true, allowHashBang: true };
const IGNORED_FIELDS = new Set(["start", "end", "raw", "type", "loc", "range", "directive"]);
const SAME_LINE_COMMENT = /[ \t]*(?:\/\/[^\r\n]*|\/\*(?:(?!\*\/)[^\r\n])*\*\/[ \t]*)?(?=\r?\n|$)/y;

/**
 * @typedef {{ key: string, start: number, end: number, node: import("acorn").Statement }} Statement
 */

/**
 * @param {string} source
 * @returns {string} The source without a byte order mark and with LF line endings
 */
export function cleanSource(source) {
	return source.replace(/^\uFEFF/, "").replace(/\r\n?/g, "\n");
}

/**
 * @param {object} node
 * @param {string} type - "+" chains or a logical operator
 * @param {object[]} [parts]
 * @returns {object[]} Operands of the chain, with grouping removed
 */
function flattenChain(node, type, parts = []) {
	if ((node.type === "BinaryExpression" || node.type === "LogicalExpression") && node.operator === type) {
		flattenChain(node.left, type, parts);
		flattenChain(node.right, type, parts);
	} else {
		parts.push(node);
	}
	return parts;
}

/**
 * @param {object} property - A node from ObjectExpression.properties
 * @returns {string} The key, equal for quoted and unquoted spellings of the same name
 */
function propertyKey(property) {
	if (property.type !== "Property") return `...${JSON.stringify(normalize(property))}`;
	const prefix = property.kind === "init" ? "" : `${property.kind} `;
	if (property.computed) return `${prefix}[${JSON.stringify(normalize(property.key))}]`;
	return prefix + (property.key.type === "Identifier" ? property.key.name : String(property.key.value));
}

/**
 * Reduces an AST to a form that ignores formatting and equivalent spellings
 *
 * ! Sorted object keys and flattened chains make this a comparison form only, never a source to run
 *
 * @param {unknown} node
 * @returns {unknown} A JSON-safe value
 */
export function normalize(node) {
	if (Array.isArray(node)) return node.filter((item) => item?.type !== "EmptyStatement").map(normalize);
	if (node === null || typeof node !== "object") return node;
	if (node.type === "Literal") {
		if (node.regex) return { regex: node.regex.pattern, flags: [...node.regex.flags].sort().join("") };
		return { literal: node.value };
	}
	if (node.type === "BinaryExpression" && node.operator === "+") {
		const parts = [];
		for (const part of flattenChain(node, "+")) {
			const value = normalize(part);
			const last = parts.at(-1);
			if (typeof value.literal === "string" && typeof last?.literal === "string") parts[parts.length - 1] = { literal: last.literal + value.literal };
			else parts.push(value);
		}
		return parts.length === 1 ? parts[0] : { concat: parts };
	}
	if (node.type === "LogicalExpression") return { logical: node.operator, parts: flattenChain(node, node.operator).map(normalize) };
	if (node.type === "ObjectExpression") {
		const entries = new Map(
			node.properties.map((property) => [propertyKey(property), normalize(property.type === "Property" ? property.value : property)])
		);
		return { object: [...entries].sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0)) };
	}
	if (node.type === "MemberExpression") {
		const quoted = node.computed && node.property.type === "Literal" && typeof node.property.value === "string";
		const property = quoted ? node.property.value : node.computed ? normalize(node.property) : node.property.name;
		return { member: normalize(node.object), property };
	}
	const out = { type: node.type };
	for (const field of Object.keys(node).sort()) {
		if (!IGNORED_FIELDS.has(field)) out[field] = normalize(node[field]);
	}
	return out;
}

/**
 * @param {object} node
 * @returns {string} First 8 hex characters of the sha1 of the normalized AST
 */
function hashOf(node) {
	return createHash("sha1")
		.update(JSON.stringify(normalize(node)))
		.digest("hex")
		.slice(0, 8);
}

/**
 * @param {object} node
 * @returns {string | null} `a["b"]["c"]` for a chain of literal properties, otherwise null
 */
function memberKey(node) {
	if (node.type === "Identifier") return node.name;
	if (node.type !== "MemberExpression") return null;
	const base = memberKey(node.object);
	if (base === null) return null;
	if (!node.computed) return `${base}[${JSON.stringify(node.property.name)}]`;
	if (node.property.type !== "Literal" || typeof node.property.value === "object") return null;
	return `${base}[${JSON.stringify(node.property.value)}]`;
}

/**
 * @param {object} node
 * @param {object[]} [found]
 * @returns {object[]} Every string literal under the node, in source order
 */
function stringLiterals(node, found = []) {
	if (Array.isArray(node)) {
		for (const item of node) stringLiterals(item, found);
	} else if (node && typeof node === "object") {
		if (node.type === "Literal" && typeof node.value === "string") found.push(node);
		for (const field of Object.keys(node)) stringLiterals(node[field], found);
	}
	return found;
}

/**
 * @param {object} node
 * @param {string} source
 * @returns {string} The node's text with double-quoted strings and collapsed whitespace
 */
function canonicalText(node, source) {
	let text = "";
	let cursor = node.start;
	for (const literal of stringLiterals(node)) {
		text += source.slice(cursor, literal.start) + JSON.stringify(literal.value);
		cursor = literal.end;
	}
	return (text + source.slice(cursor, node.end)).replace(/\s+/g, " ");
}

/**
 * @param {object} node - A top-level statement
 * @param {string} source
 * @returns {string} The key that identifies the statement across versions of a script
 */
function keyOf(node, source) {
	if (node.type === "VariableDeclaration")
		return `${node.kind} ${node.declarations.map((declaration) => source.slice(declaration.id.start, declaration.id.end)).join(", ")}`;
	if (node.type === "IfStatement") return `if (${canonicalText(node.test, source)})`;
	const expression = node.type === "ExpressionStatement" ? node.expression : null;
	if (expression?.type === "AssignmentExpression" && expression.operator === "=") {
		const key = memberKey(expression.left);
		if (key !== null) return key;
	}
	if (expression?.type === "CallExpression") {
		const callee = memberKey(expression.callee);
		if (callee !== null) {
			const leading = [];
			for (const argument of expression.arguments) {
				if (argument.type !== "Literal" || typeof argument.value !== "string") break;
				leading.push(JSON.stringify(argument.value));
			}
			return leading.length > 0 ? `${callee}(${leading.join(", ")})` : `${callee}#${hashOf(node)}`;
		}
	}
	return `${node.type}#${hashOf(node)}`;
}

/**
 * @param {string} source
 * @param {number} end - Where the statement's node ends
 * @returns {number} Where the statement ends with its same-line comment
 */
function endWithComment(source, end) {
	SAME_LINE_COMMENT.lastIndex = end;
	return SAME_LINE_COMMENT.test(source) ? SAME_LINE_COMMENT.lastIndex : end;
}

/**
 * Parses a script into its top-level statements
 *
 * Ranges cover the file from the first byte, so cutting by range keeps comments with their statements
 *
 * @param {string} source
 * @returns {Statement[]}
 * @throws {SyntaxError} When the script does not parse
 */
export function parseStatements(source) {
	const nodes = parse(source, PARSE_OPTIONS).body.filter((node) => node.type !== "EmptyStatement");
	let cursor = 0;
	return nodes.map((node, index) => {
		const end = index === nodes.length - 1 ? source.length : endWithComment(source, node.end);
		const statement = { key: keyOf(node, source), start: cursor, end, node };
		cursor = end;
		return statement;
	});
}

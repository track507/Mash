// Compares two scripts statement by statement, ignoring formatting and equivalent spellings
import { cleanSource, normalize, parseStatements } from "./statements.mjs";

/**
 * @param {string} source
 * @returns {Map<string, Set<string>>} Each key with the distinct normalized forms of its statements
 */
function formsByKey(source) {
	const forms = new Map();
	for (const { key, node } of parseStatements(cleanSource(source))) {
		if (!forms.has(key)) forms.set(key, new Set());
		forms.get(key).add(JSON.stringify(normalize(node)));
	}
	return forms;
}

/**
 * @param {Set<string>} a
 * @param {Set<string>} b
 * @returns {boolean}
 */
const sameForms = (a, b) => a.size === b.size && [...a].every((form) => b.has(form));

/**
 * @param {string} a - Source of the first script
 * @param {string} b - Source of the second script
 * @returns {{ same: number, changed: string[], onlyA: string[], onlyB: string[] }} Statement keys by outcome, with `same` a count
 * @throws {SyntaxError} When either script does not parse
 */
export function compareSources(a, b) {
	const formsA = formsByKey(a);
	const formsB = formsByKey(b);
	const result = { same: 0, changed: [], onlyA: [], onlyB: [] };
	for (const [key, forms] of formsA) {
		if (!formsB.has(key)) result.onlyA.push(key);
		else if (sameForms(forms, formsB.get(key))) result.same++;
		else result.changed.push(key);
	}
	for (const key of formsB.keys()) {
		if (!formsA.has(key)) result.onlyB.push(key);
	}
	return result;
}

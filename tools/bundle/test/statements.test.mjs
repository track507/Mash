import { describe, expect, it } from "vitest";
import { parseStatements } from "../src/statements.mjs";

const keys = (source) => parseStatements(source).map((statement) => statement.key);

describe("parseStatements", () => {
	it("keeps an apostrophe inside a key", () => {
		expect(keys(`CompanionList["witch's familiar"] = {};`)).toEqual([`CompanionList["witch's familiar"]`]);
	});

	it("normalizes quote style", () => {
		expect(keys(`SpellsList['a b'] = {};`)).toEqual([`SpellsList["a b"]`]);
	});

	it("normalizes dot access to a quoted key", () => {
		expect(keys(`x.a = 1;`)).toEqual([`x["a"]`]);
	});

	it("keys a call by its leading string literals", () => {
		expect(keys(`AddSubClass("a", "b", { name: "c" });`)).toEqual([`AddSubClass("a", "b")`]);
	});

	it("keys a declaration by its name", () => {
		expect(keys(`var iFileName = "x";`)).toEqual([`var iFileName`]);
	});

	it("keys a guard by its test with whitespace collapsed and quotes normalized", () => {
		expect(keys(`if (!SourceList[  'VSoS'  ]) { SourceList["VSoS"] = {}; }`)).toEqual([`if (!SourceList[ "VSoS" ])`]);
	});

	it("keys anything else by callee or node type and a hash of the normalized AST", () => {
		const [call, loop] = keys(`RunFunctionAtEnd(function () {}); for (;;) {}`);
		expect(call).toMatch(/^RunFunctionAtEnd#[0-9a-f]{8}$/);
		expect(loop).toMatch(/^ForStatement#[0-9a-f]{8}$/);
	});

	it("gives equal statements equal hashes across formatting", () => {
		expect(keys(`RunFunctionAtEnd(function () { x['a'] = 1;; });`)).toEqual(keys(`RunFunctionAtEnd(function(){ x.a = 1; });`));
	});

	it("drops top-level empty statements", () => {
		expect(keys(`x["a"] = 1;;`)).toEqual([`x["a"]`]);
	});

	it("starts a statement at the comments since the previous statement", () => {
		const source = `x["a"] = 1;\n// about b\nx["b"] = 2;\n`;
		const [, second] = parseStatements(source);
		expect(source.slice(second.start, second.end)).toContain("// about b");
	});

	it("leaves a same-line comment with the statement before it", () => {
		const source = `x["a"] = 1; // about a\nx["b"] = 2;\n`;
		const [first, second] = parseStatements(source);
		expect(source.slice(first.start, first.end)).toContain("// about a");
		expect(source.slice(second.start, second.end)).not.toContain("// about a");
	});

	it("gives comments after the last statement to that statement", () => {
		const source = `x["a"] = 1;\n// tail\n`;
		const [only] = parseStatements(source);
		expect(source.slice(only.start, only.end)).toContain("// tail");
	});
});

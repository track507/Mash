import { describe, expect, it } from "vitest";
import { compareSources } from "../src/compare.mjs";

describe("compareSources", () => {
	it("treats formatting and grouping as equal", () => {
		expect(compareSources(`x["a"] = { "class": 1 };;`, `x.a = { class: 1 };`).changed).toEqual([]);
		expect(compareSources(`x["a"] = a && (b && c);`, `x["a"] = (a && b) && c;`).changed).toEqual([]);
		expect(compareSources(`x["a"] = "p" + "q";`, `x["a"] = "pq";`).changed).toEqual([]);
	});

	it("treats property order, regex flag order and quote style as equal", () => {
		expect(compareSources(`x["a"] = { b: 1, c: 2 };`, `x["a"] = { c: 2, b: 1 };`).changed).toEqual([]);
		expect(compareSources(`x["a"] = /q/gi;`, `x["a"] = /q/ig;`).changed).toEqual([]);
		expect(compareSources(`x["a"] = 'q';`, `x["a"] = "q";`).changed).toEqual([]);
	});

	it("treats mixed operators and changed values as different", () => {
		expect(compareSources(`x["a"] = a && (b || c);`, `x["a"] = (a && b) || c;`).changed).toEqual([`x["a"]`]);
		expect(compareSources(`x["a"] = 1;`, `x["a"] = 2;`).changed).toEqual([`x["a"]`]);
	});

	it("treats a hole and undefined in an array as different", () => {
		expect(compareSources(`x["a"] = [, 1];`, `x["a"] = [undefined, 1];`).changed).toEqual([`x["a"]`]);
	});

	it("reports keys found on one side only and counts the same ones", () => {
		const result = compareSources(`x["a"] = 1; x["b"] = 2;`, `x["a"] = 1; x["c"] = 3;`);
		expect(result).toEqual({ same: 1, changed: [], onlyA: [`x["b"]`], onlyB: [`x["c"]`] });
	});

	it("treats repeated identical statements as one key", () => {
		const guard = `if (!S["V"]) { S["V"] = {}; }`;
		expect(compareSources(guard, `${guard}\n${guard}`)).toEqual({ same: 1, changed: [], onlyA: [], onlyB: [] });
	});

	it("ignores a byte order mark", () => {
		expect(compareSources(`\uFEFFx["a"] = 1;`, `x["a"] = 1;`)).toEqual({ same: 1, changed: [], onlyA: [], onlyB: [] });
	});

	it("treats CRLF and LF sources as equal", () => {
		expect(compareSources(`x["a"] = 1;\r\nx["b"] = 2;\r\n`, `x["a"] = 1;\nx["b"] = 2;\n`).changed).toEqual([]);
	});
});

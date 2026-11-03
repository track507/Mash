import { execFile } from "node:child_process";
import path from "node:path";
import { promisify } from "node:util";
import { describe, expect, it } from "vitest";
import { editionFor } from "../src/cli.mjs";

const exec = promisify(execFile);
const CLI = path.join(import.meta.dirname, "..", "src", "cli.mjs");
const FIXTURES = path.join(import.meta.dirname, "fixtures");
const fixture = (name) => path.join(FIXTURES, name);

async function run(args) {
	try {
		const { stdout } = await exec(process.execPath, [CLI, "--root", FIXTURES, ...args]);
		return { code: 0, stdout };
	} catch (error) {
		return { code: error.code, stdout: error.stdout };
	}
}

describe("editionFor", () => {
	it("maps a path to its edition", () => {
		expect(editionFor("2014/Ariadne/The Nova Cluster.js")).toBe("2014");
		expect(editionFor("2024/Grim-Hollow/Playtest_Pack_v0.1.js")).toBe("2024");
		expect(() => editionFor("tools/x.js")).toThrow(/edition/);
	});
});

describe("cli", () => {
	it("exits 1 and prints path:line:col for a script with an error", async () => {
		const { code, stdout } = await run([fixture("2014/bad.js")]);
		expect(code).toBe(1);
		expect(stdout).toMatch(/bad\.js:1:1 .*no-restricted-syntax/);
	});

	it("exits 0 for warnings only and prints a warning count", async () => {
		const { code, stdout } = await run([fixture("2014/unused.js")]);
		expect(code).toBe(0);
		expect(stdout).toMatch(/0 errors, 1 warning/);
	});

	it("accepts a file name with a space and an apostrophe", async () => {
		const { code } = await run([fixture("2014/it's a file.js")]);
		expect(code).toBe(0);
	});

	it("skips a generated output named by a bundle.json", async () => {
		const { stdout } = await run([fixture("2014/book/out.js")]);
		expect(stdout).toMatch(/0 files/);
	});

	it("walks both edition folders when no files are named", async () => {
		const { code, stdout } = await run([]);
		expect(code).toBe(1);
		expect(stdout).toMatch(/3 files, 1 error, 2 warnings/);
	});
});

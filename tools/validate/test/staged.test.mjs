import { execFile, execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, unlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { promisify } from "node:util";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

const run = promisify(execFile);
const VALIDATE = path.join(import.meta.dirname, "..", "src", "cli.mjs");
const FORMAT = path.join(import.meta.dirname, "..", "src", "format-staged.mjs");
const APOSTROPHE = "2014/The All Father's Ink.js";

let repo;

const git = (...args) => execFileSync("git", args, { cwd: repo, encoding: "utf8" });
const write = (file, content) => writeFileSync(path.join(repo, file), content);
const read = (file) => readFileSync(path.join(repo, file), "utf8");
const stage = (file, content) => {
	write(file, content);
	git("add", "--", file);
};

async function exec(cli, args) {
	try {
		const { stdout, stderr } = await run(process.execPath, [cli, ...args], { cwd: repo });
		return { code: 0, stdout, stderr };
	} catch (error) {
		return { code: error.code, stdout: error.stdout, stderr: error.stderr };
	}
}
const validate = () => exec(VALIDATE, ["--root", repo, "--staged"]);
const format = () => exec(FORMAT, []);

beforeEach(() => {
	repo = mkdtempSync(path.join(tmpdir(), "mash-staged-"));
	git("init", "-q");
	git("config", "user.name", "Test");
	git("config", "user.email", "test@example.invalid");
	git("config", "core.autocrlf", "false");
	mkdirSync(path.join(repo, "2014"));
	mkdirSync(path.join(repo, "docs"));
});

afterEach(() => {
	rmSync(repo, { recursive: true, force: true, maxRetries: 3 });
});

describe("validate --staged", () => {
	it("exits 1 for an invalid script named with a space and an apostrophe", async () => {
		stage(APOSTROPHE, "let x = 1;\n");
		const { code, stdout } = await validate();
		expect(code).toBe(1);
		expect(stdout).toContain("The All Father's Ink.js:1:1");
	});

	it("checks the staged content, not the working tree", async () => {
		stage("2014/a.js", "let x = 1;\n");
		write("2014/a.js", "var x = 1;\n");
		expect((await validate()).code).toBe(1);
		stage("2014/a.js", "var x = 1;\n");
		write("2014/a.js", "let x = 1;\n");
		expect((await validate()).code).toBe(0);
	});

	it("ignores staged files outside the edition folders", async () => {
		stage("docs/a.js", "let x = 1;\n");
		const { code, stdout } = await validate();
		expect(code).toBe(0);
		expect(stdout).toMatch(/0 files/);
	});

	it("ignores a staged deletion", async () => {
		stage("2014/a.js", "var x = 1;\n");
		git("commit", "-qm", "base");
		unlinkSync(path.join(repo, "2014/a.js"));
		git("add", "-A");
		expect((await validate()).code).toBe(0);
	});
});

describe("format-staged", () => {
	it("formats a staged script named with a space and an apostrophe", async () => {
		stage(APOSTROPHE, "var   x = 1\n");
		const { code } = await format();
		expect(code).toBe(0);
		expect(read(APOSTROPHE)).toBe("var x = 1;\n");
	});

	it("stages the formatted text so later jobs read it from the index", async () => {
		stage(APOSTROPHE, "var   x = 1\n");
		expect((await format()).code).toBe(0);
		expect(git("show", `:${APOSTROPHE}`)).toBe("var x = 1;\n");
	});

	it("leaves the index alone when Prettier fails", async () => {
		stage("2014/a.js", "var = ;\n");
		await format();
		expect(git("show", ":2014/a.js")).toBe("var = ;\n");
	});

	it("leaves files out of its scope alone", async () => {
		stage("docs/a.js", "var   x = 1\n");
		expect((await format()).code).toBe(0);
		expect(read("docs/a.js")).toBe("var   x = 1\n");
	});

	it("exits 0 with nothing staged", async () => {
		expect((await format()).code).toBe(0);
	});

	it("exits 1 for a script that does not parse", async () => {
		stage("2014/a.js", "var = ;\n");
		expect((await format()).code).not.toBe(0);
	});
});

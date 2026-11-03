import { execFile, execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, unlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { promisify } from "node:util";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

const run = promisify(execFile);
const BUNDLE_CLI = path.join(import.meta.dirname, "..", "src", "cli.mjs");
const COMPARE_CLI = path.join(import.meta.dirname, "..", "src", "compare-cli.mjs");
const BOOK = "2014/book";

let repo;

const git = (...args) => execFileSync("git", args, { cwd: repo, encoding: "utf8" });
const inBook = (name) => path.join(repo, ...BOOK.split("/"), name);
const write = (name, content) => writeFileSync(inBook(name), content);
const read = (name) => readFileSync(inBook(name), "utf8");
const stage = (name, content) => {
	write(name, content);
	git("add", "--", `${BOOK}/${name}`);
};
const setBundle = (inputs) => {
	write("bundle.json", JSON.stringify({ output: "out.js", iFileName: "Book", requiredSheetVersion: "13.2.3", inputs }));
	git("add", "--", `${BOOK}/bundle.json`);
};

async function exec(cli, args) {
	try {
		const { stdout, stderr } = await run(process.execPath, [cli, ...args], { cwd: repo });
		return { code: 0, stdout, stderr };
	} catch (error) {
		return { code: error.code, stdout: error.stdout, stderr: error.stderr };
	}
}
const bundle = (...args) => exec(BUNDLE_CLI, args);
const compare = (...args) => exec(COMPARE_CLI, args);

beforeEach(() => {
	repo = mkdtempSync(path.join(tmpdir(), "mash-cli-"));
	git("init", "-q");
	git("config", "user.name", "Test");
	git("config", "user.email", "test@example.invalid");
	git("config", "core.autocrlf", "false");
	mkdirSync(inBook(""), { recursive: true });
	setBundle(["a.js"]);
	stage("a.js", "var a = 1;\n");
});

afterEach(() => {
	rmSync(repo, { recursive: true, force: true, maxRetries: 3 });
});

describe("bundle cli", () => {
	it("rebuilds every bundle with no arguments", async () => {
		const { code } = await bundle();
		expect(code).toBe(0);
		expect(read("out.js")).toContain("var a = 1;");
	});

	it("--check exits 1 naming a stale output and 0 once rebuilt", async () => {
		write("out.js", "stale\n");
		const stale = await bundle("--check");
		expect(stale.code).toBe(1);
		expect(stale.stdout + stale.stderr).toContain("out.js");
		expect(read("out.js")).toBe("stale\n");
		await bundle();
		expect((await bundle("--check")).code).toBe(0);
	});

	it("--check stays clean for an output checked out with CRLF", async () => {
		await bundle();
		write("out.js", read("out.js").replace(/\n/g, "\r\n"));
		expect((await bundle("--check")).code).toBe(0);
	});

	it("--staged builds from the index, not the working tree", async () => {
		stage("a.js", "var a = 1;\n");
		write("a.js", "var a = 2;\n");
		const { code } = await bundle("--staged", `${BOOK}/a.js`);
		expect(code).toBe(0);
		expect(read("out.js")).toContain("var a = 1;");
		expect(read("out.js")).not.toContain("var a = 2;");
		expect(git("diff", "--cached", "--name-only")).toContain(`${BOOK}/out.js`);
	});

	it("--staged rebuilds a hand-edited output that is staged alone", async () => {
		await bundle();
		git("add", "-A");
		git("commit", "-qm", "base");
		stage("out.js", "hand edit\n");
		const { code, stderr } = await bundle("--staged", `${BOOK}/out.js`);
		expect(code).toBe(1);
		expect(stderr).toContain("Nothing left to commit");
		expect(read("out.js")).toContain("var a = 1;");
		expect(git("diff", "--cached", "--name-only")).toBe("");
	});

	it("--staged keeps a hand-edited output staged with another change", async () => {
		await bundle();
		git("add", "-A");
		git("commit", "-qm", "base");
		stage("out.js", "hand edit\n");
		stage("other.js", "var other = 1;\n");
		const { code } = await bundle("--staged");
		expect(code).toBe(0);
		expect(read("out.js")).toContain("var a = 1;");
		expect(git("diff", "--cached", "--name-only").trim()).toBe(`${BOOK}/other.js`);
	});

	it("--staged leaves an empty commit alone", async () => {
		await bundle();
		git("add", "-A");
		git("commit", "-qm", "base");
		expect((await bundle("--staged")).code).toBe(0);
	});

	it("--staged rebuilds when bundle.json itself is staged", async () => {
		stage("b.js", "var b = 1;\n");
		setBundle(["a.js", "b.js"]);
		await bundle("--staged", `${BOOK}/bundle.json`);
		expect(read("out.js")).toContain("var b = 1;");
	});

	it("--staged ignores files outside any bundle", async () => {
		await bundle();
		git("add", "-A");
		git("commit", "-qm", "base");
		const before = read("out.js");
		stage("other.js", "var other = 1;\n");
		const { code } = await bundle("--staged", `${BOOK}/other.js`);
		expect(code).toBe(0);
		expect(read("out.js")).toBe(before);
		expect(git("diff", "--cached", "--name-only").trim()).toBe(`${BOOK}/other.js`);
	});

	it("--staged finds a staged deletion on its own and exits 1 naming the input", async () => {
		await bundle();
		git("add", "-A");
		git("commit", "-qm", "base");
		unlinkSync(inBook("a.js"));
		git("add", "-A");
		const { code, stderr } = await bundle("--staged");
		expect(code).toBe(1);
		expect(stderr).toContain("a.js");
	});

	it("handles an input named with a space and an apostrophe", async () => {
		const name = "The All Father's Ink.js";
		stage(name, "var ink = 1;\n");
		setBundle([name]);
		const { code } = await bundle("--staged", `${BOOK}/${name}`);
		expect(code).toBe(0);
		expect(read("out.js")).toContain("var ink = 1;");
		expect(read("out.js")).toContain(`// Inputs: ${name}`);
	});

	it("exits 1 naming the input when a build fails", async () => {
		setBundle(["missing.js"]);
		const { code, stderr } = await bundle();
		expect(code).toBe(1);
		expect(stderr).toContain("missing.js");
	});
});

describe("compare cli", () => {
	it("prints the comparison of two files as JSON", async () => {
		write("x.js", `x["a"] = 1;\n`);
		write("y.js", `x["a"] = 2;\n`);
		const { code, stdout } = await compare(`${BOOK}/x.js`, `${BOOK}/y.js`);
		expect(code).toBe(0);
		expect(JSON.parse(stdout)).toEqual({ same: 0, changed: [`x["a"]`], onlyA: [], onlyB: [] });
	});

	it("--against exits 0 when only formatting changed", async () => {
		stage("x.js", `x["a"] = { "b": 1 };\n`);
		git("commit", "-qm", "base");
		stage("x.js", `x.a = {\n\tb: 1,\n};\n`);
		const { code } = await compare("--against", "HEAD");
		expect(code).toBe(0);
	});

	it("--against exits 1 naming a file with a changed statement", async () => {
		stage("x.js", `x["a"] = 1;\n`);
		git("commit", "-qm", "base");
		stage("x.js", `x["a"] = 2;\n`);
		const { code, stdout } = await compare("--against", "HEAD");
		expect(code).toBe(1);
		expect(stdout).toContain("x.js");
	});

	it("--against exits 1 naming a file missing from the revision", async () => {
		git("commit", "-qm", "base");
		stage("new.js", `x["a"] = 1;\n`);
		const { code, stdout } = await compare("--against", "HEAD");
		expect(code).toBe(1);
		expect(stdout).toContain("new.js");
	});
});

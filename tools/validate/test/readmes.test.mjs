import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const ROOT = path.join(import.meta.dirname, "..", "..", "..");
const RAW_PREFIX = "https://github.com/track507/Mash/raw/main/";
const EDITIONS = ["2014", "2024"];

function walk(edition) {
	return readdirSync(path.join(ROOT, edition), { withFileTypes: true, recursive: true })
		.filter((entry) => entry.isFile())
		.map((entry) => path.relative(ROOT, path.join(entry.parentPath, entry.name)).split(path.sep).join("/"));
}

const allFiles = () => EDITIONS.flatMap(walk);
const allScripts = () => allFiles().filter((file) => file.endsWith(".js"));
const allBooks = () => [...new Set(allFiles().map((file) => file.split("/").slice(0, 2).join("/")))];
const allReadmes = () => ["README.md", "docs/migration-report.md", ...allFiles().filter((file) => file.endsWith("README.md"))];
const bookReadme = (script) => `${script.split("/").slice(0, 2).join("/")}/README.md`;

function targetsOf(readme) {
	const text = readFileSync(path.join(ROOT, readme), "utf8");
	const targets = [];
	for (const [, href] of text.matchAll(/\]\(([^)\s]+)\)/g)) {
		const [location] = href.split("#");
		if (location.startsWith(RAW_PREFIX)) targets.push(decodeURI(location.slice(RAW_PREFIX.length)));
		else if (location && !/^[a-z]+:/i.test(location)) targets.push(path.posix.join(path.posix.dirname(readme), decodeURI(location)));
	}
	return targets;
}

function rawLinksOf(readme) {
	return [...readFileSync(path.join(ROOT, readme), "utf8").matchAll(/\]\((https:\/\/[^)\s]+)\)/g)]
		.map(([, href]) => href)
		.filter((href) => href.startsWith(RAW_PREFIX));
}

describe("READMEs", () => {
	it("every relative and raw link in a README resolves to a file", () => {
		for (const readme of allReadmes()) {
			for (const target of targetsOf(readme)) expect(existsSync(path.join(ROOT, target)), `${readme} -> ${target}`).toBe(true);
		}
	});

	it("every script under 2014 and 2024 is linked from its book README", () => {
		for (const script of allScripts()) expect(targetsOf(bookReadme(script)), script).toContain(script);
	});

	it("every book folder is linked from the root README", () => {
		for (const book of allBooks()) expect(targetsOf("README.md")).toContain(`${book}/README.md`);
	});

	it("encodes spaces and apostrophes in download links", () => {
		for (const readme of allReadmes()) {
			for (const href of rawLinksOf(readme)) expect(href).not.toMatch(/['\s]/);
		}
		expect(rawLinksOf("2014/Ariadne/README.md").join(" ")).toContain("Ariadne%27s%20Codex%20of%20Strings.js");
	});

	it("tells Valda players not to combine parts with the generated file", () => {
		expect(readFileSync(path.join(ROOT, "2014/Valda/README.md"), "utf8")).toMatch(/not .*combine/i);
	});

	it("says the Codex is not combined with individual book files", () => {
		expect(readFileSync(path.join(ROOT, "2014/Ariadne/README.md"), "utf8")).toMatch(/not .*combine/i);
	});

	it("keeps every credit from the source READMEs", () => {
		const valda = readFileSync(path.join(ROOT, "2014/Valda/README.md"), "utf8");
		for (const name of ["seaw0rld", "aelartheelfrogue", "nanur", "PoetGod", "u/Anasurimborlnnrilatas"]) expect(valda).toContain(name);
	});
});

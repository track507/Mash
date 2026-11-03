// Runs Prettier over staged files, passing names without a shell
//
// ! lefthook on Windows runs `sh -c "<command>"` and breaks on the quoting it adds for an apostrophe in {staged_files}
// ! Names such as The All Father's Ink.js reach Prettier only through this list
import { execFileSync, spawnSync } from "node:child_process";
import { createRequire } from "node:module";

const IN_SCOPE = /^(?:(?:2014|2024)\/.*\.js|tools\/.*\.(?:mjs|json)|[^/]+\.(?:json|jsonc|yml|yaml|mjs))$/;
const PRETTIER = createRequire(import.meta.url).resolve("prettier/bin/prettier.cjs");

const staged = execFileSync("git", ["diff", "--cached", "--name-only", "--diff-filter=ACMR", "-z"], { encoding: "utf8", maxBuffer: 2 ** 30 })
	.split("\0")
	.filter((file) => IN_SCOPE.test(file));

if (staged.length > 0) {
	const { status } = spawnSync(process.execPath, [PRETTIER, "--write", "--ignore-unknown", "--", ...staged], { stdio: "inherit" });
	process.exitCode = status ?? 1;
	// ! lefthook applies stage_fixed after every job, and the bundle and validate jobs read the index
	// ! Safe for partly staged files, because lefthook hides their unstaged hunks before the jobs run
	if (status === 0) execFileSync("git", ["add", "--", ...staged]);
}

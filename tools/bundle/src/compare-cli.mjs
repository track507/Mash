// Compares scripts by parsed statements
//   compare-cli.mjs <a> <b>          print the result for two files as JSON
//   compare-cli.mjs --against <rev>  exit 1 when any script under 2014/ or 2024/ differs from that revision
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { compareSources } from "./compare.mjs";

/**
 * @param {string[]} args
 * @returns {string}
 */
function git(...args) {
	return execFileSync("git", args, { encoding: "utf8", maxBuffer: 2 ** 30, stdio: ["ignore", "pipe", "pipe"] });
}

/**
 * @param {string} revision
 * @returns {number} The process exit code
 */
function compareAgainst(revision) {
	const scripts = git("ls-files", "--cached", "-z", "--", "2014", "2024")
		.split("\0")
		.filter((file) => file.endsWith(".js"));
	const existing = new Set(git("ls-tree", "-r", "--name-only", "-z", revision).split("\0"));
	let differing = 0;
	for (const script of scripts) {
		if (!existing.has(script)) {
			differing++;
			console.log(`${script}: not in ${revision}`);
			continue;
		}
		const { changed, onlyA, onlyB } = compareSources(git("show", `${revision}:${script}`), readFileSync(script, "utf8"));
		if (changed.length + onlyA.length + onlyB.length > 0) {
			differing++;
			console.log(`${script}: ${JSON.stringify({ changed, onlyA, onlyB })}`);
		}
	}
	console.log(`${scripts.length} scripts compared, ${differing} differ`);
	return differing > 0 ? 1 : 0;
}

/**
 * @param {string[]} argv
 * @returns {number} The process exit code
 */
function main(argv) {
	if (argv[0] === "--against" && argv[1]) return compareAgainst(argv[1]);
	if (argv.length !== 2) throw new Error("Usage: compare-cli.mjs <a> <b> | --against <rev>");
	console.log(JSON.stringify(compareSources(readFileSync(argv[0], "utf8"), readFileSync(argv[1], "utf8")), null, "\t"));
	return 0;
}

try {
	process.exitCode = main(process.argv.slice(2));
} catch (error) {
	console.error(error.message);
	process.exitCode = 1;
}

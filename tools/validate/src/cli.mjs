// Validates MPMB scripts under 2014/ and 2024/ against the rules of their edition
import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { lint } from "./lint.mjs";

const EDITIONS = ["2014", "2024"];
const REPO_ROOT = path.join(import.meta.dirname, "..", "..", "..");

/**
 * Picks the rule set from the first path segment
 *
 * @param {string} repoRelativePath - Path relative to the repository root
 * @returns {"2014" | "2024"}
 * @throws {Error} When the first segment is not an edition folder
 */
export function editionFor(repoRelativePath) {
	const [first] = repoRelativePath.split(/[\\/]/);
	if (!EDITIONS.includes(first)) throw new Error(`No edition folder in path: ${repoRelativePath}`);
	return /** @type {"2014" | "2024"} */ (first);
}

/**
 * @param {string} dir
 * @returns {string[]} Absolute paths of every .js file under the folder
 */
function walk(dir) {
	if (!existsSync(dir)) return [];
	return readdirSync(dir, { withFileTypes: true, recursive: true })
		.filter((entry) => entry.isFile() && entry.name.endsWith(".js"))
		.map((entry) => path.join(entry.parentPath, entry.name));
}

/**
 * @param {string} file - Absolute path of a script
 * @returns {boolean} True when a bundle.json in the same folder names the script as its output
 */
function isGenerated(file) {
	const config = path.join(path.dirname(file), "bundle.json");
	if (!existsSync(config)) return false;
	return JSON.parse(readFileSync(config, "utf8")).output === path.basename(file);
}

/**
 * Lists the scripts a commit in progress adds or changes
 *
 * ! Names come from git and never through the hook runner, which breaks on an apostrophe on Windows
 *
 * @param {(...args: string[]) => string} git
 * @returns {string[]} Staged .js paths under the edition folders, relative to the root
 */
function stagedScripts(git) {
	return git("diff", "--cached", "--name-only", "--diff-filter=ACMR", "-z")
		.split("\0")
		.filter((file) => file.endsWith(".js") && EDITIONS.includes(file.split("/")[0]));
}

/**
 * @param {number} count
 * @param {string} noun
 * @returns {string}
 */
const plural = (count, noun) => `${count} ${noun}${count === 1 ? "" : "s"}`;

/**
 * @param {string[]} argv
 * @returns {number} The process exit code
 */
function main(argv) {
	const args = [...argv];
	let root = REPO_ROOT;
	const rootFlag = args.indexOf("--root");
	if (rootFlag !== -1) [, root] = args.splice(rootFlag, 2);

	const stagedFlag = args.indexOf("--staged");
	const staged = stagedFlag !== -1;
	if (staged) args.splice(stagedFlag, 1);

	const git = (...gitArgs) => execFileSync("git", gitArgs, { cwd: root, encoding: "utf8", maxBuffer: 2 ** 30 });
	const requested = staged
		? stagedScripts(git).map((file) => path.resolve(root, file))
		: args.length > 0
			? args.map((file) => path.resolve(root, file))
			: EDITIONS.flatMap((edition) => walk(path.join(root, edition)));
	const files = requested.filter((file) => !isGenerated(file)).sort();

	let errors = 0;
	let warnings = 0;
	for (const file of files) {
		const relative = path.relative(root, file).split(path.sep).join("/");
		const source = staged ? git("show", `:${relative}`) : readFileSync(file, "utf8");
		const { findings } = lint(source, editionFor(relative));
		for (const finding of findings) {
			if (finding.severity === "error") {
				errors++;
				console.log(`${relative}:${finding.line}:${finding.column} ${finding.ruleId} ${finding.message}`);
			} else {
				warnings++;
			}
		}
	}
	console.log(`${plural(files.length, "file")}, ${plural(errors, "error")}, ${plural(warnings, "warning")}`);
	return errors > 0 ? 1 : 0;
}

if (import.meta.main) process.exitCode = main(process.argv.slice(2));

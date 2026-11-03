// Rebuilds, checks or stages generated whole-book scripts
//   cli.mjs                     rebuild every bundle under 2014/ and 2024/
//   cli.mjs --check             exit 1 when any output differs from its inputs, writing nothing
//   cli.mjs --staged [files...] rebuild bundles touched by the index, reading inputs from the index
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { buildBundle, findBundles, inputFiles } from "./bundle.mjs";
import { cleanSource } from "./statements.mjs";

const toPosix = (file) => file.split(path.sep).join("/");

/**
 * @param {string} root
 * @param {string[]} args
 * @returns {string}
 */
function git(root, ...args) {
	return execFileSync("git", args, { cwd: root, encoding: "utf8", maxBuffer: 2 ** 30, stdio: ["ignore", "pipe", "pipe"] });
}

/**
 * @param {string} root
 * @returns {number} The process exit code
 */
function rebuildAll(root) {
	for (const { dir, config } of findBundles(root)) {
		writeFileSync(path.join(dir, config.output), buildBundle(config, dir));
		console.log(`Built ${toPosix(path.relative(root, path.join(dir, config.output)))}`);
	}
	return 0;
}

/**
 * @param {string} root
 * @returns {number} The process exit code
 */
function check(root) {
	const bundles = findBundles(root);
	const stale = bundles.filter(({ dir, config }) => {
		const target = path.join(dir, config.output);
		return !existsSync(target) || cleanSource(readFileSync(target, "utf8")) !== buildBundle(config, dir);
	});
	for (const { dir, config } of stale) console.log(`Stale: ${toPosix(path.relative(root, path.join(dir, config.output)))}`);
	if (stale.length === 0) console.log(`${bundles.length} bundles up to date`);
	return stale.length > 0 ? 1 : 0;
}

/**
 * Rebuilds what the commit in progress touches, so the commit holds an output matching its own inputs
 *
 * ! Reads the index, because a partly staged input differs from the working tree
 * ! Staged deletions come from git, because hook runners leave deleted files out of their file lists
 *
 * @param {string} root
 * @param {string[]} files - Paths relative to the root
 * @returns {number} The process exit code
 */
function rebuildStaged(root, files) {
	const staged = git(root, "diff", "--cached", "--name-only", "-z").split("\0").filter(Boolean);
	const touched = new Set([...files.map((file) => toPosix(path.relative(root, path.resolve(root, file)))), ...staged]);
	const configs = git(root, "ls-files", "--cached", "-z", "--", "2014", "2024")
		.split("\0")
		.filter((file) => path.posix.basename(file) === "bundle.json");

	for (const configPath of configs) {
		const dir = path.posix.dirname(configPath);
		const config = JSON.parse(git(root, "show", `:${configPath}`));
		const members = [...inputFiles(config), config.output, "bundle.json"].map((file) => path.posix.join(dir, file));
		if (!members.some((member) => touched.has(member))) continue;

		const output = buildBundle(config, dir, (file) => git(root, "show", `:${toPosix(file)}`));
		const target = path.posix.join(dir, config.output);
		writeFileSync(path.join(root, target), output);
		git(root, "add", "--", target);
		console.log(`Built ${target}`);
	}

	// ! git still records a commit when a hook empties the index, so a hand edit alone stops here
	if (staged.length > 0 && git(root, "diff", "--cached", "--name-only").trim() === "") {
		throw new Error("Nothing left to commit: generated files were restored from their inputs");
	}
	return 0;
}

/**
 * @param {string[]} argv
 * @returns {number} The process exit code
 */
function main([mode, ...files]) {
	const root = process.cwd();
	if (mode === "--check") return check(root);
	if (mode === "--staged") return rebuildStaged(root, files);
	return rebuildAll(root);
}

try {
	process.exitCode = main(process.argv.slice(2));
} catch (error) {
	console.error(error.message);
	process.exitCode = 1;
}

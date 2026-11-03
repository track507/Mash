export default {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"type-enum": [2, "always", ["feat", "fix", "refactor", "perf", "test", "docs", "chore", "ci", "revert", "security"]],
		"scope-enum": [1, "always", ["ariadne", "valda", "grim-hollow", "wotc-addons", "homebrew", "bundle", "validate", "hooks", "tooling", "deps", "docs", "repo"]],
		"subject-case": [2, "always", "sentence-case"],
		"header-max-length": [2, "always", 100],
		"body-max-line-length": [2, "always", 120],
	},
};

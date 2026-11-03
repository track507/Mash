import js from "@eslint/js";
import globals from "globals";

export default [
	{
		files: ["tools/**/*.mjs", "*.mjs"],
		...js.configs.recommended,
		languageOptions: {
			sourceType: "module",
			globals: globals.node,
		},
	},
];

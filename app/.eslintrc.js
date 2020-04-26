module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:react/recommended",
		"plugin:jsx-a11y/recommended",
	],
	env: {
		browser: true,
		es6: true,
	},
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: "module",
	},
	settings: {
		react: {
			version: "latest",
		},
	},
	plugins: ["react", "@typescript-eslint", "jsx-a11y"],
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
	},
};

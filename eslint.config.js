import eslint from "@antfu/eslint-config";

export default eslint({
	svelte: true,
	stylistic: false,
	rules: {
		"no-console": "off",
		"no-unused-vars": "off",
		"import/order": "off",
		"perfectionist/sort-imports": [
			"error",
			{
				newlinesBetween: "ignore",
				groups: [
					["side-effect", "side-effect-style"],
					["builtin", "external"],
					"sveltekit",
					["internal", "internal-type"],
					["parent", "parent-type", "sibling", "sibling-type", "index", "index-type"],
					["object", "unknown"],
				],
				customGroups: {
					value: {
						sveltekit: ["$app/**", "$env/**", "$lib/**"],
					},
				},
			},
		],
		"unused-imports/no-unused-imports": "off",
		"unused-imports/no-unused-vars": "off",
		"svelte/no-at-html-tags": "off",
	},
});

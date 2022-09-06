/**
 * @type {import("tailwindcss/types").Config}
 */
module.exports = {
	plugins: [
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/typography"),
		require("@headlessui/tailwindcss"),
	],
	darkMode: "class",
	theme: {
		fontFamily: {
			mono: ["'Roboto Mono'", "monospace"],
		},
	},
};

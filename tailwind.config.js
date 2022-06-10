/**
 * @type {import("tailwindcss/types").Config}
 */
module.exports = {
	content: ["src/**/*.{vue,ts}"],
	darkMode: ["class", ".dark-mode"],
	theme: {
		extend: {
			fontFamily: {
				inter: ['"Inter"', "sans-serif"],
			},
		},
	},
};

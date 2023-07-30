import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
	darkMode: "class",
	content: [],
	plugins: [
		forms(),
		typography(),
		plugin(({ matchUtilities, theme }) => {
			matchUtilities(
				{
					"dialogue-start": (value) => ({
						[`p:nth-child(${value})`]: {
							marginLeft: "auto",
							textAlign: "right",
							color: theme("colors.zinc.400"),
						},
					}),
				},
				{
					values: {
						even: "even",
						odd: "odd",
					},
				},
			);
		}),
	],
	theme: {
		extend: {
			fontFamily: {
				mono: ["'Roboto Mono'", ...defaultTheme.fontFamily.mono],
			},
		},
	},
} satisfies Config;

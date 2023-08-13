import { addDynamicIconSelectors } from "@iconify/tailwind";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
	darkMode: "class",
	content: [],
	plugins: [
		forms(),
		typography(),
		addDynamicIconSelectors({ prefix: "i" }),
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
} satisfies Config;

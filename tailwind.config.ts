import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,md,mdx,ts,vue}"],
	plugins: [
		typography(),
		plugin(({ matchComponents, theme }) => {
			matchComponents(
				{
					"dialogue-start": (value) => ({
						[`p:not(:has([continue])):nth-child(${value})`]: {
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

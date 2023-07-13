import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	darkMode: "class",
	content: ["./content/**/*.md"],
	plugins: [forms(), typography()],
	theme: {
		extend: {
			fontFamily: {
				mono: ["'Roboto Mono'", ...defaultTheme.fontFamily.mono],
			},
		},
	},
} satisfies Config;

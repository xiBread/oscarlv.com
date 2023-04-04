import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
	darkMode: "class",
	content: ["./content/**/*.md"],
	plugins: [typography()],
} satisfies Config;

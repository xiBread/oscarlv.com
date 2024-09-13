// @ts-check

import fluidType from "tailwindcss-fluid-type";
import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,ts,svelte,md}"],
	darkMode: "selector",
	theme: {
		extend: {
			colors: {
				background: "hsl(var(--background) / <alpha-value>)",
				foreground: "hsl(var(--foreground) / <alpha-value>)",
				primary: {
					DEFAULT: "hsl(var(--primary) / <alpha-value>)",
					foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
				},
				muted: {
					DEFAULT: "hsl(var(--muted) / <alpha-value>)",
					foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
				},
				vintage: {
					denim: "hsl(211 36% 53% / <alpha-value>)",
					aloe: "hsl(82 32% 51% / <alpha-value>)",
					plum: "hsl(329 38% 44% / <alpha-value>)",
					wine: "hsl(353 51% 41% / <alpha-value>)",
					peach: "hsl(21 70% 65% /<alpha-value>)",
				},
			},
			fontFamily: {
				mono: ["'JetBrains Mono Variable'", ...fontFamily.mono],
				serif: ["'Noto Serif Display Variable'", ...fontFamily.serif],
				sans: [
					"InterVariable",
					{ fontFeatureSettings: "'calt' 1, 'cv05', 'cv11', 'ss01', 'ss07'" },
				],
			},
		},
	},
	plugins: [
		fluidType({
			settings: {
				prefix: "fluid-",
			},
		}),
	],
};

import headlessui from "@headlessui/tailwindcss";
import lineClamp from "@tailwindcss/line-clamp";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default defineNuxtConfig({
	modules: ["@nuxt/content", "@nuxt/image", "@nuxtjs/tailwindcss", "@vueuse/nuxt"],
	css: ["@/assets/main.css"],
	app: {
		head: {
			title: "",
			meta: [
				{
					name: "theme-color",
					content: "white",
				},
				{
					name: "theme-color",
					content: "#171717",
					media: "(prefers-color-scheme: dark)",
				},
				{
					property: "og:title",
					content: "Oscar Lee-Vermeren",
				},
				{
					property: "og:type",
					content: "website",
				},
				{
					property: "og:image",
					content: "/portrait.jpg",
				},
				{
					property: "og:url",
					content: "https://oscar-lv.me",
				},
			],
			link: [
				{
					rel: "icon",
					type: "image/png",
					sizes: "16x16",
					href: "/favicon-16x16.png",
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "32x32",
					href: "/favicon-32x32.png",
				},
				{
					rel: "preconnect",
					href: "https://rsms.me",
				},
				{
					rel: "stylesheet",
					href: "https://rsms.me/inter/inter.css",
				},
			],
			script: [
				{
					src: "/theme.js",
					type: "module",
				},
			],
		},
	},
	typescript: {
		shim: false,
	},
	hooks: {
		"tailwindcss:config": (config: Config) => {
			config.plugins?.push(lineClamp, typography, headlessui);
		},
	},
	content: {
		markdown: {
			tags: {
				h2: "h2",
				h3: "h3",
				h4: "h4",
			},
		},
	},
	tailwindcss: {
		cssPath: "~/assets/main.css",
		viewer: false,
		config: {
			content: [],
			darkMode: "class",
			theme: {
				fontFamily: {
					mono: ["'Roboto Mono'", "monospace"],
				},
			},
		},
	},
});

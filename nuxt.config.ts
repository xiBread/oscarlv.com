import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
	modules: ["@nuxtjs/color-mode", "@nuxtjs/google-fonts", "@nuxtjs/tailwindcss"],
	srcDir: "src/",
	app: {
		head: {
			title: "Oscar Lee-Vermeren",
			meta: [
				{
					name: "description",
					content: "I swear I'm not an art person",
				},
				{
					name: "og:title",
					content: "Oscar Lee-Vermeren",
				},
			],
			link: [{ rel: "icon", href: "/favicon.ico" }],
		},
	},
	googleFonts: {
		download: false,
		display: "swap",
		families: {
			Inter: true,
		},
	},
});

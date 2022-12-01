import typography from "@tailwindcss/typography";

export default defineNuxtConfig({
	modules: ["@nuxt/image", "@nuxtjs/tailwindcss", "@vueuse/nuxt", "nuxt-directus"],
	css: ["~/assets/main.css"],
	app: {
		head: {
			meta: [
				{
					key: "tc-light",
					name: "theme-color",
					content: "#ffffff",
				},
				{
					key: "tc-dark",
					name: "theme-color",
					content: "#171717",
					media: "(prefers-color-scheme: dark)",
				},
				{
					property: "og:type",
					content: "website",
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
	directus: {
		url: process.env.DIRECTUS_URL,
		token: process.env.DIRECTUS_TOKEN,
	},
	image: {
		imagekit: {
			baseURL: "https://ik.imagekit.io/olv/",
		},
	},
	tailwindcss: {
		cssPath: "~/assets/main.css",
		viewer: false,
		config: {
			content: [],
			darkMode: "class",
			plugins: [typography({ className: "prose" })],
		},
	},
});

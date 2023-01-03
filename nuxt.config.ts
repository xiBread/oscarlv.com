export default defineNuxtConfig({
	modules: ["@nuxt/image", "@nuxtjs/tailwindcss", "@vueuse/nuxt"],
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
	nitro: {
		prerender: {
			ignore: ["/art", "/writing"],
		},
	},
	routeRules: {
		"/": { ssr: false },
		"/about": { ssr: false },
		"/awards": { ssr: false },
	},
	runtimeConfig: {
		public: {
			contentful: {
				accessToken: process.env.CTF_ACCESS_TOKEN,
				space: process.env.CTF_SPACE_ID,
			},
		},
	},
	typescript: {
		shim: false,
	},
	image: {
		contentful: {},
	},
	tailwindcss: {
		cssPath: "~/assets/main.css",
		viewer: false,
	},
});

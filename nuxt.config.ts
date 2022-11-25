import typography from "@tailwindcss/typography";

export default defineNuxtConfig({
	modules: ["@nuxt/content", "@nuxt/image", "@nuxtjs/tailwindcss", "@vueuse/nuxt"],
	css: ["@/assets/main.css"],
	app: {
		head: {
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
					content: "https://www.oscarlv.com",
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
	appConfig: {
		socials: {
			Twitter: "https://www.twitter.com/oleevermeren",
			Instagram: "https://www.instagram.com/isocausality",
			GitHub: "https://www.github.com/xiBread",
		},
	},
	typescript: {
		shim: false,
	},
	content: {
		documentDriven: true,
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

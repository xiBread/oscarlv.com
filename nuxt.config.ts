export default defineNuxtConfig({
	// prettier-ignore
	modules: [
		"@nuxt/content",
		"@nuxt/image",
		"@nuxtjs/tailwindcss",
		"@vueuse/nuxt",
		"nuxt-icon"
	],
	css: ["~/assets/main.css"],
	build: {
		transpile: ["@headlessui/vue"],
	},
	nitro: {
		preset: "service-worker",
	},
	runtimeConfig: {
		public: {
			contentful: {
				accessToken: process.env.CTF_ACCESS_TOKEN,
				space: process.env.CTF_SPACE_ID,
			},
		},
	},
	ssr: false,
	typescript: {
		shim: false,
	},
	image: {
		provider: "contentful",
		contentful: {
			baseURL: "https://images.ctfassets.net/14cg5n5pc9y2",
		},
	},
	tailwindcss: {
		cssPath: "~/assets/main.css",
		viewer: false,
	},
});

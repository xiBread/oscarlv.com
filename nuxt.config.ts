export default defineNuxtConfig({
	modules: ["@nuxt/image", "@nuxtjs/tailwindcss", "@vueuse/nuxt"],
	css: ["~/assets/main.css"],
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

export default defineNuxtConfig({
	// prettier-ignore
	modules: [
		"@nuxt/content",
		"@nuxt/image",
		"@nuxtjs/tailwindcss",
		"@vueuse/nuxt",
	],
	css: ["@animxyz/core", "~/assets/main.css"],
	typescript: {
		shim: false,
	},
	image: {
		provider: "imagekit",
		imagekit: {
			baseURL: "https://ik.imagekit.io/olv",
		},
	},
	tailwindcss: {
		cssPath: "~/assets/main.css",
		viewer: false,
	},
});

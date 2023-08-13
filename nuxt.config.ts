export default defineNuxtConfig({
	// prettier-ignore
	modules: [
		"@nuxt/content",
		"@nuxt/image",
		"@nuxtjs/tailwindcss",
		"@vueuse/nuxt",
	],
	css: ["@animxyz/core"],
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
		viewer: false,
	},
});

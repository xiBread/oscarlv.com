export default defineNuxtConfig({
	// prettier-ignore
	modules: [
		"@nuxt/content",
		"@nuxtjs/tailwindcss",
		"@vueuse/nuxt",
		"nuxt-icon"
	],
	css: ["~/assets/main.css"],
	typescript: {
		shim: false,
	},
	tailwindcss: {
		cssPath: "~/assets/main.css",
		viewer: false,
	},
});

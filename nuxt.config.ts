import { defineNuxtConfig } from "nuxt";

const s3Base = "https://oscarlv.s3.amazonaws.com/";

export default defineNuxtConfig({
	modules: ["@nuxt/content", "@nuxt/image", "@nuxtjs/tailwindcss", "@vueuse/nuxt"],
	css: ["@/assets/css/main.css"],
	typescript: {
		shim: false,
		strict: true,
	},
	vite: {
		define: {
			S3_BASE: JSON.stringify(s3Base),
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
	image: {
		domains: [s3Base],
		alias: {
			s3: s3Base,
		},
	},
});

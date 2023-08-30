import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import vue from "@astrojs/vue";
import { defineConfig, sharpImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), vue(), mdx()],
	output: "hybrid",
	adapter: vercel(),
	image: {
		service: sharpImageService(),
		domains: ["ik.imagekit.io"],
	},
});

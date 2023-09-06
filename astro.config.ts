import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";

const domains = ["ik.imagekit.io"];

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), vue(), mdx()],
	output: "hybrid",
	adapter: vercel({
		imagesConfig: {
			domains,
			sizes: [1080, 2048],
		},
		imageService: true,
	}),
	// @ts-expect-error
	image: {
		domains: ["ik.imagekit.io"],
	},
});

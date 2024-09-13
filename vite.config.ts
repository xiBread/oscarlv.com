import { defineConfig } from "vite";
import glsl from "vite-plugin-glsl";
import { sveltekit } from "@sveltejs/kit/vite";

export default defineConfig({
	server: {
		fs: {
			allow: ["./.velite"],
		},
	},
	plugins: [glsl(), sveltekit()],
});

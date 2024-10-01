import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import glsl from "vite-plugin-glsl";

export default defineConfig({
	server: {
		fs: {
			allow: ["./.velite"],
		},
	},
	plugins: [glsl(), tailwindcss(), sveltekit()],
});

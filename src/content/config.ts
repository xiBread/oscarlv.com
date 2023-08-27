import { defineCollection, z } from "astro:content";

const shared = z.object({ title: z.string() });

export const collections = {
	art: defineCollection({
		type: "content",
		schema: shared.extend({
			description: z.string(),
			cover: z.string().startsWith("/"),
		}),
	}),
	writing: defineCollection({
		type: "content",
		schema: shared.extend({
			excerpt: z.string().optional(),
			start: z.enum(["even", "odd"]).optional(),
			explicit: z.boolean().optional(),
			overrides: z.string().optional(),
		}),
	}),
	single: defineCollection({
		type: "content",
		schema: shared,
	}),
};

import { defineCollection, z } from "astro:content";

const base = z.object({ title: z.string() });

export const collections = {
	art: defineCollection({
		type: "content",
		schema: base.extend({
			description: z.string(),
			cover: z.string().startsWith("/"),
		}),
	}),
	writing: defineCollection({
		type: "content",
		schema: base.extend({
			excerpt: z.string().optional(),
			start: z.enum(["even", "odd"]).optional(),
			explicit: z.boolean().optional(),
		}),
	}),
	single: defineCollection({
		type: "content",
		schema: base,
	}),
};

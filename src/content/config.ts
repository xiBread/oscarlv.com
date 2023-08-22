import { defineCollection, z } from "astro:content";

export const collections = {
	writing: defineCollection({
		type: "content",
		schema: z.object({
			title: z.string(),
			single: z.boolean().optional(),
			excerpt: z.string().optional(),
			start: z.enum(["even", "odd"]).optional(),
			explicit: z.boolean().optional(),
			overrides: z.string().optional(),
		}),
	}),
};

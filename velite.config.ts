import { defineConfig, s } from "velite";

const slugify = (str: string) =>
	str
		.toLowerCase()
		.replace(/ /g, "-")
		.replace(/[^\w-]/g, "");

const artSchema = s
	.object({
		title: s.string(),
		cover: s.string(),
		content: s.markdown(),
	})
	.transform((schema) => ({
		...schema,
		slug: slugify(schema.title),
		cover: `${slugify(schema.title)}/${schema.cover}`,
	}));

const writingSchema = s
	.object({
		date: s
			.isodate()
			.transform((iso) => {
				const date = new Date(iso);
				const dateTz = new Date(date.getTime() + date.getTimezoneOffset() * 60_000);

				return dateTz.toISOString();
			})
			.optional(),
		title: s.string(),
		excerpt: s.string().optional(),
		start: s.enum(["left", "right"]).default("left"),
		explicit: s.boolean().default(false),
		image: s.string().optional(),
		content: s.markdown(),
		path: s.path(),
	})
	.transform((schema) => {
		let { excerpt } = schema;

		if (!excerpt) {
			const firstLine = /<p>([^<]*)(?:<\/p>)?/
				.exec(schema.content.split("\n")[0])?.[1]
				.replace(/((?<=\w)|,)$/, ".");

			excerpt = firstLine ?? "";
		}

		return {
			...schema,
			slug: slugify(schema.title),
			category: schema.path.split("/")[1],
			excerpt,
		};
	});

export default defineConfig({
	root: "src/content",
	output: {
		assets: "static",
	},
	collections: {
		// art: {
		// 	name: "ArtEntry",
		// 	pattern: "art/*.md",
		// 	schema: artSchema,
		// },
		writing: {
			name: "WritingEntry",
			pattern: "writing/**/*.md",
			schema: writingSchema,
		},
		// about: {
		// 	name: "AboutEntry",
		// 	pattern: "about.md",
		// 	single: true,
		// 	schema: s.object({ content: s.markdown() }),
		// },
		quotes: {
			name: "Quote",
			pattern: "quotes.yaml",
			schema: s.object({
				content: s.string(),
				quotee: s.string(),
				source: s
					.union([
						s.string(),
						s.object({
							text: s.string(),
							url: s.string(),
						}),
					])
					.optional(),
			}),
		},
	},
});

import { documentToHtmlString as render } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import type { ArtEntry, Entry, WritingEntry } from "~/util/types";
import ctf, { type EntriesQueries, createClient } from "contentful";

export default function useContentful() {
	const config = useRuntimeConfig();
	const client = (import.meta.env.DEV ? createClient : ctf.createClient)(
		config.public.contentful
	);

	function prependHeading(entry: Entry): void {
		entry.body.content.unshift({
			nodeType: BLOCKS.HEADING_1,
			data: {},
			content: [
				{
					nodeType: "text",
					data: {},
					value: entry.title,
					marks: [],
				},
			],
		});
	}

	async function getEntry<T extends Record<string, any>>(type: string, query: EntriesQueries) {
		return (await client.getEntries<T>({ content_type: type, ...query })).items[0].fields;
	}

	return {
		...client,
		render,
		prependHeading,
		getArtEntry: (slug: string) => {
			return getEntry<ArtEntry>("art", { "fields.slug": slug });
		},
		getWritingEntry: (slug: string) => {
			return getEntry<WritingEntry>("writing", { "fields.slug": slug });
		},
		getLandingPageEntry: (title: string) => {
			return getEntry<Entry>("landing-page", { "fields.title": title });
		},
	};
}

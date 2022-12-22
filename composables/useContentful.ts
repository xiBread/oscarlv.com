import { documentToHtmlString as render } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import type { Entry } from "~/util/types";
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

	async function getSingleAsset(title: string): Promise<string> {
		const { items } = await client.getAssets({ "fields.title": title });

		return items[0].fields.file!.url;
	}

	async function getSingleEntry<T extends Record<string, any>>(
		type: string,
		query: EntriesQueries<T>
	): Promise<T> {
		const response = await client.getEntries<T>({
			content_type: type,
			limit: 1,
			...query,
		});

		return response.items[0].fields as T;
	}

	return {
		...client,
		render,
		prependHeading,
		getSingleAsset,
		getSingleEntry,
		getLandingPageEntry: (title: string): Promise<Entry> => {
			return getSingleEntry("landing-page", { "fields.title": title });
		},
	};
}

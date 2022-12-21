import { documentToHtmlString as render } from "@contentful/rich-text-html-renderer";
import type { Entry } from "~/util/types";
import ctf, { type EntriesQueries } from "contentful";

export default function useContentful() {
	const config = useRuntimeConfig();
	const client = ctf.createClient({
		space: "14cg5n5pc9y2",
		accessToken: "MSv_XHu_4jjONl-Z_PGvoWdJgoeWtJjgC7tyZPKkd84",
	});

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
		getSingleAsset,
		getSingleEntry,
		getLandingPageEntry: (title: string): Promise<Entry> => {
			return getSingleEntry("landing-page", { "fields.title": title });
		},
	};
}

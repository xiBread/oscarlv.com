import type { Entry } from "~/util/types";

export default function useEntryHead(entry: Entry): void {
	const title = `${entry.title} - Oscar Lee-Vermeren`;

	const route = useRoute();
	const url = new URL(route.path, "https://www.oscarlv.com");

	useHead({
		title,
		meta: [
			{ name: "author", content: "Oscar Lee-Vermeren" },
			{ name: "description", content: title },

			{ property: "og:title", content: title },
			{ property: "og:description", content: title },
			{ property: "og:url", content: url.href },
		],
	});
}

import type { Entry } from "~/util/types";

export default function useEntryHead(entry: Entry): void {
	const title = `${entry.title} - Oscar Lee-Vermeren`;

	const route = useRoute();
	const url = new URL(route.path, "https://www.oscarlv.com");

	useSeoMeta({
		title,
		author: "Oscar Lee-Vermeren",
		description: title,
		ogTitle: title,
		ogDescription: title,
		ogUrl: url.href,
	});
}

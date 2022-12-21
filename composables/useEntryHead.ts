import type { Entry } from "~/util/types";

export default function useEntryHead(entry: Entry): void {
	const { render } = useContentful();
	const body = render(entry.body);

	const title = `${entry.title} - Oscar Lee-Vermeren`;
	const description = /(?<=\n)(.+?)(?=\n|$)/.exec(body.replace(/<[^>]+>/g, ""))?.[1];

	const image = "image" in entry ? `https://ik.imagekit.io/olv/${entry.image}` : "/portrait.jpg";

	const route = useRoute();
	const url = new URL(route.path, "https://www.oscarlv.com");

	useHead({
		title,
		meta: [
			{ name: "author", content: "Oscar Lee-Vermeren" },
			{ name: "description", content: description },

			{ property: "og:title", content: title },
			{ property: "og:description", content: description },
			{ property: "og:image", content: image },
			{ property: "og:url", content: url.href },
		],
	});
}

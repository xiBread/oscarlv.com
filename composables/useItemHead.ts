import type { Item } from "~/util/types";

export default function useItemHead(item: Item): void {
	const title = `${item.title} - Oscar Lee-Vermeren`;
	const description = /(?<=\n)(.+?)(?=\n|$)/.exec(item.content.replace(/<[^>]+>/g, ""))?.[1];

	const image = "image" in item ? `https://ik.imagekit.io/olv/${item.image}` : "/portrait.jpg";

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

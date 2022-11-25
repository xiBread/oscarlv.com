import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

export default function appendHead(content: ParsedContent) {
	const route = useRoute();
	const url = new URL(route.path, "https://www.oscarlv.com");

	const meta = [
		{ property: "og:title", content: `${content.title} - Oscar Lee-Vermeren` },
		{ property: "og:description", content: content.description },
		{ property: "og:url", content: url.href },
	];

	if (content.img) {
		meta.push({ property: "og:image", content: `https://ik.imagekit.io/olv/${content.img}` });
	}

	useHead({
		link: [{ rel: "canonical", href: url.href }],
		meta,
	});
}

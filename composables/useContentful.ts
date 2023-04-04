import { documentToHtmlString as render } from "@contentful/rich-text-html-renderer";
import ctf, { createClient } from "contentful";

export default function useContentful() {
	const config = useRuntimeConfig();
	const client = (import.meta.env.DEV ? createClient : ctf.createClient)(
		config.public.contentful
	);

	return { ...client, render };
}

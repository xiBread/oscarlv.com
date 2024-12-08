import { error } from "@sveltejs/kit";
import { writing } from "velite:content";

export function load({ params }) {
	const entry = writing.find((entry) => entry.slug === params.slug);

	if (!entry) {
		error(404, { message: "Not found" });
	}

	return { entry };
}

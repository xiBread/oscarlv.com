import { error } from "@sveltejs/kit";
import { getFolder } from "$lib/imagekit";

export async function load({ params }) {
	const photos = await getFolder("/");
	const photo = photos.find((f) => f.slug === params.slug);

	if (!photo) {
		error(404, { message: "Not found" });
	}

	return { photos, photo };
}

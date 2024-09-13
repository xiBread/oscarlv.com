import { getFolder } from "$lib/imagekit";

export async function load() {
	return { photos: await getFolder("/") };
}

import ImageKit from "imagekit";
import type { FileObject } from "imagekit/dist/libs/interfaces";
import { IK_PRIVATE_KEY, IK_PUBLIC_KEY } from "$env/static/private";
import { PUBLIC_IK_URL } from "$env/static/public";

export const imagekit = new ImageKit({
	urlEndpoint: PUBLIC_IK_URL,
	publicKey: IK_PUBLIC_KEY,
	privateKey: IK_PRIVATE_KEY,
});

export async function getFolder(path: string) {
	const files = await imagekit.listFiles({ path });

	return files
		.filter((obj): obj is FileObject => obj.type === "file")
		.map((file) => {
			const parts = file.filePath.slice(1).split("/");

			return { ...file, slug: (parts[1] ?? parts[0]).split(".")[0] };
		});
}

export type Photo = Awaited<ReturnType<typeof getFolder>>[number];

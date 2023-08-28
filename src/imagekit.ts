import ImageKit from "imagekit";

const ik = new ImageKit({
	publicKey: import.meta.env.IK_PUBLIC_KEY,
	privateKey: import.meta.env.IK_PRIVATE_KEY,
	urlEndpoint: "https://ik.imagekit.io/olv",
});

export async function getFolder(folder: string) {
	return ik.listFiles({ path: folder });
}

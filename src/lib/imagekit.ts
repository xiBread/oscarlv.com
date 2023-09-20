import ImageKit from "imagekit";

const ik = new ImageKit({
	publicKey: import.meta.env.IK_PUBLIC_KEY,
	privateKey: import.meta.env.IK_PRIVATE_KEY,
	urlEndpoint: "https://ik.imagekit.io/olv",
});

export function getFolder(folder: string) {
	return ik.listFiles({ path: folder });
}

export async function getVault() {
	return (await ik.listFiles({})).filter((file) => file.filePath.split("/").length === 2);
}

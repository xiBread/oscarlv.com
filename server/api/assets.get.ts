export default defineEventHandler(async (event) => {
	const { collection } = getQuery(event);

	const response = await fetch(
		`https://api.imagekit.io/v1/files${collection ? `?path=${collection}` : ""}`,
		{
			headers: {
				Authorization: `Basic ${process.env.IMAGEKIT_PRIVATE_KEY}`,
			},
		}
	);

	const data = (await response.json()) as Record<string, string>[];

	return data.map((image) => image.filePath);
});

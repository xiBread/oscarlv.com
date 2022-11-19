import { ListObjectsV2Command, S3Client } from "@aws-sdk/client-s3";

const client = new S3Client({
	credentials: {
		accessKeyId: process.env.AWS_ACCESS!,
		secretAccessKey: process.env.AWS_SECRET!,
	},
	region: "us-east-1",
});

export default defineEventHandler(async (event) => {
	const { collection } = getQuery(event);

	const command = new ListObjectsV2Command({
		Bucket: "oscarlv",
		Prefix: collection ? `${collection}/` : "",
	});

	const output = await client.send(command);

	return (
		output.Contents?.map((object) => object.Key ?? "").filter((key) =>
			/\.(jpe?|pn)g$/.test(key)
		) ?? []
	);
});

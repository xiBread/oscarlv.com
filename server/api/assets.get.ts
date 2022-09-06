import { ListObjectsV2Command, S3Client } from "@aws-sdk/client-s3";

const client = new S3Client({
	credentials: {
		accessKeyId: process.env.AWS_ACCESS!,
		secretAccessKey: process.env.AWS_SECRET!,
	},
	region: "us-east-1",
});

const extRegex = /\.(jpe?g|png|gif)$/;

export default defineEventHandler(async (event) => {
	const { collection } = useQuery(event);
	const collRegex = new RegExp(`collections/${collection}/\\w+`);

	const command = new ListObjectsV2Command({ Bucket: "oscarlv" });
	const output = await client.send(command);

	const keys =
		output.Contents?.map((object) => object.Key ?? "").filter((key) =>
			(collection ? collRegex : extRegex).test(key)
		) ?? [];

	return keys.map((key) => `https://oscarlv.s3.amazonaws.com/${key}`);
});

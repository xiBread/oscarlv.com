import { ListObjectsV2Command, S3Client } from "@aws-sdk/client-s3";

const client = new S3Client({
	region: "us-east-1",
	credentials: {
		accessKeyId: "AKIA2OLBGH4MKOMWCX6X",
		secretAccessKey: "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",
	},
});

export default defineEventHandler(async () => {
	const cmd = new ListObjectsV2Command({ Bucket: "oscarlv" });
	const res = await client.send(cmd);

	return res;
});

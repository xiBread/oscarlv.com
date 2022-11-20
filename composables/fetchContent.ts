export default function fetchContent() {
	const { path } = useRoute();

	return useAsyncData(path, () =>
		queryContent(path)
			.where({ _path: { $not: path } })
			.find()
	);
}

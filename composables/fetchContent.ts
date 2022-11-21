export default async function fetchContent() {
	const { path } = useRoute();
	const { data } = await useAsyncData(path, () => {
		return queryContent(path)
			.where({ _path: { $not: path } })
			.find();
	});

	return data.value?.sort((a, b) => normalize(a.title!).localeCompare(normalize(b.title!))) ?? [];
}

const normalize = (title: string) => title.toLowerCase().replace(/the /i, "");

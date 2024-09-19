import { writing } from "velite:content";

export function load() {
	const categories = Object.groupBy(
		writing.sort((a, b) => a.path.localeCompare(b.path)),
		(entry) => entry.path.split("/")[1],
	);

	return { categories };
}

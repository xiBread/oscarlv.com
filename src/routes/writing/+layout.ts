import { writing, type WritingEntry } from "velite:content";

export function load() {
	const categories = writing
		.sort((a, b) => a.path.localeCompare(b.path))
		.reduce<Record<string, WritingEntry[]>>((all, entry) => {
			const category = entry.path.split("/")[1];
			(all[category] ??= []).push(entry);

			return all;
		}, {});

	return { categories };
}

import { type Readable, readable } from "svelte/store";

export function useMediaQuery(query: string): Readable<boolean> {
	if (typeof window === "undefined" || !query) {
		return readable(false)
	}

	return readable(false, (set) => {
		const mql = matchMedia(query);
		set(mql.matches);

		const onChange = (event: MediaQueryListEvent) => set(event.matches);
		mql.addEventListener("change", onChange);

		return () => mql.removeEventListener("change", onChange)
	})
}

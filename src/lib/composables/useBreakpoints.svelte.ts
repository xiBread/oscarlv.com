import { get, type Readable, readable } from "svelte/store";
import { useMediaQuery } from "./useMediaQuery";

const breakpoints = {
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
};

type Breakpoint = keyof typeof breakpoints;
type Breakpoints = Record<Breakpoint, boolean>;

export function useBreakpoints(): Readable<Breakpoints> {
	const stores = $derived(
		Object.entries(breakpoints).reduce(
			(all, [bp, width]) => ({
				...all,
				[bp]: useMediaQuery(`(min-width: ${width}px)`),
			}),
			{} as Record<Breakpoint, Readable<boolean>>,
		),
	);

	return readable<Breakpoints>({ sm: false, md: false, lg: false, xl: false }, (set) => {
		Object.values(stores).map((store) => {
			return store.subscribe(() => {
				const matching = Object.entries(stores).reduce(
					(all, [bp, store]) => ({ ...all, [bp]: get(store) }),
					{} as Breakpoints,
				);

				return set(matching);
			});
		});
	});
}

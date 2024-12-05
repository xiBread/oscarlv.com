import { MediaQuery } from "svelte/reactivity";

export function useBreakpoints() {
	return {
		sm: new MediaQuery("(min-width: 640px)"),
		md: new MediaQuery("(min-width: 768px)"),
		lg: new MediaQuery("(min-width: 1024px)"),
		xl: new MediaQuery("(min-width: 1280px)"),
	}
}

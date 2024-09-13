import { gsap } from "gsap";
import type { Action } from "svelte/action";

export const enter: Action<HTMLElement, gsap.TweenVars | undefined> = (node, vars = {}) => {
	gsap.from(node.children, {
		y: 10,
		autoAlpha: 0,
		duration: 1,
		stagger: 0.15,
		// @ts-expect-error - bug
		...vars,
	});
};

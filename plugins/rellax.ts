import rellax from "rellax";

export default defineNuxtPlugin((nuxt) => {
	nuxt.vueApp.directive("rellax", {
		mounted: (el: Element) => void rellax(el, { round: true }),
	});
});

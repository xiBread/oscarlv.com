import Rellax from "rellax";

export default defineNuxtPlugin((nuxt) => {
	nuxt.vueApp.directive("rellax", {
		mounted: (el: Element) => void Rellax(el, { round: true }),
	});
});

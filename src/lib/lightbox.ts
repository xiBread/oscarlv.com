import { deepMap } from "nanostores";

export const $lightbox = deepMap({
	target: {
		src: "",
		name: "",
	},
	isOpen: false,
});

export function registerImages(): void {
	const images = document.querySelectorAll("img");

	for (const image of images) {
		image.addEventListener(
			"click",
			() => {
				$lightbox.set({
					target: {
						src: image.src,
						name: image.title,
					},
					isOpen: true,
				});
			},
			{ capture: true },
		);
	}
}

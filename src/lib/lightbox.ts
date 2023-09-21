import { deepMap } from "nanostores";

export const $lightbox = deepMap({
	image: {} as HTMLImageElement,
	isOpen: false,
});

export function registerImages(): void {
	const images = document.querySelectorAll("img");

	for (const image of images) {
		image.addEventListener(
			"click",
			() => {
				$lightbox.set({
					image,
					isOpen: true,
				});
			},
			{ capture: true },
		);
	}
}

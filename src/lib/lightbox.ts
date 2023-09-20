import { map } from "nanostores";

export const $lightbox = map({
	target: "",
	isOpen: false,
});

export function registerImages(): void {
	const images = document.querySelectorAll("img");

	for (const image of images) {
		image.addEventListener(
			"click",
			() => {
				$lightbox.set({ target: image.src, isOpen: true });
			},
			{ capture: true },
		);
	}
}

export default function url(path: string, w: number, h: number) {
	return `https://ik.imagekit.io/olv${path}?tr=w-${w},h-${h}&f-webp`;
}

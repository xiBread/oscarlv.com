<script lang="ts">
	import type { HTMLImgAttributes } from "svelte/elements";

	interface Props extends HTMLImgAttributes {
		img?: HTMLImageElement;
		aspectRatio?: `${string}:${string}`;
	}

	let {
		src,
		width,
		height,
		aspectRatio,
		decoding = "async",
		loading = "lazy",
		img = $bindable(),
		...rest
	}: Props = $props();

	const url = new URL(`https://ik.imagekit.io/olv/${src}`);

	const transformations = [];

	if (width) transformations.push(`w-${width}`);
	if (height) transformations.push(`h-${height}`);
	if (aspectRatio) transformations.push(`ar-${aspectRatio.replace(":", "-")}`);

	if (transformations.length) {
		url.searchParams.set("tr", transformations.join(","));
	}
</script>

<img {width} {height} {decoding} {loading} src={url.toString()} {...rest} bind:this={img} />

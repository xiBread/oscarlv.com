<script lang="ts">
	import { Canvas } from "@threlte/core";
	import Distortion from "$lib/components/Distortion.svelte";

	const { data } = $props();

	const current = $derived(data.photos.indexOf(data.photo));

	const prev = $derived(data.photos[current - 1]);
	const next = $derived(data.photos[current + 1]);
</script>

<div class="flex-center flex h-svh px-4">
	{#key data.photo.fileId}
		<div
			class="distort h-full max-h-[80vh] max-w-[95vw]"
			style:aspect-ratio="{data.photo.width} / {data.photo.height}"
		>
			<Canvas>
				<Distortion src="https://ik.imagekit.io/olv{data.photo.filePath}" />
			</Canvas>
		</div>
	{/key}
</div>

<div
	class="absolute bottom-8 flex w-full items-center justify-between px-4 font-semibold uppercase md:px-8"
>
	<a href="/art">Back</a>

	<div class="flex gap-x-4">
		{#if prev}
			<a href="/art/{prev.slug}">Prev</a>
		{:else}
			<span class="opacity-50">Prev</span>
		{/if}

		{#if next}
			<a href="/art/{next.slug}">Next</a>
		{:else}
			<span class="opacity-50">Next</span>
		{/if}
	</div>
</div>

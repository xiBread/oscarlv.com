<script lang="ts">
	import { gsap } from "gsap";
	import { onMount } from "svelte";
	import { useBreakpoints } from "$lib/composables";
	import type { Photo } from "$lib/imagekit";
	import Image from "./Image.svelte";

	const { photos }: { photos: Photo[] } = $props();

	let gallery: HTMLElement;
	let galleryTitle: HTMLElement;

	const breakpoints = useBreakpoints();

	const progress = $state({ value: 0 });

	const length = $derived(breakpoints.lg.current ? 5 : breakpoints.md.current ? 3 : 2);
	const grid = $derived.by(() => {
		const sorted = photos.toSorted((a, b) => b.height - a.height);
		const columns = Array.from({ length }, () => ({ photos: [] as Photo[], height: 0 }));

		for (const img of sorted) {
			const shortest = columns.reduce((min, photo) => {
				return photo.height < min.height ? photo : min;
			});

			shortest.photos.push(img);
			shortest.height += img.height / img.width;
		}

		return columns;
	});

	onMount(() => {
		gsap.to(galleryTitle, {
			text: "{ Gallery }",
			duration: 1.15,
			ease: "none",
			scrollTrigger: {
				trigger: galleryTitle,
				start: "top center+=100",
			},
		});

		gsap.to(progress, {
			value: 1,
			ease: "none",
			scrollTrigger: {
				trigger: gallery,
				start: "top bottom",
				end: "bottom top",
				scrub: true,
			},
		});
	});
</script>

<div id="gallery" class="px-2 pb-20" bind:this={gallery}>
	<h2
		class="flex-center flex w-full pb-32 font-mono text-base font-medium uppercase"
		aria-label="Gallery"
		bind:this={galleryTitle}
	></h2>

	<div class="flex gap-2">
		{#each grid as column, i}
			<div
				class="w-full"
				style:transform="translateY({100 * progress.value * (i % 2 ? 1 : -1)}px)"
			>
				{#each column.photos as photo (photo.fileId)}
					<a class="relative mb-2 block" href="/art/{photo.slug}">
						<!-- NOTE: Checking if width > 1200 for both dimensions is intentional -->
						<Image
							class="h-auto w-full object-cover"
							src={photo.filePath}
							width={photo.width > 1200 ? photo.width / 4 : photo.width}
							height={photo.width > 1200 ? photo.height / 4 : photo.height}
						/>
					</a>
				{/each}
			</div>
		{/each}
	</div>
</div>

<style>
	h2::after {
		content: "";
		width: 0.8ch;
		height: 1.15rem;
		margin-left: 4px;
		background: currentColor;
		animation: blink 1s step-end infinite;
	}

	@keyframes blink {
		from,
		to {
			opacity: 0;
		}

		50% {
			opacity: 1;
		}
	}
</style>

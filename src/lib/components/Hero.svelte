<script lang="ts">
	import { gsap } from "gsap";
	import { onMount } from "svelte";
	import Icon from "$lib/components/Icon.svelte";

	interface Word {
		text: string;
		class: string;
		ref?: HTMLElement;
	}

	const words: Word[] = [
		{ text: "Oliver", class: "font-semibold col-start-5" },
		{ text: "Mortimer", class: "font-light col-start-11" },
		{ text: "Rose", class: "font-thin col-start-8" },
	];

	let indicator: HTMLElement;

	onMount(() => {
		gsap.set("#hero", { visibility: "visible" });

		const enterTimeline = gsap
			.timeline({
				defaults: {
					autoAlpha: 0,
					duration: 1.5,
					ease: "expo",
				},
			})
			.from(".scroll-progress", {})
			.from("#hero .word", { yPercent: 100, stagger: 0.15 }, "<")
			.from(indicator, { y: 15 }, "<0.5");

		const scrollTimeline = gsap
			.timeline({
				scrollTrigger: {
					trigger: "#hero",
					scrub: true,
					start: "top top",
					end: "bottom top",
				},
			})
			.to(indicator, { autoAlpha: 0 }, "<");

		for (let i = 0; i < words.length; i++) {
			scrollTimeline.to(words[i].ref!, { xPercent: i % 2 ? 5 : -5 * (i + 1) }, "<");
		}

		return () => {
			enterTimeline.kill();
			scrollTimeline.kill();
		};
	});
</script>

<section id="hero" class="invisible relative h-svh">
	<div class="flex-center flex h-full flex-col">
		<h1
			class="grid w-full grid-cols-36 overflow-hidden text-[max(12vw,4rem)]/[0.85] tracking-tighter"
		>
			{#each words as word}
				<div class="-col-end-1 overflow-hidden {word.class}" bind:this={word.ref}>
					<span class="word inline-block uppercase">{word.text}</span>
				</div>
			{/each}
		</h1>
	</div>

	<div class="absolute right-6 bottom-8">
		<div class="flex items-center gap-x-2" bind:this={indicator}>
			<span class="text-sm">Scroll</span>
			<Icon name="corner" class="text-vintage-peach mt-0.5 size-3" />
		</div>
	</div>
</section>

<script lang="ts">
	import { Canvas } from "@threlte/core";
	import { gsap } from "gsap";
	import SplitType from "split-type";
	import { onDestroy, onMount } from "svelte";
	import Distortion from "$lib/components/Distortion.svelte";
	import Gallery from "$lib/components/Gallery.svelte";
	import { useBreakpoints } from "$lib/composables";

	type Timeline = gsap.core.Timeline | undefined;

	const { data } = $props();
	const breakpoints = useBreakpoints();

	let introTl: Timeline;

	let mission: HTMLElement;
	let missionTl: Timeline;

	onMount(() => {
		SplitType.create(mission, { types: "words" });
	});

	onDestroy(() => {
		introTl?.kill();
		missionTl?.kill();
	});

	$effect(() => {
		const exitTl = gsap
			.timeline({
				scrollTrigger: {
					trigger: "#art-hero",
					start: "top top",
					end: "bottom bottom",
					scrub: true,
				},
				defaults: {
					duration: 1.5,
					ease: "expo.inOut",
				},
			})
			.to(".distorted", { "--clip-y": "50%" })
			.to(".title-1", { y: $breakpoints.lg ? -100 : 100 })
			.to(".title-2", { y: 100 }, "<");

		return () => exitTl.kill();
	});

	function onload() {
		gsap.set([".title-1", ".title-2"], { opacity: 1 });

		introTl = gsap
			.timeline({
				defaults: {
					duration: 1.5,
					ease: "expo.inOut",
				},
			})
			.to(".distorted", { "--clip-x": "0%" })
			.from(".title-1", $breakpoints.lg ? { xPercent: 100 } : { y: 50 }, "<0.65")
			.from(".title-2", $breakpoints.lg ? { xPercent: -100 } : { y: 50 }, "<");

		missionTl = gsap
			.timeline({
				scrollTrigger: {
					trigger: "#mission",
					start: "top center",
					end: "bottom bottom",
					scrub: true,
				},
			})
			.from("#mission .word", {
				color: "transparent",
				ease: "steps(1)",
				duration: 0.3,
				stagger: {
					amount: 1,
					from: "start",
				},
			})
			.to("#mission .word", { autoAlpha: 0 });
	}
</script>

<svelte:head>
	<title>art | oliver rose.</title>
</svelte:head>

<div id="art-hero" class="relative h-[300svh] px-4">
	<div class="flex-center bg-background sticky top-0 flex h-svh">
		{#if $breakpoints.lg}
			<h1
				class="absolute-center text-fluid-5xl pointer-events-none absolute z-10 uppercase text-white mix-blend-difference"
			>
				<div class="relative right-[60%] max-w-min overflow-hidden">
					<span class="title-1 block opacity-0">Independent</span>
				</div>

				<div class="h-28"></div>

				<div class="relative left-[70%] overflow-hidden">
					<span class="title-2 block opacity-0">Photographer</span>
				</div>
			</h1>
		{/if}

		<div class="relative h-full max-h-[80%]">
			{#if !$breakpoints.lg}
				<h1 class="absolute left-4 top-4 z-10 h-full text-white mix-blend-difference">
					<div class="overflow-hidden">
						<span class="title-1 block">Independent</span>
					</div>

					<div class="overflow-hidden">
						<span class="title-2 block">Photographer</span>
					</div>
				</h1>
			{/if}

			<div class="distorted aspect-[3/4] h-full overflow-hidden rounded-[0_2rem]">
				<Canvas>
					<Distortion
						src="https://ik.imagekit.io/olv/under-pressure.jpg"
						initial={false}
						{onload}
					/>
				</Canvas>
			</div>
		</div>
	</div>
</div>

<div id="mission" class="relative h-[300lvh] px-4 md:px-8">
	<div class="flex-center sticky top-0 -mt-[65lvh] flex h-lvh">
		<div class="max-w-screen-lg">
			<h2 class="text-fluid-7xl text-center font-black uppercase" bind:this={mission}>
				I specialize in
				<span class="font-serif font-normal">fine-art</span>
				photography with an emphasis on highlighting
				<span class="font-serif font-normal">hidden sentiments</span>
			</h2>
		</div>
	</div>
</div>

<Gallery photos={data.photos} />

<style>
	.distorted {
		--clip-x: 50%;
		--clip-y: 0%;
		clip-path: inset(var(--clip-y) var(--clip-x));
	}
</style>

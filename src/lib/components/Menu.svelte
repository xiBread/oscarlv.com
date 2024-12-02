<script lang="ts">
	import { gsap } from "gsap";
	import { CustomEase } from "gsap/dist/CustomEase";
	import Lenis from "lenis";
	import { getContext, onMount } from "svelte";

	let { open = $bindable() }: { open: boolean } = $props();

	const lenis = getContext<Lenis>("lenis");

	let timeline: gsap.core.Timeline;

	onMount(() => {
		CustomEase.create("menu", "0.65, 0.01, 0.05, 0.99");

		timeline = gsap.timeline({
			defaults: {
				ease: "menu",
				duration: 0.7,
			},
		});

		return () => timeline.kill();
	});

	$effect(() => {
		open ? show() : hide();
	});

	function show() {
		document.body.style.overflow = "hidden";
		lenis.stop();

		timeline
			.clear()
			.set("#menu", { display: "block" })
			.set("#menu-nav", { xPercent: 0 }, "<")
			.fromTo("#menu-btn .label", { yPercent: 0 }, { yPercent: -100, stagger: 0.2 })
			//
			.fromTo("#menu-overlay", { autoAlpha: 0 }, { autoAlpha: 1 }, "<")
			.fromTo(
				".panel",
				{ xPercent: 101 },
				{ xPercent: 0, stagger: 0.12, duration: 0.575 },
				"<",
			);
	}

	function hide() {
		document.body.style.overflow = "auto";
		lenis.start();

		timeline
			.clear()
			.to("#menu-overlay", { autoAlpha: 0 })
			.to("#menu-nav", { xPercent: 120 }, "<")
			.to("#menu-btn .label", { yPercent: 0 }, "<")
			//
			.set("#menu", { display: "none" });
	}
</script>

<svelte:document
	onkeydown={(event) => {
		if (event.key === "Escape" && open) {
			open = false;
			hide();
		}
	}}
/>

<div id="menu" class="fixed inset-0 z-90 mx-auto hidden h-screen w-full">
	<div id="menu-overlay" class="absolute inset-0 z-0 size-full bg-black/70"></div>

	<nav id="menu-nav" class="relative ml-auto h-full w-[32rem] overflow-auto pt-24 pb-8">
		<div id="menu-panels" class="absolute inset-0 *:absolute *:inset-0 *:rounded-l-3xl">
			<div class="panel bg-vintage-aloe"></div>
			<div class="panel bg-vintage-denim"></div>
			<div class="panel bg-background"></div>
		</div>

		<div class="relative flex h-full content-between items-start overflow-auto">
			<!-- links -->
		</div>
	</nav>
</div>

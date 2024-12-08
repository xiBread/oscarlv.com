<script lang="ts">
	import "../styles/main.css";
	import "@fontsource-variable/jetbrains-mono";
	import "@fontsource-variable/noto-serif-display";

	import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";
	import { gsap } from "gsap";
	import { CustomEase } from "gsap/dist/CustomEase";
	import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
	import { TextPlugin } from "gsap/dist/TextPlugin";
	import Lenis from "lenis";
	import { ModeWatcher } from "mode-watcher";
	import { onMount, setContext } from "svelte";

	import { dev } from "$app/environment";
	import { afterNavigate, onNavigate } from "$app/navigation";
	import Header from "$lib/components/Header.svelte";
	import LoadingScreen from "$lib/components/LoadingScreen.svelte";
	import Screen from "$lib/components/Screen.svelte";
	import ScrollProgress from "$lib/components/ScrollProgress.svelte";

	injectSpeedInsights();
	gsap.registerPlugin(CustomEase, ScrollTrigger, TextPlugin);

	const { children } = $props();

	onMount(() => {
		const lenis = new Lenis();
		lenis.on("scroll", ScrollTrigger.update);

		gsap.ticker.add((time) => lenis.raf(time * 1000));
		gsap.ticker.lagSmoothing(0);

		setContext("lenis", lenis);

		return () => lenis.destroy();
	});

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	// https://github.com/sveltejs/kit/issues/2733
	afterNavigate(() => scrollTo(0, 0));
</script>

<svelte:head>
	<title>oliver rose.</title>
</svelte:head>

<ModeWatcher defaultMode="light" />

<LoadingScreen>
	<Header />

	<main class="relative min-h-svh">
		{@render children()}
	</main>

	<ScrollProgress />
</LoadingScreen>

{#if dev}
	<Screen />
{/if}

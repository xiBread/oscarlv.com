<script lang="ts">
	import { enter } from "$lib/actions";
	import Hero from "$lib/components/Hero.svelte";
	import Petals from "$lib/components/Petals.svelte";
	import Quote from "$lib/components/Quote.svelte";
	import Rose from "$lib/components/Rose.svelte";

	let about: HTMLElement;
</script>

<svelte:head>
	<title>home | oliver rose.</title>
</svelte:head>

<Petals />
<Hero />

<section
	id="about"
	class="grid h-screen items-center pt-10 px-4 md:px-10 lg:grid-cols-2"
	bind:this={about}
>
	<article
		class="mx-auto flex max-w-xl flex-col gap-y-4"
		use:enter={{
			scrollTrigger: {
				trigger: about,
				start: "top center-=300",
			},
		}}
	>
		<h1 class="period font-semibold">about</h1>

		<Quote />

		<p>
			I'm a self-taught programmer who enjoys expressing creativity through pictures and
			words, bridging the gap between logic and imagination.
		</p>

		<p>Always looking for new ways to satiate my endeavor to create.</p>

		<footer class="flex gap-x-2">
			<a class="font-medium hover:underline" href="https://github.com/xiBread">GitHub</a>
			<span class="text-muted-foreground font-mono">/</span>
			<a class="font-medium hover:underline" href="https://twitter.com/oliver_mxrose">
				Twitter
			</a>
		</footer>
	</article>

	<div class="flex-center my-8 flex">
		<Rose class="max-h-[45vh] rotate-12 lg:max-h-[60vh]" />
	</div>
</section>

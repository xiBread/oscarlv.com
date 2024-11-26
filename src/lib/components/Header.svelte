<script lang="ts">
	import { gsap } from "gsap";
	import { onMount } from "svelte";
	import { page } from "$app/stores";

	const topRoute = $derived($page.url.pathname.split("/")[1] || null);

	onMount(() => {
		gsap.from("#site-header", {
			autoAlpha: 0,
			duration: 1,
		});
	});
</script>

<header
	id="site-header"
	class="fixed top-0 left-0 z-100 w-full px-6 pt-6 text-white mix-blend-difference md:px-10"
>
	<nav class="flex w-full items-center justify-between">
		<div class="flex">
			<a class="blended" href="/">oliver rose.</a>
		</div>

		<div class="flex items-center">
			<ul class="focus flex items-center gap-x-4">
				{@render link("art")}
				{@render link("writing")}
			</ul>
		</div>
	</nav>
</header>

{#snippet link(route: string)}
	<li aria-current={topRoute === route && "page"}>
		<a class="blended" href="/{route}">{route}.</a>
	</li>
{/snippet}

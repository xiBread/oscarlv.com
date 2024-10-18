<script lang="ts">
	import { gsap } from "gsap";
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import Menu from "./Menu.svelte";

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
	class="fixed top-0 left-0 z-[100] w-full pt-6 px-6 text-white mix-blend-difference md:px-10"
>
	<nav class="flex w-full items-center justify-between">
		<div class="flex">
			<a class="blended" href="/">oliver rose.</a>
		</div>

		<div class="md:hidden">
			<Menu>
				{@render link("art", "menu")}
				{@render link("writing", "menu")}
			</Menu>
		</div>

		<div class="hidden items-center md:flex">
			<ul class="focus flex items-center gap-x-4">
				{@render link("art")}
				{@render link("writing")}
			</ul>
		</div>
	</nav>
</header>

{#snippet link(route: string, context: "menu" | "header" = "header")}
	<li aria-current={topRoute === route && "page"}>
		<a class={context === "menu" ? "uppercase" : "blended"} href="/{route}">{route}.</a>
	</li>
{/snippet}

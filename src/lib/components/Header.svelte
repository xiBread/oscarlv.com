<script lang="ts">
	import { gsap } from "gsap";
	import { onMount } from "svelte";
	import Menu from "./Menu.svelte";

	let open = $state(false);

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

		<button
			id="menu-btn"
			class="border-0 bg-transparent hover:cursor-pointer"
			type="button"
			onclick={() => (open = !open)}
		>
			<div class="flex h-6 flex-col items-end justify-start overflow-hidden">
				<span class="blended label">menu.</span>
				<span class="blended label">close.</span>
			</div>
		</button>
	</nav>
</header>

<Menu bind:open />

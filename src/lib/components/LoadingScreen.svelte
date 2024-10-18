<script lang="ts">
	import { gsap } from "gsap";
	import { onMount, type Snippet } from "svelte";

	const { children }: { children: Snippet } = $props();

	let loaded = $state(false);

	onMount(async () => {
		// NOTE: to avoid initial flash
		gsap.set("#loading-screen", { visibility: "visible" });

		await gsap
			.timeline({
				defaults: {
					duration: 1,
					ease: "expo.inOut",
				},
			})
			.from(".flavor-text", { yPercent: -100 })
			.from(".column", { yPercent: -100 })
			.to(".flavor-text", { yPercent: 100 })
			.to(".column", { yPercent: 100, stagger: 0.1, duration: 1.5 }, "<")
			.then(() => (loaded = true));
	});
</script>

{#if loaded}
	{@render children()}
{:else}
	<div id="loading-screen" class="invisible">
		<div class="grid h-svh grid-cols-5 overflow-hidden">
			{#each { length: 5 } as _}
				<div class="column bg-vintage-aloe h-full"></div>
			{/each}
		</div>

		<div class="absolute right-8 bottom-8 overflow-hidden">
			<p class="flavor-text text-right">
				Where silence gathers dust
				<br />
				And memories bloom
			</p>
		</div>
	</div>
{/if}

<script lang="ts">
	import { gsap } from "gsap";
	import { onMount } from "svelte";

	const rand = (n: number, m: number) => n + Math.random() * (m - n);

	const petals: HTMLElement[] = [];

	onMount(() => {
		for (const petal of petals) {
			gsap.set(petal, {
				x: rand(0, innerWidth),
				y: -150,
				z: rand(-200, 200),
			});

			gsap.to(petal, {
				y: innerHeight - 100,
				opacity: 0,
				repeat: -1,
				ease: "none",
				duration: rand(6, 15),
				delay: -15,
			});

			gsap.to(petal, {
				x: `+=${100}`,
				rotationZ: rand(0, 180),
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut",
				duration: rand(4, 8),
			});

			gsap.to(petal, {
				rotationX: rand(0, 360),
				rotationY: rand(0, 360),
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut",
				delay: -5,
				duration: rand(2, 8),
			});
		}
	});
</script>

<div class="fixed left-0 top-0">
	{#each { length: 20 } as _, i}
		{@const lCross = rand(12, 12 + Math.floor(Math.random() * 10))}
		{@const rCross = rand(1, Math.floor((12 - Math.floor(rand(0, 12) / 3)) / 4))}

		<div
			class="absolute size-3 bg-gradient-to-br from-red-300 to-red-500"
			style:border-radius="{lCross}px {rCross}px"
			bind:this={petals[i]}
		></div>
	{/each}
</div>

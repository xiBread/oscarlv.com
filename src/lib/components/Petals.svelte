<script lang="ts">
	import { gsap } from "gsap";
	import { onMount } from "svelte";

	const rand = (n: number, m: number) => n + Math.random() * (m - n);

	const petals: HTMLElement[] = [];

	const month = new Date().getMonth() + 1;

	// Winter
	let seasonGradient = "from-sky-100 to-sky-300";

	// Based on meteorological seasons
	if (month === 3 || month === 4 || month === 5) {
		// Spring
		seasonGradient = "from-red-300 to-pink-500";
	} else if (month === 6 || month === 7 || month === 8) {
		// Summer
		seasonGradient = "from-green-300 to-yellow-300";
	} else if (month === 9 || month === 10 || month === 11) {
		// Autumn
		seasonGradient = "from-orange-400 from-60% to-amber-900";
	}

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

<div class="fixed top-0 left-0">
	{#each { length: 20 } as _, i}
		{@const main = rand(12, 12 + Math.floor(Math.random() * 10))}
		{@const anti = rand(1, Math.floor((12 - Math.floor(rand(0, 12) / 3)) / 4))}

		<div
			class="petal absolute size-3 bg-gradient-to-br {seasonGradient}"
			style:border-radius="{main}px {anti}px"
			bind:this={petals[i]}
		></div>
	{/each}
</div>

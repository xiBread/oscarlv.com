<template>
	<div class="pointer-events-none fixed inset-0 -z-10">
		<canvas ref="lichtenberg" class="dark:brightness-[.2]" />
	</div>
</template>

<script setup lang="ts">
const lichtenberg = ref<HTMLCanvasElement>();
const { width, height } = reactive(useWindowSize());

const rand = () => Math.random();

onMounted(() => {
	const canvas = lichtenberg.value!;
	const ctx = canvas.getContext("2d")!;
	const dpr = devicePixelRatio;

	canvas.style.height = `${height}px`;
	canvas.style.width = `${width}px`;
	canvas.height = dpr * height;
	canvas.width = dpr * width;

	ctx.scale(dpr, dpr);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.lineWidth = 1;
	ctx.strokeStyle = "#e1e1e14d";

	let fixed = 0;
	let queue = [
		() => move(rand() * width, 0, Math.PI / 2), // Bottom
		() => move(rand() * width, height, Math.PI / -2), // Top
	];

	if (width > 640) {
		queue.push(
			() => move(0, rand() * height, 0), // Left
			() => move(width, rand() * height, Math.PI), // Right
		);
	}

	let lastRequest = performance.now();

	const { pause } = useRafFn(() => {
		if (performance.now() - lastRequest < 25) return;
		lastRequest = performance.now();

		fixed++;

		const frames = queue;
		queue = [];

		if (!frames.length) pause();

		frames.forEach((frame) => frame());
	});

	function move(x: number, y: number, rad: number) {
		const distance = rand() * 8;
		const [dx, dy] = [x + distance * Math.cos(rad), y + distance * Math.sin(rad)];

		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(dx, dy);
		ctx.stroke();

		if (dx < -100 || dx > width + 100 || dy < -100 || dy > height + 100) return;

		if (fixed <= 4 || rand() > 0.5) {
			queue.push(() => move(dx, dy, rad + rand() * 0.25));
		}

		if (fixed <= 4 || rand() > 0.5) {
			queue.push(() => move(dx, dy, rad - rand() * 0.25));
		}
	}
});
</script>

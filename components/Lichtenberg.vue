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

	const mid = () => rand() * 0.6 + 0.2;

	let queue = [
		() => draw(mid() * width, -5, Math.PI / 2), // Bottom
		() => draw(mid() * width, height + 5, Math.PI / -2), // Top
	];

	if (width > 640) {
		queue.push(
			() => draw(-5, mid() * height, 0), // Left
			() => draw(width + 5, mid() * height, Math.PI), // Right
		);
	}

	let lastRequest = performance.now();

	const { pause } = useRafFn(() => {
		// 120 fps
		if (performance.now() - lastRequest < 60) return;
		lastRequest = performance.now();

		const frames = queue;
		queue = [];

		if (!frames.length) pause();

		for (const frame of frames) {
			rand() < 0.5 ? frames.push(frame) : frame();
		}
	});

	function draw(x: number, y: number, rad: number, n = ref(0)) {
		const distance = rand() * 6;
		const [dx, dy] = [x + distance * Math.cos(rad), y + distance * Math.sin(rad)];

		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(dx, dy);
		ctx.stroke();

		// Bounds checking
		if (dx < -100 || dx > width + 100 || dy < -100 || dy > height + 100) return;

		const rate = n.value++ <= 30 ? 0.8 : 0.5;

		// Left
		if (rand() < rate) {
			queue.push(() => draw(dx, dy, rad + rand() * 0.25, n));
		}

		// Right
		if (rand() < rate) {
			queue.push(() => draw(dx, dy, rad - rand() * 0.25, n));
		}
	}
});
</script>

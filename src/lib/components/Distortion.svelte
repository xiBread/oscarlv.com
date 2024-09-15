<script lang="ts">
	import { T, useCanvas, useLoader, useTask } from "@threlte/core";
	import { gsap } from "gsap";
	import { TextureLoader, Vector2 } from "three";
	import fragmentShader from "../shaders/distortion.frag";
	import vertexShader from "../shaders/distortion.vert";

	interface Props {
		src: string;
		initial?: boolean;
		onload?: () => void;
	}

	const { src, initial = true, onload }: Props = $props();

	const { canvas } = useCanvas();
	const { load } = useLoader(TextureLoader);

	const mouse = new Vector2();

	const uMouse = new Vector2();
	const uIntro = $state({ value: 0 });
	const uDistort = $state({ value: 0 });

	const loadParent = $derived(canvas.parentElement?.parentElement);

	let introTl: gsap.core.Timeline | undefined;
	let showTl: gsap.core.Timeline | undefined;

	$effect(() => {
		void src;
		loadParent?.classList.remove("loaded");
	});

	useTask(() => {
		uMouse.set(
			gsap.utils.interpolate(uMouse.x, mouse.x, 0.1),
			gsap.utils.interpolate(uMouse.y, mouse.y, 0.1),
		);
	});

	canvas.addEventListener("pointerenter", () => {
		showTl?.kill();

		introTl = gsap.timeline();
		introTl.to(uIntro, {
			value: 1,
			duration: 5,
			ease: "expo.out",
		});

		gsap.to(uDistort, {
			value: 1,
			duration: 1,
			ease: "expo.out",
		});
	});

	canvas.addEventListener("pointerleave", () => {
		introTl?.kill();

		gsap.to(uDistort, {
			value: 0,
			duration: 1,
			ease: "expo.out",
		});
	});

	canvas.addEventListener("pointermove", (event) => {
		const rect = canvas.getBoundingClientRect();

		const x = (event.clientX - rect.left) / canvas.offsetWidth;
		const y = 1 - (event.clientY - rect.top) / canvas.offsetHeight;

		mouse.set(gsap.utils.clamp(0, 1, x), gsap.utils.clamp(0, 1, y));
	});

	async function show() {
		const texture = await load(src);
		onload?.();

		if (!initial) return texture;

		showTl = gsap
			.timeline()
			.call(() => loadParent?.classList.add("loaded"))
			.fromTo(
				uDistort,
				{ value: 1 },
				{ value: 0, duration: 1.8, ease: "power3.out", delay: 0 },
				0,
			)
			.to(uIntro, { value: 1, duration: 5, delay: 0 }, 0);

		return texture;
	}
</script>

{#await show() then texture}
	<T.OrthographicCamera />

	<T.Mesh>
		<T.PlaneGeometry args={[2, 2]} />
		<T.ShaderMaterial
			{fragmentShader}
			{vertexShader}
			uniforms={{
				uIntro,
				uDistort,
				uRadius: { value: 0.95 },
				uStrength: { value: 1.1 },
				uMouse: { value: uMouse },
				uMouseIntro: { value: new Vector2(0.5, 0) },
				uTexture: { value: texture },
				uTextureResolution: {
					value: new Vector2(texture.image.width, texture.image.height),
				},
				uResolution: {
					value: new Vector2(canvas.offsetWidth, canvas.offsetHeight),
				},
			}}
		/>
	</T.Mesh>
{/await}

<style>
	:global {
		.distort {
			opacity: 0;

			&.loaded {
				opacity: 1;
				transition: opacity 0.5s ease;

				div {
					transform: none;
				}
			}

			div {
				transform: scale(0.6);
				transition: transform 1s cubic-bezier(0.22, 1.37, 0.36, 1) 0s;
			}
		}
	}
</style>

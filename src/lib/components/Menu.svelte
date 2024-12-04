<script lang="ts">
	import { beforeNavigate } from "$app/navigation";
	import { gsap } from "gsap";
	import { CustomEase } from "gsap/dist/CustomEase";
	import Lenis from "lenis";
	import { getContext, onMount } from "svelte";

	let { open = $bindable() }: { open: boolean } = $props();

	const lenis = getContext<Lenis>("lenis");

	const links = [
		{ href: "/", label: "Home" },
		{ href: "/art", label: "Art" },
		{ href: "/writing", label: "Writing" },
	];

	const socials = [
		{ href: "https://github.com/xiBread_", label: "GitHub" },
		{ href: "https://x.com/oliver_mrose", label: "Twitter/X" },
	];

	let timeline: gsap.core.Timeline;

	onMount(() => {
		CustomEase.create("menu", "0.65, 0.01, 0.05, 0.99");

		timeline = gsap.timeline({
			defaults: {
				ease: "menu",
				duration: 0.7,
			},
		});

		return () => timeline.kill();
	});

	$effect(() => {
		open ? show() : hide();
	});

	beforeNavigate(() => {
		if (open) hide();
	});

	function show() {
		document.body.style.overflow = "hidden";
		lenis.stop();

		timeline
			.clear()
			.set("#menu", { display: "block" })
			.set("#menu-nav", { xPercent: 0 }, "<")
			.fromTo("#menu-btn .label", { yPercent: 0 }, { yPercent: -100, stagger: 0.2 })
			.fromTo("#menu-overlay", { autoAlpha: 0 }, { autoAlpha: 1 }, "<")
			.fromTo(
				".panel",
				{ xPercent: 101 },
				{ xPercent: 0, stagger: 0.12, duration: 0.575 },
				"<",
			)
			.fromTo(
				"#menu-links a",
				{ yPercent: 160, rotate: 15 },
				{ yPercent: 0, rotate: 0, stagger: 0.05 },
				"<+=0.35",
			)
			.fromTo(
				"#menu-socials [data-fade]",
				{ autoAlpha: 0, yPercent: 50 },
				{ autoAlpha: 1, yPercent: 0, stagger: 0.05 },
				"<+=0.2",
			);
	}

	function hide() {
		open = false;
		document.body.style.overflow = "auto";
		lenis.start();

		timeline
			.clear()
			.to("#menu-overlay", { autoAlpha: 0 })
			.to("#menu-nav", { xPercent: 120 }, "<")
			.to("#menu-btn .label", { yPercent: 0 }, "<")
			.set("#menu", { display: "none" });
	}
</script>

<svelte:document
	onkeydown={(event) => {
		if (event.key === "Escape" && open) {
			hide();
		}
	}}
/>

<div id="menu" class="fixed inset-0 z-90 mx-auto hidden h-screen w-full">
	<div id="menu-overlay" class="absolute inset-0 z-0 size-full bg-black/70"></div>

	<nav id="menu-nav" class="relative ml-auto h-full w-full overflow-auto pt-24 pb-8 md:w-[32rem]">
		<div id="menu-panels" class="absolute inset-0 *:absolute *:inset-0 md:*:rounded-l-3xl">
			<div class="panel bg-vintage-aloe"></div>
			<div class="panel bg-vintage-denim"></div>
			<div class="panel bg-background"></div>
		</div>

		<div
			id="menu-links"
			class="relative flex h-full flex-col items-start justify-between overflow-auto"
		>
			<ul class="flex w-full flex-col">
				{#each links as link, i}
					<li class="relative overflow-hidden">
						<a class="group flex w-full gap-3 py-3 pl-8" href={link.href}>
							<p class="z-1 text-7xl/[0.75] font-black uppercase">
								{link.label}
							</p>
							<p class="relative z-1 font-mono leading-none">
								{`${i + 1}`.padStart(2, "0")}
							</p>

							<div
								class="bg-vintage-peach absolute inset-0 z-0 origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(0.65,0.05,0,1)] group-hover:scale-y-100"
							></div>
						</a>
					</li>
				{/each}
			</ul>

			<div id="menu-socials" class="flex flex-col items-start justify-start gap-5 pl-8">
				<span data-fade class="font-mono text-sm uppercase">Socials</span>

				<ul class="flex flex-row gap-6">
					{#each socials as social}
						<li data-fade>
							<a href={social.href}>{social.label}</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</nav>
</div>

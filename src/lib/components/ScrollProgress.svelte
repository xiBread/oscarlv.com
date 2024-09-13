<script lang="ts">
	import { gsap } from "gsap";
	import { page } from "$app/stores";

	$effect(() => {
		void $page.url;

		const scrollTimeline = gsap
			.timeline({
				scrollTrigger: {
					start: "top top",
					end: "bottom bottom",
					scrub: true,
				},
			})
			.fromTo(".left", { scaleX: 0 }, { scaleX: 1, ease: "none" }, 0)
			.fromTo(".right", { scaleX: 1 }, { scaleX: 0, ease: "power1.inOut" }, 0);

		return () => scrollTimeline.kill();
	});
</script>

<div class="scroll-progress fixed inset-x-0 bottom-0 z-20 flex h-2 items-center">
	<div class="relative h-full w-1/5 bg-vintage-aloe"></div>

	<div class="relative h-full flex-auto">
		<div class="absolute inset-0 bg-background"></div>
		<div class="left size-full origin-left bg-vintage-aloe"></div>
	</div>

	<div class="right absolute right-0 h-full w-1/5 origin-right bg-vintage-plum"></div>
</div>

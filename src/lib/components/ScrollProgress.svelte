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
	<div class="bg-vintage-aloe relative h-full w-1/5"></div>

	<div class="relative h-full flex-auto">
		<div class="bg-background absolute inset-0"></div>
		<div class="left bg-vintage-aloe size-full origin-left"></div>
	</div>

	<div class="right bg-vintage-plum absolute right-0 h-full w-1/5 origin-right"></div>
</div>

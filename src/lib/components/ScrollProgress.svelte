<script lang="ts">
	import { gsap } from "gsap";
	import { page } from "$app/stores";

	$effect(() => {
		if (CSS.supports("animation-timeline: scroll()")) return;
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

<style>
	@supports (animation-timeline: scroll()) {
		:global(html) {
			animation: detect-scroll linear;
			animation-timeline: scroll(self);
		}

		.left {
			opacity: calc(1 * var(--has-scroll, 0));
			animation: grow forwards;
			animation-timeline: scroll(root y);
		}

		.right {
			animation: shrink cubic-bezier(0.42, 0, 0.58, 1) forwards;
			animation-timeline: scroll(root y);
		}

		@keyframes detect-scroll {
			from,
			to {
				--has-scroll: 1;
			}
		}

		@keyframes grow {
			from {
				transform: scaleX(0);
			}

			to {
				transform: scaleX(1);
			}
		}

		@keyframes shrink {
			from {
				transform: scaleX(1);
			}

			to {
				transform: scaleX(0);
			}
		}
	}
</style>

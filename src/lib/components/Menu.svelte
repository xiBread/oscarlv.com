<script lang="ts">
	import type Lenis from "lenis";
	import { getContext, type Snippet } from "svelte";
	import { Drawer } from "vaul-svelte";
	import Icon from "./Icon.svelte";

	const { children }: { children: Snippet } = $props();

	const lenis = getContext<Lenis>("lenis");
</script>

<Drawer.Root direction="top" onOpenChange={(open) => (open ? lenis.stop() : lenis.start())}>
	<Drawer.Trigger class="blended">
		&lbrace;
		<Icon class="mx-1 mb-0.5 size-5" name="menu" />
		&rbrace;
	</Drawer.Trigger>

	<Drawer.Portal>
		<Drawer.Overlay class="fixed inset-0 z-50 bg-black/50" />

		<Drawer.Content class="fixed inset-x-0 top-0 z-50 h-[90%] bg-white">
			<nav class="flex-center flex h-full px-4">
				<ul class="space-y-2 text-center text-[max(12vw,4rem)]/none">
					{@render children()}
				</ul>
			</nav>
		</Drawer.Content>
	</Drawer.Portal>
</Drawer.Root>

<script lang="ts">
	const size = $state({ width: 0, height: 0 });
</script>

<svelte:window
	bind:innerWidth={size.width}
	bind:innerHeight={size.height}
	onresize={() => {
		size.width = innerWidth;
		size.height = innerHeight;
	}}
/>

<div
	class="fixed bottom-5 left-5 z-50 flex items-center space-x-2 rounded-full bg-black py-1 px-2.5 font-mono text-xs font-medium text-white dark:bg-white dark:text-black"
>
	<span>
		{size.width} &times; {size.height}
	</span>

	<div class="h-4 w-px bg-neutral-700 dark:bg-neutral-300"></div>

	<span class="sm:hidden">XS</span>
	<span class="hidden sm:inline md:hidden">SM</span>
	<span class="hidden md:inline lg:hidden">MD</span>
	<span class="hidden lg:inline xl:hidden">LG</span>
	<span class="hidden xl:inline 2xl:hidden">XL</span>
	<span class="hidden 2xl:inline">2XL</span>
</div>

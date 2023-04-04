<template>
	<div class="relative flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
		<NuxtImg
			placeholder
			sizes="sm:100vw md:50vw lg:220px"
			class="absolute inset-0 h-full w-full object-cover"
			:src="$props.src"
			format="webp"
			loading="lazy"
		/>
	</div>
</template>

<script setup lang="ts">
defineProps<{ src: string }>();
</script>

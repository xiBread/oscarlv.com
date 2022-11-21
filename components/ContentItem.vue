<template>
	<div class="mt-6 text-base font-semibold text-neutral-700 dark:text-neutral-200">
		<div
			class="absolute -inset-y-6 -inset-x-4 z-0 bg-neutral-200/50 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-neutral-800 sm:-inset-x-6 sm:rounded-2xl"
		></div>

		<NuxtLink :to="$props.item._path">
			<span class="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
			<span class="relative z-10">{{ item.title }}</span>
		</NuxtLink>
	</div>

	<slot></slot>
</template>

<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

defineProps<{ item: ParsedContent }>();
</script>

<style>
.description {
	@apply relative z-10 mt-2 text-sm text-neutral-500 dark:text-neutral-400;
}
</style>

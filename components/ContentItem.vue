<template>
	<div class="text-base font-semibold text-black dark:text-white">
		<div
			class="absolute -inset-y-6 -inset-x-4 z-0 bg-neutral-200 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-neutral-800 sm:-inset-x-6 sm:rounded-2xl"
		></div>

		<NuxtLink :to="`${$route.path}/${entry.slug}`">
			<span class="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
			<span class="relative z-10">{{ entry.title }}</span>
		</NuxtLink>
	</div>

	<slot></slot>
</template>

<script setup lang="ts">
import type { ContentEntry } from "~/util/types";

defineProps<{ entry: ContentEntry }>();
</script>

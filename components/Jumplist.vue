<template>
	<div class="sticky h-screen w-24">
		<nav class="flex h-full items-center justify-center">
			<ul class="space-y-4">
				<li
					v-for="(item, i) in list"
					:key="item"
					class="font-mono text-sm dark:text-neutral-600 dark:hover:text-neutral-300"
				>
					<NuxtLink :to="`/photography/${slugify(item)}`">
						{{ `${i + 1}`.padStart(2, "0") }}
					</NuxtLink>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script setup lang="ts">
import slugify from "~/util/slugify";

defineProps<{ list: string[] }>();
</script>

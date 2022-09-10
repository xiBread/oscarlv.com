<template>
	<div class="h-screen">
		<nav class="flex h-full items-center justify-center">
			<ul class="space-y-4 font-mono dark:text-neutral-600">
				<li v-for="(loc, i) in links" :key="loc" class="block dark:hover:text-neutral-300">
					<NuxtLink :to="`/photography/${slugify(loc)}`">
						{{ `${i + 1}`.padStart(2, "0") }}

						<span class="ml-5">{{ loc }}</span>
					</NuxtLink>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script setup lang="ts">
import slugify from "~/util/slugify";

useHead({ title: "Photography" });

const links = ["Chasing Highs", "Neon Lights", "Stray Nights", "Gallery"];
</script>

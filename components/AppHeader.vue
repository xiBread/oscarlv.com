<template>
	<header class="fixed top-0 z-10 w-full">
		<nav class="relative mx-auto flex items-center justify-between py-4 px-8">
			<NuxtLink to="/">
				<img src="/favicon.ico" class="h-6 dark:invert" />
			</NuxtLink>

			<div class="flex items-center text-neutral-400 dark:text-neutral-600">
				<ul class="flex items-center space-x-6 text-sm font-medium">
					<li v-for="page in pages" :key="page">
						<NuxtLink
							:to="`/${page.toLowerCase()}`"
							class="hover:text-neutral-700 dark:hover:text-neutral-300"
						>
							{{ page }}
						</NuxtLink>
					</li>
				</ul>

				<div
					class="ml-5 flex items-center space-x-5 border-l border-l-neutral-300 text-xl dark:border-l-neutral-600 [&>*]:ml-5"
				>
					<button class="scale-x-[-1]" @click="toggleDark()">
						<Icon
							:icon="isDark ? 'octicon:sun-16' : 'octicon:moon-16'"
							class="hover:text-purple-500 dark:hover:text-yellow-300"
						/>
					</button>

					<NuxtLink to="https://www.github.com/xiBread" target="_blank">
						<Icon
							icon="octicon:mark-github-16"
							class="hover:text-black dark:hover:text-white"
						/>
					</NuxtLink>
				</div>
			</div>
		</nav>
	</header>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const pages = ["Photography", "Writing", "About"];
</script>

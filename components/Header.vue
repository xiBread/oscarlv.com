<template>
	<header class="relative z-40 flex flex-col">
		<div class="top-0 z-10 h-16 pt-6">
			<div class="top-6 w-full sm:px-8">
				<Container>
					<div class="relative flex items-center gap-4">
						<div class="flex flex-1">
							<NuxtLink to="/" class="mx-3" aria-label="Home">
								<!-- eslint-disable-next-line vue/no-v-html -->
								<span v-html="logo"></span>
							</NuxtLink>
						</div>

						<HeaderNav />

						<div class="flex justify-end md:flex-1">
							<button
								type="button"
								class="mx-3 my-2"
								aria-label="Theme toggle"
								@click="toggle()"
							>
								<Icon
									:icon="isDark ? 'octicon:sun-16' : 'octicon:moon-16'"
									class="block h-5 w-5 scale-x-[-1] text-neutral-500 hover:text-purple-500 dark:hover:text-yellow-300"
								/>
							</button>
						</div>
					</div>
				</Container>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
// @ts-expect-error
import logo from "~/assets/logo.svg?raw";
import { Icon } from "@iconify/vue";

const isDark = useDark();
const toggle = useToggle(isDark);
</script>

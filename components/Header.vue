<template>
	<header class="relative z-40 flex flex-col">
		<div class="top-0 z-10 h-16 pt-6">
			<div class="top-6 w-full sm:px-8">
				<div class="mx-auto max-w-7xl lg:px-8">
					<div class="relative px-4 sm:px-8 lg:px-12">
						<div class="mx-auto max-w-2xl lg:max-w-5xl">
							<div class="relative flex items-center gap-4">
								<div class="flex flex-1">
									<NuxtLink to="/" class="mx-3" aria-label="Home">
										<span id="logo" v-html="logo" />
									</NuxtLink>
								</div>

								<HeaderNav />

								<div class="flex justify-end md:flex-1">
									<button
										type="button"
										class="mx-3 my-2"
										:aria-label="title"
										:title="title"
										@click="toggle()"
									>
										<Icon
											:icon="isDark ? 'octicon:sun-16' : 'octicon:moon-16'"
											class="block h-5 w-5 text-neutral-500 hover:text-purple-500 dark:hover:text-yellow-300"
										/>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
// @ts-expect-error
import logo from "~/assets/logo.svg?raw";

const isDark = useDark();
const toggle = useToggle(isDark);

const title = `Switch to ${isDark ? "light" : "dark"} mode`;
</script>

<style>
span#logo svg {
	@apply h-7 w-7 fill-black dark:fill-white;
}
</style>

<template>
	<header class="sticky">
		<Disclosure v-slot="{ open }" as="nav" class="bg-neutral-100 dark:bg-neutral-800">
			<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div class="relative flex h-16 items-center justify-between">
					<!-- Mobile menu button -->
					<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
						<DisclosureButton
							class="inline-flex items-center justify-center rounded-md p-2 text-neutral-400 hover:text-black dark:hover:bg-neutral-700 dark:hover:text-white"
						>
							<MenuIcon v-if="!open" class="h-6 w-6" />
							<XIcon v-else class="h-6 w-6" />
						</DisclosureButton>
					</div>

					<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
						<div class="hidden space-x-4 sm:flex">
							<NuxtLink
								v-for="{ meta: { title }, path } in routes"
								:key="title"
								:to="path"
								:class="[
									current === path ? 'active' : 'inactive',
									'rounded-md px-3 py-2 text-sm font-medium capitalize',
								]"
								@click="current = path"
							>
								{{ title }}
							</NuxtLink>
						</div>
					</div>

					<div class="absolute inset-y-0 right-0 flex items-center">
						<button
							type="button"
							class="rounded-md p-2 text-neutral-400 hover:text-black dark:hover:bg-neutral-700 dark:hover:text-white"
							@click="toggleDark()"
						>
							<SunIcon v-if="isDark" class="h-6 w-6" />
							<MoonIcon v-else class="h-6 w-6" />
						</button>
					</div>
				</div>
			</div>

			<!-- Mobile menu -->
			<DisclosurePanel class="sm:hidden">
				<div class="space-y-1 px-2 pt-2 pb-3">
					<DisclosureButton
						v-for="{ meta: { title }, path } in routes"
						:key="title"
						as="a"
						:href="path"
						:class="[
							current === path ? 'active' : 'inactive',
							'block rounded-md px-3 py-2 text-base font-medium capitalize',
						]"
						@click="current = path"
					>
						{{ title }}
					</DisclosureButton>
				</div>
			</DisclosurePanel>
		</Disclosure>
	</header>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "@heroicons/vue/outline/index.js";

const [isDark, toggleDark] = useDarkMode();
const router = useRouter();
const route = useRoute();

const current = ref(route.path);

const routes = router
	.getRoutes()
	.filter((route) => route.meta.title?.toString() !== "all")
	.sort((a, b) => Number(a.meta.index) - Number(b.meta.index));
</script>

<style>
.active {
	@apply bg-neutral-200 dark:bg-neutral-900 dark:text-white;
}

.inactive {
	@apply text-neutral-400 hover:text-black dark:hover:bg-neutral-700 dark:hover:text-white;
}
</style>

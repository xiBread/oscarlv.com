<template>
	<div class="flex flex-1 justify-end md:justify-center">
		<Navigation v-slot="{ nav }" class="hidden md:block">
			<ul class="flex px-3 text-sm font-medium text-neutral-400 dark:text-neutral-500">
				<li v-for="link in nav" :key="link._path">
					<NuxtLink
						:to="link._path"
						class="relative mx-4 my-2 block hover:text-neutral-700 dark:hover:text-neutral-200"
					>
						{{ link.title }}
					</NuxtLink>
				</li>
			</ul>
		</Navigation>

		<Popover class="md:hidden">
			<PopoverButton class="mx-4 my-2 flex items-center text-sm font-medium">
				<span class="text-neutral-600 dark:text-neutral-300">Menu</span>

				<Icon
					icon="heroicons:chevron-down-20-solid"
					class="ml-2 h-auto w-5 text-neutral-400 dark:text-neutral-500"
				/>
			</PopoverButton>

			<PopoverOverlay
				class="fixed inset-0 z-50 bg-neutral-800/40 opacity-100 backdrop-blur-sm dark:bg-black/70"
			/>

			<PopoverPanel
				v-slot="{ close }"
				class="fixed inset-x-0 top-0 z-50 origin-top scale-100 rounded-b-2xl bg-white p-8 opacity-100 ring-1 ring-neutral-900/5 dark:bg-neutral-900 dark:ring-neutral-800"
			>
				<div class="flex flex-row-reverse items-center justify-between">
					<PopoverButton class="-m-1 p-1">
						<Icon
							icon="heroicons:x-mark-20-solid"
							class="h-6 w-6 text-neutral-400 dark:text-neutral-500"
						/>
					</PopoverButton>

					<span class="text-sm font-medium text-neutral-400 dark:text-neutral-500">
						Navigation
					</span>
				</div>

				<Navigation v-slot="{ nav }" class="mt-6">
					<ul
						class="-my-2 divide-y divide-neutral-200/50 text-base text-neutral-800 dark:divide-zinc-100/5 dark:text-neutral-200"
					>
						<li v-for="link in nav" :key="link._path">
							<NuxtLink :to="link._path" class="block py-3" @click="close()">
								{{ link.title }}
							</NuxtLink>
						</li>
					</ul>
				</Navigation>
			</PopoverPanel>
		</Popover>
	</div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { PopoverPanel, PopoverOverlay, Popover, PopoverButton } from "@headlessui/vue";
</script>

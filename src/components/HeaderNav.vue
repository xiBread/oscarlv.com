<template>
	<nav class="hidden md:block">
		<ul class="flex px-3 text-sm font-medium text-zinc-500">
			<li v-for="page in pages" :key="page">
				<a
					:href="`/${page.toLowerCase()}`"
					class="relative mx-4 my-2 block transition-colors hover:text-black dark:hover:text-white"
				>
					{{ page }}
				</a>
			</li>
		</ul>
	</nav>

	<!-- Mobile -->
	<Popover class="md:hidden">
		<PopoverButton class="mx-4 my-2 flex items-center text-sm font-medium">
			<span class="text-zinc-600 dark:text-zinc-400">Menu</span>
			<span class="i-[octicon--chevron-down-16] ml-3 text-xl text-zinc-500"></span>
		</PopoverButton>

		<Transition
			enter-active-class="transition duration-200 ease-out"
			enter-from-class="opacity-0"
			enter-to-class="opacity-100"
			leave-active-class="transition duration-200 ease-in"
			leave-from-class="opacity-100"
			leave-to-class="opacity-0"
		>
			<PopoverOverlay class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
		</Transition>

		<Transition
			enter-active-class="transition duration-200 ease-out"
			enter-from-class="scale-90 opacity-0"
			enter-to-class="scale-100 opacity-100"
			leave-active-class="transition duration-200 ease-in"
			leave-from-class="scale-100 opacity-100"
			leave-to-class="scale-95 opacity-0"
		>
			<PopoverPanel
				v-slot="{ close }"
				focus
				class="fixed inset-x-0 top-0 z-50 origin-top scale-100 rounded-b-xl bg-white p-10 opacity-100 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
			>
				<div class="flex flex-row-reverse items-center justify-between">
					<PopoverButton class="-m-1 p-1">
						<span class="i-[octicon--three-bars-16] text-lg text-zinc-500"></span>
					</PopoverButton>

					<span class="text-sm font-medium text-zinc-500">Menu</span>
				</div>

				<nav class="mt-6">
					<ul
						class="-my-2 divide-y divide-zinc-200/50 text-base dark:divide-zinc-100/5 dark:text-zinc-300"
					>
						<li v-for="page in pages" :key="page">
							<a :href="`/${page.toLowerCase()}`" class="block py-3" @click="close()">
								{{ page }}
							</a>
						</li>
					</ul>
				</nav>
			</PopoverPanel>
		</Transition>
	</Popover>
</template>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverOverlay, PopoverPanel } from "@headlessui/vue";

const pages = ["Art", "Writing", "About"];
</script>

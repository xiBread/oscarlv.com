<template>
	<nav class="hidden md:block">
		<ul class="flex px-3 text-sm font-medium text-zinc-500">
			<li v-for="item in navigation" :key="item">
				<NuxtLink
					:to="`/${item.toLowerCase()}`"
					class="relative mx-4 my-2 block hover:text-black dark:hover:text-white"
				>
					{{ item }}
				</NuxtLink>
			</li>
		</ul>
	</nav>

	<Popover class="md:hidden">
		<PopoverButton class="mx-4 my-2 flex items-center text-sm font-medium">
			<span class="text-zinc-600 dark:text-zinc-400">Menu</span>
			<Icon name="heroicons:chevron-down-20-solid" class="ml-3 h-5 w-5 text-zinc-500" />
		</PopoverButton>

		<Transition v-bind="transitionProps">
			<PopoverOverlay class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
		</Transition>

		<Transition v-bind="transitionProps">
			<PopoverPanel
				v-slot="{ close }"
				focus
				class="fixed inset-x-0 top-0 z-50 origin-top scale-100 rounded-b-xl bg-white p-10 opacity-100 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
			>
				<div class="flex flex-row-reverse items-center justify-between">
					<PopoverButton class="-m-1 p-1">
						<Icon name="heroicons:x-mark-20-solid" class="h-5 w-5 text-zinc-500" />
					</PopoverButton>

					<span class="text-sm font-medium text-zinc-500">Menu</span>
				</div>

				<nav class="mt-6">
					<ul
						class="-my-2 divide-y divide-zinc-200/50 text-base dark:divide-zinc-100/5 dark:text-zinc-300"
					>
						<li v-for="item in navigation" :key="item">
							<NuxtLink
								:to="`/${item.toLowerCase()}`"
								class="block py-3"
								@click="close()"
							>
								{{ item }}
							</NuxtLink>
						</li>
					</ul>
				</nav>
			</PopoverPanel>
		</Transition>
	</Popover>
</template>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverOverlay, PopoverPanel } from "@headlessui/vue";

const navigation = ["Art", "Writing", "About"];
const transitionProps = {
	enterActiveClass: "transition duration-200 ease-out",
	enterFromClass: "scale-95 opacity-0",
	enterToClass: "scale-100 opacity-100",
	leaveActiveClass: "transition duration-200 ease-in",
	leaveFromClass: "scale-100 opacity-100",
	leaveToClass: "scale-95 opacity-0",
};
</script>

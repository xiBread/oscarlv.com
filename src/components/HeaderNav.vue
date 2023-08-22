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

			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 16 16"
				class="ml-3 fill-zinc-500"
			>
				<path
					d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"
				></path>
			</svg>
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
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 16 16"
							class="fill-zinc-500"
						>
							<path
								d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"
							></path>
						</svg>
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

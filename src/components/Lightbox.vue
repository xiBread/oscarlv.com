<template>
	<div class="hover:cursor-pointer" @click="isOpen = true">
		<slot></slot>
	</div>

	<Dialog class="relative z-50" :open="isOpen" @close="isOpen = false">
		<div class="fixed inset-0 flex items-center justify-center">
			<DialogPanel class="text-white">
				<DialogBackdrop class="fixed inset-0 z-40 bg-neutral-700/70 backdrop-blur-md" />

				<div class="flex flex-col items-center justify-center [&_img]:relative">
					<slot></slot>
				</div>

				<button
					type="button"
					class="absolute right-6 top-6"
					aria-label="Close lightbox"
					@click="isOpen = false"
				>
					<span class="i-[octicon--x-16] text-3xl"></span>
				</button>
			</DialogPanel>
		</div>
	</Dialog>
</template>

<script setup lang="ts">
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/vue";
import { ref } from "vue";

const isOpen = ref(false);
</script>

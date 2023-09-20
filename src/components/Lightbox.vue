<template>
	<Dialog class="relative z-50" :open="lightbox.isOpen" @close="close()">
		<div class="fixed inset-0 flex items-center justify-center">
			<DialogPanel class="text-white">
				<DialogBackdrop class="fixed inset-0 z-40 bg-neutral-700/70 backdrop-blur-md" />

				<div class="flex flex-col items-center justify-center [&_img]:relative">
					<img :src="lightbox.target" class="absolute inset-0 h-full max-h-[90vh] w-full max-w-[90vw] object-cover" />
				</div>

				<button
					type="button"
					class="absolute right-6 top-6"
					aria-label="Close lightbox"
					@click="close()"
				>
					<span class="i-[octicon--x-16] text-3xl"></span>
				</button>
			</DialogPanel>
		</div>
	</Dialog>
</template>

<script setup lang="ts">
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/vue";
import { useStore } from "@nanostores/vue";
import { $lightbox } from "../lib/lightbox";

const lightbox = useStore($lightbox);

const close = () => $lightbox.setKey("isOpen", false);
</script>

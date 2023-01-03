<template>
	<ClientOnly>
		<Dialog class="relative z-50" :open="$props.open" @close="$props.close()">
			<div class="fixed inset-0 flex items-center justify-center">
				<DialogPanel class="text-white">
					<DialogBackdrop class="fixed inset-0 z-40 bg-black/70 backdrop-blur-md" />

					<div class="flex flex-col items-center justify-center">
						<NuxtImg
							:src="$props.src"
							class="relative block max-h-[90vh] max-w-[90vw] shadow-lg"
						/>

						<DialogTitle class="mt-3 font-semibold">
							{{ $props.title }}
						</DialogTitle>
					</div>

					<button
						type="button"
						class="absolute top-6 right-6"
						aria-label="Close lightbox"
						@click="$props.close()"
					>
						<Icon icon="heroicons:x-mark-20-solid" />
					</button>

					<slot></slot>
				</DialogPanel>
			</div>
		</Dialog>
	</ClientOnly>
</template>

<script setup lang="ts">
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/vue";
import { Icon } from "@iconify/vue";

interface LightboxProps {
	open: boolean;
	src: string;
	title: string;
	close: () => void;
}

defineProps<LightboxProps>();
</script>

<template>
	<ClientOnly>
		<Dialog class="relative z-50" :open="lightbox.isOpen" @close="lightbox.isOpen = false">
			<div class="fixed inset-0 flex items-center justify-center">
				<DialogPanel class="text-white">
					<DialogBackdrop class="fixed inset-0 z-40 bg-black/70 backdrop-blur-md" />

					<div class="flex flex-col items-center justify-center">
						<NuxtImg
							provider="contentful"
							:src="props.images[lightbox.target].file!.url"
							class="relative block max-h-[90vh] max-w-[90vw] shadow-lg"
						/>

						<DialogTitle class="mt-3 font-semibold">
							{{ props.images[lightbox.target].title }}
						</DialogTitle>
					</div>

					<button
						type="button"
						class="absolute right-6 top-6"
						aria-label="Close lightbox"
						@click="lightbox.isOpen = false"
					>
						<Icon name="heroicons:x-mark-20-solid" class="h-7 w-7" />
					</button>

					<div class="absolute bottom-6 right-6 flex items-center">
						<span class="mr-3 text-sm font-medium">
							{{ lightbox.target + 1 }} of {{ props.images.length }}
						</span>

						<button type="button" aria-label="Previous image" @click="navigate(-1)">
							<Icon name="heroicons:chevron-left-20-solid" />
						</button>

						<button type="button" aria-label="Next image" @click="navigate(1)">
							<Icon name="heroicons:chevron-right-20-solid" />
						</button>
					</div>
				</DialogPanel>
			</div>
		</Dialog>
	</ClientOnly>
</template>

<script setup lang="ts">
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/vue";
import type { AssetFields } from "contentful";

const props = defineProps<{ images: AssetFields[] }>();
const lightbox = useState<{ target: number; isOpen: boolean }>("lightbox");

function navigate(direction: number) {
	if (!lightbox.value.isOpen) return;

	const current = lightbox.value.target;

	lightbox.value.target =
		direction === -1
			? (current > 0 ? current : props.images.length) - 1
			: (current + 1) % props.images.length;
}

onKeyStroke("ArrowLeft", () => navigate(-1));
onKeyStroke("ArrowRight", () => navigate(1));
</script>

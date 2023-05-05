<template>
	<ContainerLayout>
		<div class="relative z-20 grid grid-cols-3 gap-2 py-4 sm:gap-4">
			<div
				v-for="(column, i) in columns"
				:key="i"
				class="column flex flex-col gap-2 sm:gap-4"
			>
				<NuxtImg
					v-for="asset in column"
					:key="asset.title"
					:src="`https:${asset.file?.url}`"
					class="rounded-xl object-cover hover:cursor-pointer"
					loading="lazy"
					decoding="async"
					@click="
						() => {
							lightbox.target = asset;
							lightbox.isOpen = true;
						}
					"
				/>
			</div>
		</div>
	</ContainerLayout>

	<ClientOnly>
		<Dialog class="relative z-50" :open="lightbox.isOpen" @close="lightbox.isOpen = false">
			<div class="fixed inset-0 flex items-center justify-center">
				<DialogPanel class="text-white">
					<DialogBackdrop class="fixed inset-0 z-40 bg-black/70 backdrop-blur-md" />

					<div class="flex flex-col items-center justify-center">
						<NuxtImg
							provider="contentful"
							:src="lightbox.target.file?.url"
							class="relative block max-h-[90vh] max-w-[90vw] shadow-lg"
						/>

						<DialogTitle class="mt-3 font-semibold">
							{{ lightbox.target.title }}
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
				</DialogPanel>
			</div>
		</Dialog>
	</ClientOnly>
</template>

<script setup lang="ts">
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/vue";
import { AssetFields } from "contentful";

const ctf = useContentful();
const { items } = await ctf.getAssets();

const lightbox = reactive({
	target: {} as AssetFields,
	isOpen: false,
});

const assets = items.slice(0, Math.floor(items.length / 3) * 3).map((asset) => asset.fields);
const length = Math.ceil(assets.length / 3);

const columns = assets.reduce<AssetFields[][]>((cols, _, i) => {
	if (i % length === 0) {
		cols.push(assets.slice(i, i + length));
	}

	return cols;
}, []);
</script>

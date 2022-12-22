<template>
	<div class="mt-16 sm:mt-28 sm:px-8">
		<Container>
			<header class="use-prose max-w-2xl" v-html="render(entry.body)"></header>

			<div class="mt-16 sm:mt-20">
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					<button
						v-for="asset in assets"
						:key="asset.id"
						type="button"
						class="bg-neutral-100 dark:bg-neutral-800"
						@click="openModal(asset.url)"
					>
						<NuxtImg
							:src="asset.url"
							class="aspect-square object-cover"
							width="800"
							height="800"
							loading="lazy"
						/>
					</button>
				</div>

				<Dialog as="div" :open="isOpen" class="relative z-50" @close="closeModal()">
					<div
						class="fixed inset-0 bg-neutral-800/40 backdrop-blur-sm dark:bg-black/70"
					></div>

					<div class="fixed inset-0 overflow-y-auto">
						<div class="flex min-h-full items-center justify-center">
							<DialogPanel class="flex h-full items-center overflow-hidden">
								<NuxtImg
									:src="target"
									class="m-auto max-h-screen max-w-full p-6 sm:p-16"
									@load="isLoading = false"
								/>

								<span
									v-show="isLoading"
									class="absolute box-border inline-block h-12 w-12 animate-spin rounded-full border-4 border-b-transparent"
								></span>
							</DialogPanel>
						</div>
					</div>
				</Dialog>
			</div>
		</Container>
	</div>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel } from "@headlessui/vue";
import type { ArtEntry } from "~/util/types";

const route = useRoute();
const { getAssets, getSingleEntry, prependHeading, render } = useContentful();

const slug = route.params.slug;

const entry = await getSingleEntry<ArtEntry>("art", { "fields.slug": slug });
const { items } = await getAssets({ "metadata.tags.sys.id[in]": `art.${slug}` });

useEntryHead(entry);
prependHeading(entry);

const assets = items
	.map((asset) => ({
		id: asset.sys.id,
		title: asset.fields.title!,
		url: asset.fields.file!.url,
	}))
	.sort((a, b) => a.title.localeCompare(b.title));

const isLoading = ref(true);
const isOpen = ref(false);
const target = ref("");

function openModal(url: string) {
	isOpen.value = true;
	target.value = url;
}

function closeModal() {
	isOpen.value = false;
	isLoading.value = true;
}

function navigateModal(direction: number) {
	if (!isOpen.value) return;

	const current = assets.findIndex((asset) => asset.url === target.value);
	const next =
		direction === -1
			? (current > 0 ? current : assets.length) - 1
			: (current + 1) % assets.length;

	target.value = assets[next].url;
}

onKeyStroke("ArrowLeft", () => navigateModal(-1));
onKeyStroke("ArrowRight", () => navigateModal(1));
</script>

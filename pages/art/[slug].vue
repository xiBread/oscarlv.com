<template>
	<div class="mt-16 sm:mt-28 sm:px-8">
		<Container>
			<header class="use-prose max-w-2xl" v-html="ctf.render(entry.body)"></header>

			<div class="mt-16 sm:mt-20">
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					<button
						v-for="(asset, i) in assets"
						:key="asset.id"
						type="button"
						class="bg-neutral-100 dark:bg-neutral-800"
						@click="
							() => {
								target = i;
								toggleDialog();
							}
						"
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
			</div>
		</Container>

		<ClientOnly>
			<Dialog class="relative z-50" :open="isOpen" @close="toggleDialog()">
				<div class="fixed inset-0 flex items-center justify-center">
					<DialogPanel class="text-white">
						<DialogBackdrop class="fixed inset-0 z-40 bg-black/70 backdrop-blur-md" />

						<div class="flex flex-col items-center justify-center">
							<NuxtImg
								:src="assets[target].url"
								class="relative block max-h-[90vh] max-w-[90vw] shadow-lg"
							/>

							<DialogTitle class="mt-3 font-semibold">
								{{ assets[target].title }}
							</DialogTitle>
						</div>

						<button
							type="button"
							class="absolute top-6 right-6"
							aria-label="Close lightbox"
							@click="toggleDialog()"
						>
							<Icon icon="heroicons:x-mark-20-solid" />
						</button>

						<div class="absolute bottom-6 right-6 flex items-center">
							<span class="mr-3 text-sm font-medium">
								{{ target + 1 }} of {{ assets.length }}
							</span>

							<button type="button" aria-label="Previous image" @click="navigate(-1)">
								<Icon icon="heroicons:chevron-left-20-solid" />
							</button>

							<button type="button" aria-label="Next image" @click="navigate(1)">
								<Icon icon="heroicons:chevron-right-20-solid" />
							</button>
						</div>
					</DialogPanel>
				</div>
			</Dialog>
		</ClientOnly>
	</div>
</template>

<script setup lang="ts">
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/vue";
import { Icon } from "@iconify/vue";

const route = useRoute();
const ctf = useContentful();
const [isOpen, toggleDialog] = useToggle();

const target = ref(0);

const slug = route.params.slug;

const entry = await ctf.getArtEntry(slug as string);
const { items } = await ctf.getAssets({ "metadata.tags.sys.id[in]": `art.${slug}` });

useEntryHead(entry);
ctf.prependHeading(entry);

const assets = items
	.map((asset) => ({
		id: asset.sys.id,
		title: asset.fields.title!,
		url: asset.fields.file!.url,
	}))
	.sort((a, b) => a.title.localeCompare(b.title));

function navigate(direction: number) {
	if (!isOpen.value) return;

	const current = target.value;

	target.value =
		direction === -1
			? (current > 0 ? current : assets.length) - 1
			: (current + 1) % assets.length;
}

onKeyStroke("ArrowLeft", () => navigate(-1));
onKeyStroke("ArrowRight", () => navigate(1));
</script>

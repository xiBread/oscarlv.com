<template>
	<div class="mt-16 sm:mt-28 sm:px-8">
		<div class="mx-auto max-w-7xl lg:px-8">
			<div class="relative px-4 sm:px-8 lg:px-12">
				<div class="mx-auto max-w-2xl lg:max-w-5xl">
					<header class="use-prose max-w-2xl" v-html="ctf.render(entry.body)" />

					<div class="mt-16 sm:mt-20">
						<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
							<button
								v-for="(asset, i) in assets"
								:key="asset.title"
								type="button"
								class="bg-neutral-100 dark:bg-neutral-800"
								@click="() => ((target = i), toggleDialog())"
							>
								<NuxtImg
									:src="asset.file!.url"
									class="aspect-square object-cover"
									width="800"
									height="800"
									loading="lazy"
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<Lightbox
			:open="isOpen"
			:src="assets[target].file!.url"
			:title="assets[target].title!"
			:close="toggleDialog"
		>
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
		</Lightbox>
	</div>
</template>

<script setup lang="ts">
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

const assets = items.map((asset) => asset.fields).sort((a, b) => a.title!.localeCompare(b.title!));

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

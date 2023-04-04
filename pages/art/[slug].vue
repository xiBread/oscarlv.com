<template>
	<ContainerLayout class="mt-14 sm:mt-28">
		<div v-if="!data?.custom" class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			<button
				v-for="(asset, i) in assets"
				:key="asset.title"
				type="button"
				class="bg-zinc-100 dark:bg-zinc-800"
				@click="() => ((lightbox.target = i), (lightbox.isOpen = true))"
			>
				<NuxtImg
					provider="contentful"
					:src="asset.file!.url"
					class="aspect-square object-cover"
					width="1000"
					height="1000"
					format="webp"
					loading="lazy"
				/>
			</button>
		</div>
	</ContainerLayout>

	<Lightbox :images="assets" />
</template>

<script setup lang="ts">
const route = useRoute();
const ctf = useContentful();

const { data } = await useAsyncData(() => queryContent(`art/${route.params.slug}`).findOne());

const lightbox = useState("lightbox", () => ({
	target: 0,
	isOpen: false,
}));

const { items } = await ctf.getAssets({
	"metadata.tags.sys.id[in]": `art.${route.params.slug}`,
});

const assets = items.map((asset) => asset.fields).sort((a, b) => a.title!.localeCompare(b.title!));
</script>

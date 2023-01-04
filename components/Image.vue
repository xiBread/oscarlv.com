<template>
	<NuxtImg
		:src="url"
		:width="$props.width"
		:height="$props.height"
		:alt="$props.alt ?? ''"
		:preload="$props.preload"
		format="webp"
	/>
</template>

<script setup lang="ts">
import type { ImgHTMLAttributes } from "vue";

interface ImageProps extends ImgHTMLAttributes {
	src: string;
	preload?: boolean;
}

const props = defineProps<ImageProps>();

let url = ref(props.src);

const { getAssets } = useContentful();

if (!props.src.startsWith("https")) {
	const { items } = await getAssets({ "fields.title": props.src });

	url.value = items[0].fields.file!.url;
}
</script>

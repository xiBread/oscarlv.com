<template>
	<NuxtImg
		:src="url"
		:width="$props.width"
		:height="$props.height"
		:alt="$props.alt ?? ''"
		format="webp"
	/>
</template>

<script setup lang="ts">
import type { ImgHTMLAttributes } from "vue";

interface ImageProps extends ImgHTMLAttributes {
	src: string;
}

const props = defineProps<ImageProps>();

let url = ref(props.src);

const { getSingleAsset } = useContentful();

if (!props.src.startsWith("https")) {
	url.value = await getSingleAsset(props.src);
}
</script>

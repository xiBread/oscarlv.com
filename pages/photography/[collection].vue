<template>
	<div class="prose dark:prose-invert">
		<ContentDoc tag="article" :path="`/photography/${collection}`" />
	</div>
</template>

<script setup lang="ts">
const route = useRoute();
const collection = route.params.collection;

const photos = await useFetch("/api/assets", {
	params: {
		collection,
	},
});
</script>

<template>
	<div></div>
</template>

<script setup lang="ts">
const route = useRoute();

const photos = await useFetch("/api/assets", {
	params: {
		collection: route.params.collection,
	},
});
</script>

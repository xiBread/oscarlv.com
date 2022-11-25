<template>
	<NuxtLayout name="article">
		<ContentDoc tag="article" class="use-prose !max-w-none" />
	</NuxtLayout>
</template>

<script setup lang="ts">
const { page } = useContent();

appendHead(page.value);
</script>

<template>
	<div class="mt-16 sm:px-8 lg:mt-28">
		<Container>
			<div class="mx-auto max-w-3xl">
				<ContentDoc tag="article" class="use-prose !max-w-none" />
			</div>
		</Container>
	</div>
</template>

<script setup lang="ts">
const { page } = useContent();

appendHead(page.value);
</script>

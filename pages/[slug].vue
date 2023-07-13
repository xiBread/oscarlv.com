<template>
	<Container class="mt-14 lg:mt-28">
		<div class="mx-auto max-w-3xl">
			<ContentRenderer
				:value="data!"
				tag="article"
				class="prose dark:prose-invert dark:prose-p:text-zinc-400 max-w-none [&_p]:whitespace-pre-wrap prose-h1:text-5xl"
			/>
		</div>
	</Container>
</template>

<script setup lang="ts">
const route = useRoute();

const { data } = await useAsyncData(() =>
	queryContent()
		.where({ _path: { $contains: [route.path.split("/")[1]] } })
		.findOne(),
);

useHead({ title: `olv. | ${data.value?.title}` });
</script>

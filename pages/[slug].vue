<template>
	<Title>{{ entry.title }} &bullet; olv.</Title>

	<Container class="mt-14 lg:mt-28">
		<div class="mx-auto max-w-4xl">
			<ContentRenderer
				:value="entry"
				tag="article"
				:class="[
					'prose dark:prose-invert max-w-none [&_p]:max-w-[50ch] [&_p]:whitespace-pre-wrap prose-h1:text-5xl',
					entry._dir === 'dialogue' &&
						(entry.startPosition === 'odd'
							? 'dialogue-start-odd'
							: 'dialogue-start-even'),
				]"
			/>
		</div>
	</Container>
</template>

<script setup lang="ts">
const route = useRoute();
const read = useLocalStorage<string[]>("read", []);

const { data } = await useAsyncData(() =>
	queryContent()
		.where({ _path: { $contains: [route.path.split("/")[1]] } })
		.findOne(),
);

const entry = data.value!;
read.value.push(entry._id);
</script>

<template>
	<div class="mt-16 sm:px-8 lg:mt-28">
		<Container>
			<div class="mx-auto max-w-3xl">
				<article class="use-prose !max-w-none" v-html="item.content"></article>
			</div>
		</Container>
	</div>
</template>

<script setup lang="ts">
import type { WritingItem } from "~~/util/types";

const route = useRoute();
const { getItems } = useDirectusItems();

const [item] = await getItems<[WritingItem]>({
	collection: "writing",
	params: {
		filter: {
			slug: route.params.slug,
		},
	},
});

useItemHead(item);
</script>

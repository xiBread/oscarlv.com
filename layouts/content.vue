<template>
	<div class="mt-16 sm:mt-28 sm:px-8">
		<Container>
			<header class="use-prose max-w-2xl" v-html="item.content"></header>

			<div class="mt-16 sm:mt-20">
				<slot></slot>
			</div>
		</Container>
	</div>
</template>

<script setup lang="ts">
import { Item } from "~/util/types";

const route = useRoute();
const { getItems } = useDirectusItems();

const base = /^\/(\w+)\//.exec(route.path)?.[1];

const [item] = await getItems<[Item]>({
	collection: base ?? route.path.slice(1),
	params: {
		filter: {
			slug: route.params.slug ?? "index",
		},
	},
});

useItemHead(item);
</script>

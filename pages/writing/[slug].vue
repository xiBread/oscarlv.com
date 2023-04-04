<template>
	<Container class="mt-14 lg:mt-28">
		<div class="mx-auto max-w-3xl">
			<article class="with-prose !max-w-none [&_p]:whitespace-pre-wrap" v-html="body" />
		</div>
	</Container>
</template>

<script setup lang="ts">
import { BLOCKS } from "@contentful/rich-text-types";
import type { WritingEntry } from "./index.vue";

const route = useRoute();
const ctf = useContentful();

const entries = await ctf.getEntries<WritingEntry>({
	content_type: "writing",
	"fields.slug": route.params.slug,
});

const entry = entries.items[0].fields;

entry.body.content.unshift({
	nodeType: BLOCKS.HEADING_1,
	data: {},
	content: [
		{
			nodeType: "text",
			data: {},
			value: entry.title,
			marks: [],
		},
	],
});

const body = ctf.render(entry.body, {
	renderNode: {
		[BLOCKS.EMBEDDED_ASSET]: (node) => {
			return `<img src="https:${node.data.target.fields.file.url}" />`;
		},
	},
});
</script>

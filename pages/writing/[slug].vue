<template>
	<div class="mt-16 sm:px-8 lg:mt-28">
		<Container>
			<div class="mx-auto max-w-3xl">
				<article
					class="use-prose !max-w-none [&_p]:whitespace-pre-wrap"
					v-html="body"
				></article>
			</div>
		</Container>
	</div>
</template>

<script setup lang="ts">
import { BLOCKS } from "@contentful/rich-text-types";
import type { WritingEntry } from "~/util/types";

const route = useRoute();
const { getSingleEntry, prependHeading, render } = useContentful();

const entry = await getSingleEntry<WritingEntry>("writing", {
	"fields.slug": route.params.slug,
});

prependHeading(entry);

const body = render(entry.body, {
	renderNode: {
		[BLOCKS.EMBEDDED_ASSET]: (node) => {
			return `<img src="https:${node.data.target.fields.file.url}" />`;
		},
	},
});

useEntryHead(entry);
</script>

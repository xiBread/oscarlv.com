<template>
	<div class="mt-16 sm:px-8 lg:mt-28">
		<div class="mx-auto max-w-7xl lg:px-8">
			<div class="relative px-4 sm:px-8 lg:px-12">
				<div class="mx-auto max-w-2xl lg:max-w-5xl">
					<div class="mx-auto max-w-3xl">
						<article
							class="use-prose !max-w-none [&_p]:whitespace-pre-wrap"
							v-html="body"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BLOCKS } from "@contentful/rich-text-types";

const route = useRoute();
const ctf = useContentful();

const entry = await ctf.getWritingEntry(route.params.slug as string);
ctf.prependHeading(entry);

const body = ctf.render(entry.body, {
	renderNode: {
		[BLOCKS.EMBEDDED_ASSET]: (node) => {
			return `<img src="https:${node.data.target.fields.file.url}" />`;
		},
	},
});

useEntryHead(entry);
</script>

<template>
	<ContainerLayout>
		<div class="mt-28 space-y-32 sm:mt-32">
			<div v-for="(entries, category) in groups" :key="category">
				<ul class="relative grid grid-cols-2 gap-12 sm:grid-cols-3">
					<h2
						class="absolute -left-px -top-[4.5rem] select-none text-4xl font-bold text-zinc-500/30 dark:text-zinc-400/40"
					>
						{{ category }}
					</h2>

					<Card
						v-for="entry in entries"
						:key="entry.slug"
						:href="`${$route.path}/${entry.slug}`"
						:title="`${entry.title}${entry.explicit ? ' (Explicit)' : ''}`"
						tag="li"
					>
						<template #link>
							<span class="flex items-center">
								{{ entry.title }}

								<Icon
									v-if="entry.explicit"
									name="material-symbols:explicit"
									class="ml-2.5 h-5 w-5 text-zinc-400 dark:text-zinc-500"
								/>
							</span>
						</template>

						<template #description>
							{{ getFirstLine(entry.body.content[0]) }}
						</template>
					</Card>
				</ul>
			</div>
		</div>
	</ContainerLayout>
</template>

<script lang="ts">
export interface WritingEntry {
	slug: string;
	category: string;
	explicit: boolean;
	title: string;
	body: Document;
}
</script>

<script setup lang="ts">
import { BLOCKS, type Block, type Document, type Text } from "@contentful/rich-text-types";
import groupBy from "~/util/groupBy";

const ctf = useContentful();

const { items } = await ctf.getEntries<WritingEntry>({
	content_type: "writing",
	order: "fields.category,fields.title",
});

const groups = groupBy(
	items.map((entry) => entry.fields),
	(i) => i.category
);

function getFirstLine(block: Block): string {
	if (block.nodeType === BLOCKS.QUOTE) {
		return getFirstLine(block.content[0] as Block);
	}

	const text = (block.content[0] as Text).value;
	const firstLine = /([^\n"]+[^,"\s])/.exec(text)![1];

	return firstLine + (/\w$/.test(firstLine) ? "." : "");
}
</script>

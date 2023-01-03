<template>
	<div class="mt-16 sm:mt-28 sm:px-8">
		<Container>
			<header class="use-prose max-w-2xl" v-html="render(page.body)"></header>

			<div class="mt-28 space-y-32 sm:mt-32">
				<div v-for="(entries, category) in groups" :key="category">
					<ul class="relative grid grid-cols-2 gap-12 sm:grid-cols-3">
						<span
							class="absolute -top-16 -left-px select-none text-4xl font-bold text-neutral-500/30"
						>
							{{ category }}
						</span>

						<li
							v-for="entry in entries"
							:key="entry.slug"
							class="group relative flex flex-col items-start"
						>
							<div class="font-semibold text-black dark:text-white">
								<div class="inset-bg"></div>

								<NuxtLink
									:to="`${$route.path}/${entry.slug}`"
									:title="entry.title + (entry.explicit ? ' (Explicit)' : '')"
								>
									<span class="inset-link"></span>

									<div class="relative z-10 flex items-center">
										{{ entry.title }}

										<Icon
											v-if="entry.explicit"
											icon="material-symbols:explicit"
											class="ml-2 h-4 w-4 text-neutral-400 dark:text-neutral-500"
										/>
									</div>
								</NuxtLink>
							</div>

							<p
								class="description overflow-hidden [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]"
							>
								{{ getFirstLine(entry.body.content[0]) }}
							</p>
						</li>
					</ul>
				</div>
			</div>
		</Container>
	</div>
</template>

<script setup lang="ts">
import { BLOCKS, type Block, type Text } from "@contentful/rich-text-types";
import { Icon } from "@iconify/vue";
import type { WritingEntry } from "~/util/types";

const { getEntries, getLandingPageEntry, render } = useContentful();

const page = await getLandingPageEntry("Writing");
useEntryHead(page);

const { items } = await getEntries<WritingEntry>({
	content_type: "writing",
	order: "fields.category,fields.title",
});

const groups = items
	.map((entry) => entry.fields)
	.reduce<Record<string, WritingEntry[]>>((group, entry) => {
		(group[entry.category] ??= []).push(entry);

		return group;
	}, {});

function getFirstLine(block: Block): string {
	if (block.nodeType === BLOCKS.QUOTE) {
		return getFirstLine(block.content[0] as Block);
	}

	const text = (block.content[0] as Text).value;
	const firstLine = /([^\n"]+[^,"\s])/.exec(text)![1];

	return firstLine + (/\w$/.test(firstLine) ? "." : "");
}
</script>

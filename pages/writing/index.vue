<template>
	<div class="mt-16 sm:mt-28 sm:px-8">
		<Container>
			<header class="use-prose max-w-2xl" v-html="render(page.body)"></header>

			<div class="mt-16 sm:mt-20">
				<ul class="grid grid-cols-2 gap-x-12 gap-y-16 sm:grid-cols-3 lg:grid-cols-4">
					<li
						v-for="entry in entries"
						:key="entry.slug"
						class="group relative flex flex-col items-start"
					>
						<ContentItem :item="entry">
							<dl>
								<dt class="sr-only">Category</dt>
								<dd class="description flex items-center">
									{{ entry.category }}

									<Icon
										v-if="entry.explicit"
										icon="material-symbols:explicit"
										class="ml-2 h-4 w-4"
									/>
								</dd>
							</dl>
						</ContentItem>
					</li>
				</ul>
			</div>
		</Container>
	</div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import type { WritingEntry } from "~/util/types";

const { getEntries, getLandingPageEntry, render } = useContentful();

const page = await getLandingPageEntry("Writing");
useEntryHead(page);

const { items } = await getEntries<WritingEntry>({ content_type: "writing" });

const normalize = (str: string) => str.replace(/^The (.+)/, "$1");

const entries = items
	.map((entry) => entry.fields)
	.sort(
		(a, b) =>
			a.category.localeCompare(b.category) ||
			normalize(a.title).localeCompare(normalize(b.title))
	);
</script>

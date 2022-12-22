<template>
	<div class="mt-16 sm:mt-28 sm:px-8">
		<Container>
			<header class="use-prose max-w-2xl" v-html="render(page.body)"></header>

			<div class="mt-20 space-y-28 sm:mt-28">
				<div v-for="(entries, category) in groups" :key="category">
					<ul
						class="relative grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5"
					>
						<span
							class="absolute -top-14 -left-px select-none text-4xl font-bold text-neutral-500/30"
						>
							{{ category }}
						</span>

						<li
							v-for="entry in entries"
							:key="entry.slug"
							class="group relative flex flex-col items-start"
						>
							<NuxtLink
								:to="`${$route.path}/${entry.slug}`"
								:title="entry.title + (entry.explicit ? ' (Explicit)' : '')"
								class="text-base font-semibold text-black dark:text-white"
							>
								<div class="relative z-10 flex items-center">
									{{ entry.title }}

									<Icon
										v-if="entry.explicit"
										icon="material-symbols:explicit"
										class="ml-2 h-4 w-4 text-neutral-600 dark:text-neutral-400"
									/>
								</div>
							</NuxtLink>
						</li>
					</ul>
				</div>
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
</script>

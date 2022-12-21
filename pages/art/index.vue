<template>
	<div class="mt-16 sm:mt-28 sm:px-8">
		<Container>
			<header class="use-prose max-w-2xl" v-html="render(page.body)"></header>

			<div class="mt-16 sm:mt-20">
				<ul class="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
					<li
						v-for="entry in entries"
						:key="entry.slug"
						class="group relative flex flex-col items-start"
					>
						<NuxtImg
							:src="entry.image.fields.file.url"
							class="z-20 mb-6 aspect-square rounded-2xl object-cover"
							width="800"
							height="800"
							alt=""
							loading="lazy"
						/>

						<ContentItem :entry="entry">
							<p class="description">{{ entry.description }}</p>
						</ContentItem>
					</li>
				</ul>
			</div>
		</Container>
	</div>
</template>

<script setup lang="ts">
import type { ArtEntry } from "~/util/types";

const { getEntries, getLandingPageEntry, render } = useContentful();

const page = await getLandingPageEntry("Art");
useEntryHead(page);

const { items } = await getEntries<ArtEntry>({
	content_type: "art",
	order: "fields.title",
});

const entries = items.map((entry) => entry.fields);
</script>

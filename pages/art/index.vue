<template>
	<div class="mt-16 sm:mt-28 sm:px-8">
		<div class="mx-auto max-w-7xl lg:px-8">
			<div class="relative px-4 sm:px-8 lg:px-12">
				<div class="mx-auto max-w-2xl lg:max-w-5xl">
					<header class="use-prose max-w-2xl" v-html="ctf.render(page.body)" />

					<div class="mt-16 sm:mt-20">
						<ul class="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
							<li
								v-for="entry in entries"
								:key="entry.slug"
								class="group relative flex flex-col items-start"
							>
								<NuxtImg
									:src="entry.image.fields.file!.url"
									class="z-20 mb-6 aspect-square rounded-lg object-cover"
									width="800"
									height="800"
									alt=""
									loading="lazy"
								/>

								<div class="font-semibold text-black dark:text-white">
									<div class="inset-bg" />

									<NuxtLink
										:to="`${$route.path}/${entry.slug}`"
										:title="entry.title"
									>
										<span class="inset-link" />
										<span class="relative z-10">{{ entry.title }}</span>
									</NuxtLink>
								</div>

								<p class="description">{{ entry.description }}</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { ArtEntry } from "~/util/types";

const ctf = useContentful();

const page = await ctf.getLandingPageEntry("Art");
useEntryHead(page);

const { items } = await ctf.getEntries<ArtEntry>({
	content_type: "art",
	order: "fields.title",
});

const entries = items.map((entry) => entry.fields);
</script>

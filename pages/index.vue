<template>
	<Container class="my-14 flex items-center sm:my-24">
		<div class="flex max-w-2xl flex-col items-center text-center">
			<ContentDoc tag="header" class="with-prose" />

			<div class="mt-6 flex gap-6">
				<NuxtLink v-for="(url, platform) in socials" :key="platform" :to="url">
					<Icon
						:name="`cib:${platform}`"
						class="h-5 w-5 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
					/>
				</NuxtLink>
			</div>
		</div>
	</Container>

	<HeroGrid />

	<Container class="mt-24 md:mt-28">
		<span class="with-prose prose-h2:text-3xl">
			<h2>Awards</h2>
		</span>

		<ol class="flex max-w-xl flex-col gap-y-4">
			<li v-for="(award, i) in awards" :key="i" class="with-prose">
				<h4 class="flex items-baseline">
					<span class="mr-2">{{ award.year }}</span>
					{{ award.title }}
				</h4>

				<p class="!mt-4">{{ award.description }}</p>
			</li>
		</ol>
	</Container>
</template>

<script setup lang="ts">
import type json from "../content/awards.json";

const { data } = await useAsyncData(() => queryContent("awards").findOne());
const awards = ((data.value?.body ?? []) as typeof json).reverse();

const socials = {
	twitter: "https://www.twitter.com/oleevermeren",
	instagram: "https://www.instagram.com/isocausality",
	github: "https://www.github.com/xiBread",
};
</script>

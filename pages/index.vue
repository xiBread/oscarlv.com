<template>
	<Title>olv.</Title>

	<Container class="mt-32 h-[65vh] flex items-center">
		<div
			:class="[
				'flex flex-col items-center text-center',
				(quote?.content?.length ?? 0) > 70 ? 'max-w-3xl' : 'max-w-xl',
			]"
		>
			<header class="prose dark:prose-invert max-w-none">
				<h1 class="quote text-4xl/tight lg:text-left font-mono">{{ quote?.content }}</h1>

				<p class="lg:text-right text-zinc-500 dark:text-zinc-400">
					&mdash; {{ quote?.quotee + (quote?.source ? ", " : "") }}
					<cite v-if="quote?.source">{{ quote.source }}</cite>
				</p>
			</header>

			<NuxtLink
				class="mt-14 text-zinc-500 dark:text-zinc-400 font-medium italic group hover:text-zinc-700 dark:hover:text-zinc-200"
				href="/explore"
			>
				<span class="group-hover:underline">explore</span>
				{{ " " }} &rarr;
			</NuxtLink>
		</div>
	</Container>
</template>

<script setup lang="ts">
import type json from "../content/quotes.json";

type Quote = (typeof json)[0];

const quote = ref<Quote>();

const { data } = await useAsyncData(() => queryContent("quotes").findOne());
const quotes = (data.value?.body ?? []) as Quote[];

onMounted(() => (quote.value = quotes[(Math.random() * quotes.length) | 0]));
onKeyStroke("Enter", () => useRouter().push("/explore"));
</script>

<style>
.quote {
	@apply before:content-['"']
		before:-ml-[1ch]
		before:text-zinc-400
		after:content-['"']
		after:text-zinc-400
		dark:before:text-zinc-600
		dark:after:text-zinc-600;
}
</style>

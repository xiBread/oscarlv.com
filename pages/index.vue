<template>
	<Title>olv.</Title>

	<Container class="my-14 flex items-center sm:my-20">
		<div
			class="prose flex max-w-2xl flex-col items-center text-center dark:prose-invert prose-h1:text-5xl/tight"
		>
			<h1>Curiosity through the eyes of expression.</h1>

			<div class="not-prose">
				<blockquote class="mb-2 whitespace-pre-wrap italic">
					"{{ quote?.content }}"
				</blockquote>

				<p class="text-zinc-500 dark:text-zinc-400">
					&mdash; {{ quote?.quotee + (quote?.source ? ", " : "") }}

					<cite v-if="quote?.source" class="font-medium">
						<NuxtLink
							v-if="typeof quote.source === 'object'"
							:href="quote.source.url"
							class="underline decoration-zinc-500 underline-offset-2 hover:text-white"
						>
							{{ quote.source.text }}
						</NuxtLink>

						<template v-else>{{ quote.source }}</template>
					</cite>
				</p>
			</div>
		</div>
	</Container>

	<PhotoWall />
</template>

<script setup lang="ts">
import type json from "../content/quotes.json";

type Quote = (typeof json)[number];

const quote = ref<Quote>();

const { data } = await useAsyncData(() => queryContent("quotes").findOne());
const quotes = (data.value?.body ?? []) as Quote[];

onMounted(() => (quote.value = quotes[(Math.random() * quotes.length) | 0]));
onKeyStroke("Enter", () => useRouter().push("/explore"));
</script>

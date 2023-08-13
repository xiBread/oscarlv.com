<template>
	<div class="mb-10">
		<blockquote class="mb-2 whitespace-pre-wrap">"{{ quote.content }}"</blockquote>

		<p class="mt-2 text-sm text-zinc-400">
			&mdash; {{ quote.quotee + (quote.source ? ", " : "") }}

			<cite v-if="quote.source">
				<NuxtLink v-if="typeof quote.source === 'object'" :href="quote.source.url">
					{{ quote.source.text }}
				</NuxtLink>

				<template v-else>{{ quote.source }}</template>
			</cite>
		</p>
	</div>
</template>

<script setup lang="ts">
import quotes from "../../content/quotes.json";

const quote = quotes[(Math.random() * quotes.length) | 0];
</script>

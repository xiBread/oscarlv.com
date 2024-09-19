<script lang="ts">
	import type { WritingEntry } from "velite:content";

	const { data } = $props();

	const entries = $derived(data.categories[data.entry.category]!);
	const current = $derived(entries.findIndex(({ slug }) => slug === data.entry.slug) ?? -1);

	const prev = $derived(entries[current - 1]);
	const next = $derived(entries[current + 1]);
</script>

<svelte:head>
	<title>{data.entry.title} | oliver rose.</title>
</svelte:head>

<article class="mx-auto max-w-4xl px-4 pb-20 pt-32 md:px-10">
	<h1 class="font-semibold fluid-text-5xl">
		{data.entry.title}
	</h1>

	<div
		class="mt-8 [&_p]:whitespace-pre-wrap"
		data-category={data.entry.category}
		data-start={data.entry.category === "dialogue" ? data.entry.start : undefined}
	>
		{@html data.entry.content}
	</div>

	<div class="my-10 h-px w-full bg-primary/50" role="separator"></div>

	<footer class="flex items-center justify-between">
		{@render navigation("Previous", prev)}
		{@render navigation("Next", next)}
	</footer>
</article>

{#snippet navigation(type: "Next" | "Previous", item?: WritingEntry)}
	{#if item}
		<div
			class="group flex flex-col {type === 'Previous' ? 'items-start' : 'ml-auto items-end'}"
		>
			<span class="font-mono text-sm uppercase">
				&lbrace; {type} &rbrace;
			</span>

			<a class="mt-2 font-light fluid-text-2xl/none" href="/writing/{item.slug}">
				<span class="transition-colors duration-300 group-hover:text-vintage-peach">
					{item.title}
				</span>
			</a>
		</div>
	{/if}
{/snippet}

<style>
	:global {
		[data-category]:not([data-category="short-story"]) {
			@apply space-y-6;
		}

		[data-category="dialogue"] p {
			max-width: 65ch;
		}

		[data-category="dialogue"][data-start="right"] p:nth-child(odd),
		[data-category="dialogue"][data-start="left"] p:nth-child(even) {
			margin-left: auto;
			text-align: right;
			color: theme("textColor.muted.foreground");
		}

		[data-category="short-story"] {
			@apply space-y-2;

			p {
				text-indent: 4ch;
			}
		}
	}
</style>

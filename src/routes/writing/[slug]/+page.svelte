<script lang="ts">
	import type { WritingEntry } from "velite:content";

	const { data } = $props();

	const entries = $derived(data.categories[data.entry.category]!);
	const current = $derived(entries.findIndex(({ slug }) => slug === data.entry.slug) ?? -1);

	const prev = $derived(entries[current - 1]);
	const next = $derived(entries[current + 1]);

	function formatDate(value: string) {
		return new Date(value).toLocaleDateString("en-US", {
			dateStyle: "long",
			timeZone: "America/New_York",
		});
	}
</script>

<svelte:head>
	<title>{data.entry.title} | oliver rose.</title>
</svelte:head>

<article class="prose prose-zinc dark:prose-invert mx-auto max-w-4xl px-6 pt-32 pb-20 md:px-10">
	{#if data.entry.date}
		<time class="text-muted-foreground text-sm" datetime={data.entry.date}>
			{formatDate(data.entry.date)}
		</time>
	{/if}

	<h1 class="text-fluid-5xl mt-2 mb-10 font-semibold">
		{data.entry.title}
	</h1>

	<div
		class="mt-8 [&_p]:whitespace-pre-wrap"
		data-category={data.entry.category}
		data-start={data.entry.category === "dialogue" ? data.entry.start : undefined}
	>
		{@html data.entry.content}
	</div>

	<footer class="mt-12 flex flex-col">
		<div class="bg-primary/50 mb-10 h-px w-full" role="separator"></div>

		<div class="flex items-center justify-between">
			{@render navigation("Previous", prev)}
			{@render navigation("Next", next)}
		</div>
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

			<a class="text-fluid-2xl/none not-prose mt-2 font-light" href="/writing/{item.slug}">
				<span class="group-hover:text-vintage-peach transition-colors duration-300">
					{item.title}
				</span>
			</a>
		</div>
	{/if}
{/snippet}

<script lang="ts">
	import { quotes } from "velite:content";

	const quote = quotes[(Math.random() * quotes.length) | 0];
</script>

<figure>
	<blockquote
		class="whitespace-pre-wrap fluid-text-sm"
		cite={typeof quote.source === "object" ? quote.source.url : undefined}
	>
		<p>{quote.content}</p>
	</blockquote>

	<figcaption class="mt-2 fluid-text-xs">
		<span class="text-muted-foreground">
			&mdash; {quote.quotee + (quote.source ? ", " : "")}
		</span>

		{#if quote.source}
			<cite>
				{#if typeof quote.source === "object"}
					<a class="underline" href={quote.source.url}>
						{quote.source.text}
					</a>
				{:else}
					{quote.source}
				{/if}
			</cite>
		{/if}
	</figcaption>
</figure>

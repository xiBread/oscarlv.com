<script lang="ts">
	import { quotes } from "velite:content";

	const quote = quotes[(Math.random() * quotes.length) | 0];
</script>

<figure>
	<blockquote
		class="text-fluid-sm whitespace-pre-wrap"
		cite={typeof quote.source === "object" ? quote.source.url : undefined}
	>
		<p>{quote.content}</p>
	</blockquote>

	<figcaption class="text-fluid-xs mt-2">
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

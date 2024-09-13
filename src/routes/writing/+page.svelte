<script lang="ts">
	import { enter } from "$lib/actions";
	import Icon from "$lib/components/Icon.svelte";

	const { data } = $props();
</script>

<svelte:head>
	<title>writing | oliver rose.</title>
</svelte:head>

<section class="mx-auto max-w-7xl px-4 py-28 md:px-8">
	<article class="max-w-prose" use:enter={{ y: -30, stagger: 0.3 }}>
		<h1>
			To write is to discover the essence of what remains
			<span class="period font-serif italic">untold</span>
		</h1>

		<p class="mt-2">
			As I drift off into reverie, I find myself running through a thousand different
			scenarios of "What if?" My life is not bound by the earth I stand upon.
		</p>
	</article>

	<div class="space-y-16 pt-16">
		{#each Object.entries(data.categories) as [category, entries] (category)}
			<ul>
				<li class="flex flex-col gap-8" use:enter={{ y: -15, stagger: 0.3, delay: 0.6 }}>
					<h2 class="period col-span-full font-semibold">
						{category.replace("-", " ").toLowerCase()}
					</h2>

					<ul class="focus grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
						{#each entries as entry (entry.path)}
							<li>
								<a
									class="-m-4 flex flex-col p-4"
									title={entry.title + (entry.explicit ? " (Explicit)" : "")}
									href="/writing/{entry.slug}"
								>
									<div class="flex items-center gap-x-2">
										<h3 class="font-medium fluid-text-sm">
											{entry.title}
										</h3>

										{#if entry.explicit}
											<Icon class="size-4 opacity-30" name="explicit" />
										{/if}
									</div>

									<p class="mt-2 line-clamp-2 text-sm text-muted-foreground">
										{entry.excerpt}
									</p>
								</a>
							</li>
						{/each}
					</ul>
				</li>
			</ul>
		{/each}
	</div>
</section>

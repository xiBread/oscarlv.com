<template>
	<div class="mt-16 sm:mt-28 sm:px-8">
		<Container>
			<header class="use-prose max-w-2xl" v-html="render(page.body)"></header>

			<div class="mt-16 sm:mt-20">
				<div
					class="md:border-l-2 md:border-neutral-200/70 md:pl-6 md:dark:border-neutral-800"
				>
					<div class="flex max-w-3xl flex-col space-y-16">
						<article
							v-for="entry in entries"
							:key="entry.id"
							class="md:grid md:grid-cols-4 md:items-baseline"
						>
							<div class="group relative flex flex-col items-start md:col-span-3">
								<span
									class="text-base font-semibold tracking-tight text-black dark:text-white"
								>
									{{ entry.title }}
								</span>

								<dl
									class="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-neutral-500 md:hidden"
								>
									<dt class="sr-only">Date</dt>
									<dd>
										<time :datetime="entry.date">
											<span
												class="absolute inset-y-0 left-0 flex items-center"
												aria-hidden="true"
											>
												<span
													class="h-5 w-0.5 bg-neutral-200 dark:bg-neutral-600"
												></span>
											</span>

											{{ format(entry.date) }}
										</time>
									</dd>
								</dl>

								<div
									class="description [&_a]:font-medium [&_a]:text-black [&_a]:underline [&_a]:dark:text-white"
									v-html="entry.body"
								></div>
							</div>

							<dl
								class="relative z-10 order-first mt-1 mb-3 hidden items-center text-sm text-neutral-500 md:block"
							>
								<dt class="sr-only">Date</dt>
								<dd>
									<time :datetime="entry.date">{{ format(entry.date) }}</time>
								</dd>
							</dl>
						</article>
					</div>
				</div>
			</div>
		</Container>
	</div>
</template>

<script setup lang="ts">
import type { AwardEntry } from "~/util/types";

const { getEntries, getLandingPageEntry, render } = useContentful();

const page = await getLandingPageEntry("Awards");
useEntryHead(page);

const { items } = await getEntries<AwardEntry>({
	content_type: "award",
	order: "-fields.date,-fields.order,fields.title",
});

const entries = items.map((entry) => ({
	...entry.fields,
	id: entry.sys.id,
	body: render(entry.fields.body, {
		renderNode: {
			"asset-hyperlink": (node, next) => {
				return `<a href="https:${node.data.target.fields.file.url}" target="_blank">${next(
					node.content
				)}</a>`;
			},
		},
	}),
}));

const format = (date: string) => useDateFormat(date, "MMMM D, YYYY").value;
</script>

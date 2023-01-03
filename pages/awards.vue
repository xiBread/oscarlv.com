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
								<div class="inset-bg"></div>

								<button
									class="z-10 text-left"
									type="button"
									@click="
										() => {
											target = entry.ref.fields;
											toggleDialog();
										}
									"
								>
									<span class="inset-link"></span>

									<span
										class="text-base font-semibold tracking-tight text-black dark:text-white"
									>
										{{ entry.title }}
									</span>

									<div
										class="description [&_a]:font-medium [&_a]:text-black [&_a]:underline [&_a]:dark:text-white"
										v-html="entry.body"
									></div>
								</button>

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
							</div>

							<div class="relative z-10 order-first hidden md:block">
								<svg
									viewBox="0 0 9 9"
									class="absolute right-full top-2.5 mr-5 h-[calc(0.5rem+1px)] w-[calc(0.5rem+1px)] overflow-visible text-neutral-300 dark:text-neutral-600"
								>
									<circle
										cx="4.5"
										cy="4.5"
										r="4.5"
										stroke="currentColor"
										class="fill-white dark:fill-[#0a0a0a]"
										stroke-width="2"
									/>
								</svg>

								<dl class="mt-1 mb-3 items-center text-sm text-neutral-500">
									<dt class="sr-only">Date</dt>
									<dd>
										<time :datetime="entry.date">{{ format(entry.date) }}</time>
									</dd>
								</dl>
							</div>
						</article>
					</div>
				</div>
			</div>
		</Container>

		<Lightbox
			v-if="target"
			:open="isOpen"
			:src="target.file!.url"
			:title="target.title!"
			:close="toggleDialog"
		/>
	</div>
</template>

<script setup lang="ts">
import type { AwardEntry } from "~/util/types";
import type { AssetFields } from "contentful";

const target = ref<AssetFields>();

const [isOpen, toggleDialog] = useToggle();
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
	body: render(entry.fields.body),
}));

const format = (date: string) => useDateFormat(date, "MMMM D, YYYY").value;
</script>

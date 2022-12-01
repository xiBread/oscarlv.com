<template>
	<NuxtLayout name="content">
		<div class="md:border-l-2 md:border-neutral-200/70 md:pl-6 md:dark:border-neutral-800">
			<div class="flex max-w-3xl flex-col space-y-16">
				<article
					v-for="item in items"
					:key="item.slug"
					class="md:grid md:grid-cols-4 md:items-baseline"
				>
					<div class="group relative flex flex-col items-start md:col-span-3">
						<span
							class="text-base font-semibold tracking-tight text-black dark:text-white"
						>
							{{ item.title }}
						</span>

						<dl
							class="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-neutral-500 md:hidden"
						>
							<dt class="sr-only">Date</dt>
							<dd>
								<time :datetime="item.date">
									<span
										class="absolute inset-y-0 left-0 flex items-center"
										aria-hidden="true"
									>
										<span
											class="h-5 w-0.5 bg-neutral-200 dark:bg-neutral-600"
										></span>
									</span>

									{{ format(item.date) }}
								</time>
							</dd>
						</dl>

						<div class="description" v-html="item.content"></div>
					</div>

					<dl
						class="relative z-10 order-first mt-1 mb-3 hidden items-center text-sm text-neutral-500 md:block"
					>
						<dt class="sr-only">Date</dt>
						<dd>
							<time :datetime="item.date">{{ format(item.date) }}</time>
						</dd>
					</dl>
				</article>
			</div>
		</div>
	</NuxtLayout>
</template>

<script setup lang="ts">
import type { AwardItem } from "~/util/types";

const { getItems } = useDirectusItems();

const items = await getItems<AwardItem[]>({
	collection: "awards",
	params: {
		filter: {
			slug: {
				_neq: "index",
			},
		},
	},
});

const format = (date: string) => useDateFormat(date, "MMMM D, YYYY").value;
</script>

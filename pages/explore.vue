<template>
	<Container class="px-2 mt-16 sm:mt-32">
		<div class="mt-16 sm:mt-20">
			<div class="mt-28 space-y-32 sm:mt-32">
				<div v-for="(entries, category) in groups" :key="category">
					<ul class="relative grid grid-cols-2 gap-12 sm:grid-cols-3">
						<h2
							class="absolute -left-px -top-[4.5rem] select-none text-4xl font-bold text-zinc-500/30 dark:text-zinc-400/40"
						>
							{{ category }}
						</h2>

						<li
							v-for="entry in entries"
							:key="entry._id"
							:title="entry.title + (entry.explicit ? ' (Explicit)' : '')"
							class="group relative flex flex-col items-start"
						>
							<div class="font-semibold text-zinc-800 dark:text-zinc-100">
								<div
									className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-70 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"
								/>

								<NuxtLink
									:to="entry._path!.split('/')[2]"
									@click="read.push(entry._id)"
								>
									<span
										className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"
									/>

									<span className="relative z-10">
										<span class="flex items-center space-x-2">
											<h3>{{ entry.title }}</h3>

											<Icon
												v-if="entry.explicit"
												name="material-symbols:explicit"
												class="h-5 w-5 text-zinc-400 dark:text-zinc-500"
											/>

											<span
												v-if="!read.includes(entry._id)"
												class="rounded-full bg-sky-400 h-2 w-2"
											/>
										</span>
									</span>
								</NuxtLink>
							</div>

							<p
								class="relative z-10 mt-2 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400"
							>
								{{ getExcerpt(entry.description) }}
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</Container>
</template>

<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

useHead({ title: "olv. | explore" });

const read = useLocalStorage<string[]>("read", []);

const { data } = await useAsyncData(() =>
	queryContent()
		.where({ _dir: { $ne: "" } })
		.find(),
);

const groups = (data.value ?? []).reduce(
	(prev, group) => {
		const key = (group._dir as string)
			.replace(/^_*(.)/, (_, $1) => $1.toUpperCase())
			.replace(/_+(.)/g, (_, $1) => ` ${$1.toUpperCase()}`);

		(prev[key] ??= []).push(group);

		return prev;
	},
	{} as Record<string, ParsedContent[]>,
);

function getExcerpt(description: string): string {
	const firstLine = /([^\n"]+[^,"\s])/.exec(description)![1];

	return firstLine + (/\w$/.test(firstLine) ? "." : "");
}
</script>

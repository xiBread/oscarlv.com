<template>
	<ContainerLayout>
		<div class="mt-28 space-y-44 sm:mt-32">
			<div v-for="(group, type) in groups" :key="type">
				<ul class="relative grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
					<h2
						class="absolute -left-px -top-[4.5rem] select-none text-4xl font-bold text-zinc-500/30 dark:text-zinc-400/40"
					>
						{{ type }}
					</h2>

					<Card
						v-for="collection in group ?? []"
						:key="collection._id"
						:href="collection._path!"
						tag="li"
					>
						<NuxtImg
							:src="collection.cover"
							class="z-20 mb-6 aspect-square rounded-lg object-cover"
							width="1000"
							height="1000"
							format="webp"
							loading="lazy"
						/>

						<template #link>{{ collection.title }}</template>
						<template #description>{{ collection.description }}</template>
					</Card>
				</ul>
			</div>
		</div>
	</ContainerLayout>
</template>

<script setup lang="ts">
import groupBy from "~/util/groupBy.js";

const { data } = await useAsyncData(() => queryContent("art/").find());

const groups = groupBy(
	(data.value ?? []).sort((a, b) => +a.type[0] - +b.type[0]),
	(i) => i.type.slice(2)
);
</script>

<template>
	<NuxtLayout name="content">
		<ul class="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
			<li
				v-for="item in items"
				:key="item.slug"
				class="group relative flex flex-col items-start"
			>
				<NuxtImg
					:src="item.image!"
					class="z-20 mb-6 aspect-square rounded-2xl object-cover"
					width="800"
					height="800"
					alt=""
					loading="lazy"
				/>

				<ContentItem :item="item">
					<p class="description">{{ item.description }}</p>
				</ContentItem>
			</li>
		</ul>
	</NuxtLayout>
</template>

<script setup lang="ts">
import type { ArtItem } from "~/util/types";

const { getItems } = useDirectusItems();

const items = await getItems<ArtItem[]>({
	collection: "art",
	params: {
		filter: {
			slug: {
				_neq: "index",
			},
		},
	},
});
</script>

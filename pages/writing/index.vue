<template>
	<NuxtLayout name="content">
		<ul class="grid grid-cols-2 gap-x-12 gap-y-16 sm:grid-cols-3 lg:grid-cols-4">
			<li
				v-for="item in items"
				:key="item.slug"
				class="group relative flex flex-col items-start"
			>
				<ContentItem :item="item">
					<dl>
						<dt class="sr-only">Category</dt>
						<dd class="description flex items-center">
							{{ item.category }}

							<Icon
								v-if="item.explicit"
								icon="material-symbols:explicit"
								class="ml-2 h-4 w-4"
							/>
						</dd>
					</dl>
				</ContentItem>
			</li>
		</ul>
	</NuxtLayout>
</template>

<script lang="ts"></script>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import type { WritingItem } from "~/util/types";

const { getItems } = useDirectusItems();

const items = await getItems<WritingItem[]>({
	collection: "writing",
	params: {
		filter: {
			slug: {
				_neq: "index",
			},
		},
	},
});
</script>

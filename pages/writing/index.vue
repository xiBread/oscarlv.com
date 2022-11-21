<template>
	<NuxtLayout name="content">
		<ul class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
			<li
				v-for="item in data"
				:key="item._path"
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

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const { data } = await fetchContent();
</script>

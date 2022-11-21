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
						<dd class="description">{{ item.category }}</dd>
					</dl>
				</ContentItem>
			</li>
		</ul>
	</NuxtLayout>
</template>

<script setup lang="ts">
const { data } = await fetchContent();
</script>

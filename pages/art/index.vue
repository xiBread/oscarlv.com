<template>
	<NuxtLayout name="content">
		<ul class="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
			<li
				v-for="item in content"
				:key="item._path"
				class="group relative flex flex-col items-start"
			>
				<NuxtImg
					:src="item.cover"
					class="z-20 mb-6 aspect-square rounded-2xl object-cover"
					height="800"
					width="800"
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
const content = await fetchContent();
</script>

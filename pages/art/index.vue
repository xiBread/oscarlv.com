<template>
	<NuxtLayout name="content">
		<ul class="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
			<li
				v-for="item in content"
				:key="item._id"
				class="group relative flex flex-col items-start"
			>
				<NuxtImg
					:src="item.img"
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
const { page } = useContent();
const content = await fetchContent();

appendHead(page.value);
</script>

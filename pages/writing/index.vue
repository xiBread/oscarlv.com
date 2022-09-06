<template>
	<div class="container mx-auto my-32 max-w-3xl space-y-16">
		<ContentList v-slot="{ list }" path="/writing">
			<article v-for="post in list" :key="post._id" class="relative">
				<div class="prose relative max-w-none dark:prose-invert md:flex-grow">
					<time
						:datetime="new Date(post.date).toISOString()"
						class="text-sm text-neutral-500"
					>
						{{ post.date }}
					</time>
					<h3 class="mt-1">{{ post.title }}</h3>

					<p class="line-clamp-2">{{ post.description }}</p>
				</div>

				<NuxtLink
					:to="post._path"
					class="mt-4 flex items-center text-sm font-medium text-sky-500"
				>
					<span class="relative">Read more</span>
					<Icon
						icon="octicon:chevron-right-16"
						class="relative mt-0.5 ml-1.5 overflow-visible text-sky-300 dark:text-sky-700"
					/>
				</NuxtLink>
			</article>
		</ContentList>
	</div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

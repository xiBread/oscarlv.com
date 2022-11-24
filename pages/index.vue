<template>
	<div class="mt-16 sm:mt-28 sm:px-8">
		<Container>
			<ContentDoc class="use-prose max-w-2xl" />

			<div class="mt-6 flex gap-7">
				<NuxtLink
					v-for="(url, platform) in socials"
					:key="platform"
					:to="url"
					:aria-label="platform"
				>
					<Icon
						:icon="`cib:${platform.toLowerCase()}`"
						class="h-5 w-5 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
					/>
				</NuxtLink>
			</div>
		</Container>
	</div>

	<div class="mt-16 sm:mt-20">
		<div class="-my-4 flex justify-center gap-6 overflow-hidden py-4 sm:gap-10">
			<div
				v-for="path in featured"
				:key="path"
				class="relative aspect-[6/7] w-44 flex-none rotate-2 overflow-hidden rounded-xl bg-neutral-50 shadow-lg dark:bg-neutral-900 sm:w-72 sm:rounded-2xl [&:nth-of-type(3n+2)]:-rotate-2"
			>
				<NuxtImg
					:src="path"
					class="absolute inset-0 h-full w-full object-cover"
					width="1800"
					height="2100"
					alt=""
					loading="lazy"
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const { socials } = useAppConfig();

const featured = [
	"rose-fire.jpg",
	"portraits/leaves.jpg",
	"portraits/market.jpg",
	"signals.jpg",
	"traveler.jpg",
];
</script>

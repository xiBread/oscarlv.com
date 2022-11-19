<template>
	<div class="mt-16 sm:mt-32 sm:px-8">
		<Container>
			<div
				class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12"
			>
				<div class="lg:pl-20">
					<div class="max-w-xs px-2.5 lg:max-w-none">
						<NuxtImg
							class="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover shadow-lg dark:bg-zinc-800"
							src="/portrait-2.jpg"
							format="webp"
							height="800"
							width="800"
						/>
					</div>
				</div>

				<ContentDoc class="use-prose lg:order-first lg:row-span-2" />

				<div class="lg:pl-20">
					<ul>
						<li
							v-for="(url, platform) in socials"
							:key="platform"
							class="flex [&:not(:first-child)]:mt-6"
						>
							<NuxtLink :key="platform" :to="url" class="contact-link">
								<Icon :icon="`cib:${platform.toLowerCase()}`" />

								Follow on {{ platform }}
							</NuxtLink>
						</li>

						<li
							class="mt-8 flex border-t border-neutral-200/60 pt-8 dark:border-zinc-800"
						>
							<NuxtLink :to="`mailto:${email}`" class="contact-link">
								<Icon icon="heroicons:envelope-solid" />

								{{ email }}
							</NuxtLink>
						</li>
					</ul>
				</div>
			</div>
		</Container>
	</div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const { socials } = useAppConfig();
const email = "oscar.leevermeren@gmail.com";
</script>

<style>
.contact-link {
	@apply flex
		items-center
		text-sm
		text-neutral-400
		hover:text-neutral-700
		dark:text-neutral-500
		dark:hover:text-neutral-200;
}

.contact-link > svg {
	@apply mr-4 flex-none;

	height: 1.15rem;
	width: 1.15rem;
}
</style>

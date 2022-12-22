<template>
	<div class="mt-16 sm:mt-28 sm:px-8">
		<Container>
			<div
				class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12"
			>
				<div class="flex justify-center lg:pl-20">
					<div class="max-w-xs px-2.5 sm:max-w-sm lg:max-w-none">
						<Image
							class="aspect-square rotate-3 rounded-2xl bg-neutral-50 object-cover shadow-lg dark:bg-neutral-900"
							src="Shattered"
							width="800"
							height="800"
						/>
					</div>
				</div>

				<article
					class="use-prose lg:order-first lg:row-span-2"
					v-html="render(entry.body)"
				></article>

				<div class="lg:pl-20">
					<ul>
						<li
							v-for="(url, platform, i) in socials"
							:key="platform"
							class="flex [&:not(:first-child)]:mt-6"
						>
							<NuxtLink
								:key="platform"
								:to="url"
								class="contact-link"
								:aria-labelledby="`platform-${i}`"
							>
								<Icon :icon="`cib:${platform.toLowerCase()}`" />

								<span :id="`platform-${i}`">Follow on {{ platform }}</span>
							</NuxtLink>
						</li>

						<li
							class="mt-8 flex border-t border-neutral-200/70 pt-8 dark:border-neutral-800"
						>
							<NuxtLink
								:to="`mailto:${email}`"
								class="contact-link"
								aria-label="Email"
							>
								<Icon icon="heroicons:envelope-solid" />

								{{ email }}
							</NuxtLink>
						</li>
					</ul>
				</div>

				<div class="col-span-2 mt-3 hidden px-16 lg:block">
					<Image
						src="Induction"
						class="aspect-[5/2] -rotate-3 rounded-2xl bg-neutral-50 object-cover shadow-lg dark:bg-neutral-800"
						width="2500"
						height="1000"
						loading="lazy"
					/>
				</div>
			</div>
		</Container>
	</div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const email = "oscar.leevermeren@gmail.com";

const { socials } = useAppConfig();
const { getLandingPageEntry, render } = useContentful();

const entry = await getLandingPageEntry("About");
useEntryHead(entry);
</script>

<style>
.contact-link {
	@apply flex
		items-center
		text-sm
		text-neutral-500
		hover:text-black
		dark:hover:text-white;
}

.contact-link > svg {
	@apply mr-4 flex-none;

	height: 1.15rem;
	width: 1.15rem;
}
</style>

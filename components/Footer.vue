<template>
	<footer class="mt-32">
		<ContainerOuter>
			<div class="border-t border-zinc-200 py-14 dark:border-zinc-700/80">
				<ContainerInner>
					<div
						class="flex flex-col items-center justify-between gap-6 text-sm sm:flex-row"
					>
						<div class="flex items-center">
							<div class="flex gap-6">
								<NuxtLink
									v-for="([icon, url], platform) in socials"
									:key="platform"
									:href="url"
								>
									<span
										:class="[
											'text-[1.25rem] opacity-50 hover:opacity-100',
											icon,
										]"
									/>
								</NuxtLink>
							</div>

							<!-- <div class="h-5 w-px mx-6 bg-zinc-200 dark:bg-zinc-700/90" />

							<NuxtLink
								href="/about"
								class="hover:text-zinc-700 font-medium dark:hover:text-zinc-300"
							>
								About
							</NuxtLink> -->
						</div>

						<p class="text-zinc-400 dark:text-zinc-500 sm:order-first">
							&copy; {{ new Date().getFullYear() }} Oscar Lee-Vermeren
						</p>
					</div>
				</ContainerInner>
			</div>
		</ContainerOuter>
	</footer>
</template>

<script setup lang="ts">
const socials = {
	twitter: ["i-[bi--twitter]", "https://www.twitter.com/_oscar_lv"],
	discord: ["i-[bi--discord]", "https://discord.gg/KqjSvdj3"],
	spotify: ["i-[bi--spotify]", "https://stats.fm/oscarlv"],
	github: ["i-[bi--github]", "https://www.github.com/xiBread"],
};
</script>

<template>
	<footer class="mt-32">
		<div class="sm:px-8">
			<div class="border-t border-neutral-200/70 pt-10 pb-16 dark:border-neutral-800">
				<div class="mx-auto max-w-7xl lg:px-8">
					<div class="relative px-4 sm:px-8 lg:px-12">
						<div class="mx-auto max-w-2xl lg:max-w-5xl">
							<div
								class="flex flex-col items-center justify-between gap-6 text-sm text-neutral-500 sm:flex-row"
							>
								<nav class="flex gap-6 font-medium">
									<NuxtLink
										v-for="item in navigation"
										:key="item"
										:to="`/${item.toLowerCase()}`"
										class="hover:text-black dark:hover:text-white"
									>
										{{ item }}
									</NuxtLink>
								</nav>

								<p
									class="select-none opacity-50 transition-opacity hover:opacity-100 sm:order-first"
								>
									&copy; 2023 Oscar Lee-Vermeren
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
const { navigation } = useAppConfig();
</script>

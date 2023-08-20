<template>
	<footer class="mt-32">
		<ContainerOuter>
			<div class="border-t border-zinc-200 py-14 dark:border-zinc-700/80">
				<ContainerInner>
					<div
						class="flex flex-col items-center justify-between gap-6 text-sm sm:flex-row"
					>
						<div class="flex items-center">
							<nav class="flex gap-6 text-sm font-medium text-zinc-500">
								<NuxtLink
									v-for="page in ['Art', 'Writing', 'About']"
									:key="page"
									:href="`/${page.toLowerCase()}`"
								>
									<span
										class="transition-colors hover:text-black dark:hover:text-white"
									>
										{{ page }}
									</span>
								</NuxtLink>
							</nav>
						</div>

						<p class="text-zinc-500 sm:order-first">
							&copy; {{ new Date().getFullYear() }} Oscar Lee-Vermeren
						</p>
					</div>
				</ContainerInner>
			</div>
		</ContainerOuter>
	</footer>
</template>

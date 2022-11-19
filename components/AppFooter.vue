<template>
	<footer class="mt-32">
		<div class="sm:px-8">
			<div class="border-t border-neutral-200/60 pt-10 pb-16 dark:border-neutral-800">
				<Container>
					<div
						class="flex flex-col items-center justify-between gap-6 text-sm text-neutral-400 dark:text-neutral-500 sm:flex-row"
					>
						<Navigation v-slot="{ navigation }" class="flex gap-6 font-medium">
							<NuxtLink
								v-for="link in navigation"
								:key="link._path"
								:to="link._path"
								class="hover:text-neutral-700 dark:hover:text-neutral-200"
							>
								{{ link.title }}
							</NuxtLink>
						</Navigation>

						<p
							class="select-none opacity-50 transition-opacity hover:opacity-100 sm:order-first"
						>
							&copy; 2022 Oscar Lee-Vermeren
						</p>
					</div>
				</Container>
			</div>
		</div>
	</footer>
</template>

<template>
	<footer class="mt-32">
		<ContainerOuter>
			<div class="border-t border-zinc-200 py-14 dark:border-zinc-700/80">
				<ContainerInner>
					<div
						class="flex flex-col items-center justify-between gap-6 text-sm text-zinc-500 sm:flex-row"
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
const navigation = ["Art", "Writing", "About"];
</script>

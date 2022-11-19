<template>
	<Html lang="en">
		<Body class="flex h-full flex-col dark:bg-neutral-900 dark:text-white">
			<Lichtenberg />

			<div class="relative">
				<AppHeader />

				<main>
					<NuxtPage />
				</main>

				<AppFooter />
			</div>
		</Body>
	</Html>
</template>

<script setup lang="ts">
const name = "Oscar Lee-Vermeren";

useHead({
	titleTemplate: (page) => (page ? `${page} - ${name}` : name),
});
</script>

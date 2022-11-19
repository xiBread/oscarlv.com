<template>
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
</template>

<script setup lang="ts">
const name = "Oscar Lee-Vermeren";

useHead({
	titleTemplate: (page) => (page ? `${page} - ${name}` : name),
});
</script>

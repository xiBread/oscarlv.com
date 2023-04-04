<template>
	<div class="flex h-screen items-center justify-center">
		<h1 class="mr-5 border-r border-zinc-600 pr-5 text-2xl font-semibold leading-relaxed">
			404
		</h1>

		<h2 class="text-lg">Page not found</h2>
	</div>
</template>

<script setup lang="ts">
useHead({ title: "404" });
setResponseStatus(404);
</script>

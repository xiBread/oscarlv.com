<template>
	<div class="h-screen">
		<div class="flex h-full items-center justify-center">
			<pre>{{ steve }}</pre>
		</div>
	</div>
</template>

<script setup lang="ts">
const steve = ref("");

onMounted(async () => {
	const res = await fetch(`${location.origin}/steve.txt`);
	steve.value = await res.text();
});
</script>

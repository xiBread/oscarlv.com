<template>
	<div class="m-36 flex h-screen flex-wrap pb-10">
		<div v-for="(col, i) in cols" :key="i" class="max-w-[33%] flex-[33%] px-1">
			<img v-for="(url, j) in col" :key="j" :src="url" class="my-2 w-full align-middle" />
		</div>
	</div>
</template>

<script setup lang="ts">
const urls = (await useFetch("/api/assets")).data.value!;

const cols = urls.reduce<string[][]>((acc, val, i) => {
	if (i % Math.ceil(urls.length / 3)) {
		return [...acc.slice(0, -1), [...(acc.at(-1) ?? []), val]];
	}
	return [...acc, [val]];
}, []);
</script>

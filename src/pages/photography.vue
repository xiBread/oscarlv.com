<template>
	<div class="mb-4 flex h-full flex-wrap px-2 dark:bg-neutral-900">
		<div v-for="(col, i) in cols" :key="i" class="max-w-[25%] flex-[25%] px-2">
			<img v-for="(url, j) in col" :key="j" :src="url" class="mt-4 w-full align-middle" />
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({ title: "Photography", index: 10 });

const res = await useFetch("/api/assets");
const urls = res.data.value.Contents.filter((obj) => obj.Key.startsWith("photography")).map(
	(obj) => `https://oscarlv.s3.amazonaws.com/${obj.Key}`
);

const size = Math.ceil(urls.length / 4);

const cols = urls.reduce<string[][]>((acc, val, i) => {
	if (i % size) {
		return [...acc.slice(0, -1), [...(acc.at(-1) ?? []), val]];
	}

	return [...acc, [val]];
}, []);
</script>

<template>
	<Head>
		<Title>Oscar Lee-Vermeren</Title>

		<Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
		<Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />

		<Link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

		<Meta name="theme-color" content="white" />
		<Meta name="theme-color" media="(prefers-color-scheme: dark)" content="#171717" />
	</Head>

	<div class="grid min-h-full grid-rows-[auto_1fr]">
		<AppHeader />

		<div class="grid h-screen grid-rows-[1fr_auto] overscroll-y-none">
			<Lichtenberg />

			<main>
				<NuxtPage />
			</main>
		</div>
	</div>
</template>

<script setup lang="ts">
useHead({
	script: [
		{
			src: "/theme.js",
			type: "module",
		},
	],
});
</script>

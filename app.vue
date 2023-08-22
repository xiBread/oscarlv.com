<template>
	<Html lang="en" class="antialiased">
		<Head>
			<Meta property="og:type" content="website" />

			<Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />

			<Link rel="preconnect" href="https://rsms.me" />
			<Link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
		</Head>

		<Body class="flex h-full flex-col bg-zinc-100 dark:bg-black dark:text-zinc-300">
			<Lichtenberg />

			<div class="fixed inset-0 flex justify-center sm:px-8">
				<div class="flex w-full max-w-7xl lg:px-8">
					<div
						class="w-full ring-1 ring-zinc-200 backdrop-blur-[6px] dark:ring-zinc-800"
					/>
				</div>
			</div>

			<div class="relative">
				<Header />

				<main>
					<NuxtPage />
				</main>

				<Footer />
			</div>
		</Body>
	</Html>
</template>

<script setup lang="ts">
useHead({ script: [{ src: "/theme.js", type: "module" }] });

onKeyStroke("i", (event) => event.metaKey && useToggle(useDark())(), { dedupe: true });
</script>

<style>
:root {
	--xyz-translate-default: 14px !important;

	font-family: "Inter var", sans-serif;
	font-feature-settings: "ss01", "cv11";
}

html {
	scrollbar-width: none;
}

html::-webkit-scrollbar {
	width: 0;
}
</style>

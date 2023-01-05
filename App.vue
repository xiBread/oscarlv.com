<template>
	<Html lang="en">
		<Head>
			<Meta hid="light" name="theme-color" content="#ffffff" />
			<Meta
				hid="dark"
				name="theme-color"
				content="#0a0a0a"
				media="(prefers-color-scheme: dark)"
			/>

			<Meta property="og:type" content="website" />

			<Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />

			<Link rel="preconnect" href="https://rsms.me" />
			<Link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
		</Head>

		<Body class="flex h-full flex-col dark:bg-[#0a0a0a] dark:text-white">
			<Lichtenberg />

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

if (typeof process !== "undefined") {
	process.browser = true;
}
</script>

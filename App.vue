<template>
	<Html lang="en">
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

<template>
	<div class="grid min-h-full [grid-template-rows:auto_1fr]">
		<AppHeader />

		<div class="grid h-[calc(100vh-64px)] overflow-auto overscroll-y-none [grid-template-rows:1fr_auto]">
			<main>
				<NuxtPage />
			</main>

			<AppFooter />
		</div>
	</div>
</template>

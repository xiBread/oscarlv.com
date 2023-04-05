<template>
	<Container class="mt-16 sm:mt-32">
		<div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
			<div class="mx-auto lg:pl-20">
				<div class="max-w-md px-2.5 lg:max-w-none">
					<NuxtImg
						src="/img/shattered.jpg"
						class="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
					/>
				</div>
			</div>

			<ContentDoc
				tag="article"
				class="with-prose place-self-center lg:order-first lg:row-span-2"
			/>
		</div>
	</Container>
</template>

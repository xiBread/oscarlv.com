<template>
	<DefineTemplate v-slot="{ src }">
		<div class="relative flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900">
			<NuxtImg
				placeholder
				sizes="sm:100vw md:50vw lg:220px"
				class="absolute inset-0 h-full w-full object-cover"
				:src="src"
				format="webp"
				loading="lazy"
			/>
		</div>
	</DefineTemplate>

	<div class="relative z-20 flex items-center justify-center gap-5 overflow-hidden py-4 sm:gap-6">
		<div class="hidden flex-col gap-5 sm:gap-6 lg:flex">
			<UseTemplate class="aspect-[2/3] w-36 lg:w-52" src="/portraits/abigail.jpg" />
		</div>

		<div class="flex flex-col gap-5 sm:gap-6">
			<UseTemplate class="aspect-[4/3] w-44 md:w-52" src="/vox_obscura/sonder.jpg" />
			<UseTemplate class="aspect-[3/4] w-44 md:w-52" src="/vox_obscura/halcyon.jpg" />
		</div>

		<div class="flex flex-col gap-5 sm:gap-6">
			<UseTemplate class="aspect-[2/3] w-72 lg:w-96" src="/portraits/sam.jpg" />
		</div>

		<div class="flex flex-col gap-5 sm:gap-6">
			<UseTemplate class="aspect-[3/4] w-44 md:w-52" src="/portraits/angela.jpg" />
			<UseTemplate class="aspect-[4/3] w-44 md:w-52" src="/vox_obscura/nocturnal.jpg" />
		</div>

		<div class="hidden flex-col gap-5 sm:gap-6 lg:flex">
			<UseTemplate class="aspect-[2/3] w-36 lg:w-52" src="/portraits/emily.jpg" />
		</div>
	</div>
</template>

<script setup lang="ts">
const [DefineTemplate, UseTemplate] = createReusableTemplate<{ src: string }>();
</script>

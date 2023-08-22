<template>
	<DefineTemplate v-slot="{ src }">
		<div
			class="relative flex-none overflow-hidden rounded-xl bg-zinc-100 shadow-md dark:bg-zinc-900"
		>
			<NuxtImg
				:src="src"
				class="absolute inset-0 h-full w-full object-cover"
				placeholder
				sizes="sm:100vw md:50vw lg:220px"
				format="webp"
				loading="lazy"
			/>
		</div>
	</DefineTemplate>

	<div
		class="relative z-20 flex items-center justify-center gap-5 overflow-hidden py-4 sm:gap-6"
		xyz="fade down duration-10 delay-2"
	>
		<div v-rellax class="xyz-in hidden flex-col gap-5 sm:gap-6 lg:flex" data-rellax-speed="3">
			<UseTemplate class="aspect-[2/3] w-36 lg:w-52" src="/portraits/abigail.jpg" />
		</div>

		<div v-rellax class="flex flex-col gap-5 sm:gap-6" data-rellax-speed="1">
			<UseTemplate
				class="xyz-in aspect-[4/3] w-44 md:w-52"
				src="/vox_obscura/sonder.jpg"
				xyz="inherit up delay-4"
			/>
			<UseTemplate
				class="xyz-in aspect-[3/4] w-44 md:w-52"
				src="/vox_obscura/halcyon.jpg"
				xyz="inherit delay-3"
			/>
		</div>

		<div
			v-rellax
			class="xyz-in flex flex-col gap-5 sm:gap-6"
			xyz="inherit up delay-5"
			data-rellax-speed="0"
		>
			<UseTemplate class="aspect-[2/3] w-72 lg:w-96" src="/portraits/sam.jpg" />
		</div>

		<div v-rellax class="flex flex-col gap-5 sm:gap-6" data-rellax-speed="1">
			<UseTemplate
				class="xyz-in aspect-[3/4] w-44 md:w-52"
				src="/portraits/angela.jpg"
				xyz="inherit up delay-3"
			/>
			<UseTemplate
				class="xyz-in aspect-[4/3] w-44 md:w-52"
				src="/vox_obscura/nocturnal.jpg"
				xyz="inherit delay-4"
			/>
		</div>

		<div v-rellax class="xyz-in hidden flex-col gap-5 sm:gap-6 lg:flex" data-rellax-speed="3">
			<UseTemplate class="aspect-[2/3] w-36 lg:w-52" src="/portraits/emily.jpg" />
		</div>
	</div>
</template>

<script setup lang="ts">
const [DefineTemplate, UseTemplate] = createReusableTemplate<{ src: string }>();
</script>

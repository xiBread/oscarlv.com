<template>
	<div class="not-prose [contain-intrinsic-size:auto_600px] [content-visibility:visible]">
		<div class="relative z-20 flex items-center justify-center gap-5 py-4 sm:gap-6">
			<div v-rellax class="hidden flex-col gap-5 sm:gap-6 lg:flex" data-rellax-speed="3">
				<HeroGridItem class="aspect-[2/3] w-36 lg:w-52" :src="images[0]" />
			</div>

			<div v-rellax class="flex flex-col gap-5 sm:gap-6" data-rellax-speed="1">
				<HeroGridItem class="aspect-[4/3] w-44 md:w-52" :src="images[1]" />
				<HeroGridItem class="aspect-[3/4] w-44 md:w-52" :src="images[2]" />
			</div>

			<div v-rellax class="flex flex-col gap-5 sm:gap-6" data-rellax-speed="0">
				<HeroGridItem class="aspect-[2/3] w-72 lg:w-96" :src="images[3]" />
			</div>

			<div v-rellax class="flex flex-col gap-5 sm:gap-6" data-rellax-speed="1">
				<HeroGridItem class="aspect-[3/4] w-44 md:w-52" :src="images[4]" />
				<HeroGridItem class="aspect-[4/3] w-44 md:w-52" :src="images[5]" />
			</div>

			<div v-rellax class="hidden flex-col gap-5 sm:gap-6 lg:flex" data-rellax-speed="3">
				<HeroGridItem class="aspect-[2/3] w-36 lg:w-52" :src="images[6]" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const images = [
	"/img/art/portraits/abigail.jpg",
	"/img/art/vox-obscura/sonder.jpg",
	"/img/art/vox-obscura/halcyon.jpg",
	"/img/art/portraits/sam.jpg",
	"/img/art/gallery/companionship.jpg",
	"/img/art/vox-obscura/nocturnal.jpg",
	"/img/art/portraits/emily.jpg",
];
</script>

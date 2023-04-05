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
	"/13pjmi8GS44BbS37o95kav/cfa26308ff49f98d8246df858759073c/abigail.jpg",
	"/7HzTv6yeuEUSd0dECIb6VX/26b44250c4f903ed6cddf4152fa62fd0/sonder.jpg",
	"/6sIw47NawYkGfVP8NAKkny/63c5e7328e6ed431830d6d322977e142/olv-si-9_halcyon.jpg",
	"/2SqwMqSRoDqRpGrFZdaJPL/3a98f845409e547cedfa0546b97c3895/grace.jpg",
	"/6Df37tXECAZLycByE9U9W1/f19775e94f2c8470b078dd662cec5393/olv-companionship.jpg",
	"/7Ks4WnFXWbuqm4K1n19wwQ/d20b61e4e6095db40d13ae4ad3aa71f4/nocturnal.jpg",
	"/6FJ4oKBS6nLJxEeY8DiLmy/8712eb53d308c2fb1c3938b6ea4adcc9/emily.jpg",
];
</script>

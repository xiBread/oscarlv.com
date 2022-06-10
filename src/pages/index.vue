<template>
	<div class="dark:bg-neutral-900">
		<div
			ref="home"
			class="relative h-[calc(100vh-64px)] w-auto bg-cover bg-fixed"
			:style="{ backgroundImage: `url('introspection.png')` }"
		>
			<div
				class="absolute left-12 bottom-10 flex flex-col font-inter text-5xl font-black uppercase tracking-wide text-black mix-blend-screen"
			>
				<h1 class="mb-2 w-fit bg-white/80 p-2">Oscar</h1>
				<h2 class="bg-white/80 p-2">Lee-Vermeren</h2>
			</div>
		</div>

		<div class="z-50 mx-auto px-4 py-14 lg:px-8 xl:max-w-7xl">
			<section class="dark:text-white">
				<h3 class="mb-5 font-inter text-4xl font-bold">
					<a class="float-left -ml-8 pr-2">
						<HashtagIcon class="inline-block h-6 w-6 align-middle text-neutral-300 dark:text-neutral-600" />
					</a>
					About
				</h3>

				<p class="font-inter lg:text-lg">
					Hey there! I'm Oscar, and I'm 16 years old. I was born in China and moved to America when I was 2.
					<br />
					<br />
					I've self-taught myself how to program and I aspire to be either a software developer or a software
					engineer and hope to even work at Microsoft some day. Aside from programming, I can also play piano
					and guitar (though very little), speak some very basic German, dabble in graphic design, and of
					course photography.
					<br />
					<br />
					My interest in photography randomly started in 7th grade, but I wasn't invested enough to use a
					proper camera, so I made do with my phone. I was fortunately able to get familiar with one during
					the time I worked for the yearbook in 8th grade. I finally took a couple of photography classes
					during my Junior year of highschool where I was able to really focus on the details and experiment
					with various styles.
				</p>
			</section>
		</div>
	</div>
</template>

<script setup lang="ts">
import { HashtagIcon } from "@heroicons/vue/solid/index.js";

definePageMeta({ title: "Home", index: 0 });
</script>

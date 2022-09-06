<template>
	<div class="flex h-screen items-start">
		<div class="sticky h-full px-9">
			<nav class="flex h-full items-center justify-center">
				<ul
					class="group space-y-4 font-mono text-sm dark:text-neutral-600"
					@mouseover="ulhover = true"
					@mouseleave="ulhover = false"
				>
					<li v-for="(loc, i) in links" :key="loc" class="dark:hover:text-neutral-300">
						<NuxtLink :to="`#${slugify(loc)}`">
							<div class="relative">
								{{ `${i + 1}`.padStart(2, "0") }}

								<span
									class="absolute left-0 whitespace-nowrap pl-8 opacity-0 transition-[padding,opacity] duration-500 group-hover:pl-16 group-hover:opacity-100"
								>
									{{ loc }}
								</span>
							</div>
						</NuxtLink>
					</li>
				</ul>
			</nav>
		</div>

		<div
			:class="[
				'relative flex h-full w-full items-center transition-[left] duration-500 ease-out',
				ulhover ? 'left-52' : 'left-0',
			]"
		>
			<NuxtImg
				src="s3/photography/collections/neon-lights/neon-lights-001.jpg"
				width="512"
				class="relative left-48"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import slugify from "~/util/slugify";

useHead({ title: "Photography" });

const ulhover = ref(false);

const links = ["Chasing Highs", "Neon Lights", "Stray Nights", "Gallery"];
</script>

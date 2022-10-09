<template>
	<div ref="root" class="flex items-start">
		<div class="sticky top-0 flex h-screen shrink-0 flex-col overflow-visible px-9">
			<nav class="m-0 my-auto">
				<ul class="group m-0 list-none p-0 dark:text-neutral-600">
					<li
						v-for="(loc, i) in links"
						:key="loc"
						class="text-sm !leading-8 dark:hover:text-neutral-300"
					>
						<a :href="`#${slugify(loc)}`">
							<div
								class="relative w-6 text-center font-mono transition-all duration-500"
							>
								{{ `${i + 1}`.padStart(2, "0") }}

								<span
									class="invisible absolute left-0 w-64 whitespace-nowrap pl-8 text-left opacity-0 transition-all duration-500 group-hover:pl-16 group-hover:opacity-100"
								>
									{{ loc }}
								</span>
							</div>
						</a>
					</li>
				</ul>
			</nav>
		</div>

		<div class="relative left-0 w-full transition-[left] duration-500 will-change-[left]">
			<div class="relative">
				<ul class="m-0 list-none px-0">
					<li v-for="loc in links" :id="slugify(loc)" :key="loc" class="relative">
						<div class="grid-layout h-screen items-center">
							<div class="col-span-12 min-w-0">
								<div class="grid-layout !grid-cols-12 items-center !gap-x-0">
									<div
										class="prose relative z-[5] col-span-4 col-start-3 min-w-0 px-0 py-40 dark:prose-invert"
									>
										<h2>{{ loc }}</h2>
										<p>
											Lorem ipsum, dolor sit amet consectetur adipisicing
											elit. Libero rem a dolor natus? Amet delectus totam
											eligendi animi ex.
										</p>
										<NuxtLink :to="`/photography/${slugify(loc)}`">
											View
										</NuxtLink>
									</div>
								</div>
							</div>
						</div>

						<div
							ref="covers"
							class="grid-layout pointer-events-none invisible fixed inset-y-[15vh] inset-x-0 z-10 opacity-0 transition-all duration-700"
						>
							<div class="col-span-7 col-start-8 min-w-0">
								<div
									class="relative left-0 flex h-[70vh] items-center transition-[left] duration-500"
								>
									<img src="https://via.placeholder.com/512" class="relative" />
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import slugify from "~/util/slugify";

useHead({ title: "Photography" });

// const ulhover = ref(false);

const root = ref<HTMLElement>();
const covers = ref<HTMLElement[]>();

const links = ["Chasing Highs", "Neon Lights", "Stray Nights", "Gallery"];

onMounted(() => {
	for (const cover of covers.value!) {
		useIntersectionObserver(
			cover,
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						cover.classList.toggle("!visible");
						cover.classList.toggle("!opacity-100");
					}
				}
			},
			{
				rootMargin: "0px",
				threshold: 0.5,
			}
		);
	}
});
</script>

<style>
.grid-layout {
	display: grid;
	grid-template-columns: repeat(14, 1fr);
	gap: 1rem calc(100% * (1 / 28));
}
</style>

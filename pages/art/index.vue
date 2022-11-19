<template>
	<NuxtLayout v-slot="{ content }" name="content">
		<ul class="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
			<li
				v-for="item in content"
				:key="item._path"
				class="group relative flex flex-col items-start"
			>
				<NuxtImg
					:src="`https://d1ust53l0yh0jm.cloudfront.net/${item.cover}`"
					class="z-20 aspect-square rounded-2xl object-cover"
					height="800"
					width="800"
					loading="lazy"
				/>

				<div class="mt-6 text-base font-semibold text-neutral-700 dark:text-neutral-200">
					<div
						class="absolute -inset-y-6 -inset-x-4 z-0 bg-neutral-200/50 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-neutral-800 sm:-inset-x-6 sm:rounded-2xl"
					></div>

					<NuxtLink :to="item._path">
						<span
							class="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"
						></span>

						<span class="relative z-10">{{ item.title }}</span>
					</NuxtLink>
				</div>

				<p class="relative z-10 mt-2 text-sm text-neutral-500 dark:text-neutral-400">
					{{ item.description }}
				</p>
			</li>
		</ul>
	</NuxtLayout>
</template>

<template>
	<NuxtLayout v-slot="{ content }" name="content">
		<ul class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
			<li
				v-for="item in content"
				:key="item._path"
				class="relative flex flex-col items-start"
			>
				<span class="text-base font-semibold text-neutral-700 dark:text-neutral-200">
					{{ item.title }}
				</span>
			</li>
		</ul>
	</NuxtLayout>
</template>

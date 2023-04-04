<template>
	<component :is="$props.tag ?? 'div'" class="group relative flex flex-col items-start">
		<slot />

		<div class="font-semibold text-zinc-800 dark:text-zinc-100">
			<div
				className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"
			/>

			<NuxtLink :to="$props.href">
				<span
					className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"
				/>
				<span className="relative z-10">
					<slot name="link" />
				</span>
			</NuxtLink>
		</div>

		<p class="relative z-10 mt-2 line-clamp-2 text-sm text-neutral-600 dark:text-neutral-400">
			<slot name="description" />
		</p>
	</component>
</template>

<script setup lang="ts">
defineProps<{ href: string; tag?: keyof HTMLElementTagNameMap }>();
</script>

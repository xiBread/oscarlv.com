<template>
	<NuxtLayout name="content">
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			<button
				v-for="url in data"
				:key="url"
				type="button"
				class="bg-neutral-100 dark:bg-neutral-800"
				@click="openModal(url)"
			>
				<NuxtImg
					:src="url"
					class="aspect-square object-cover"
					height="800"
					width="800"
					loading="lazy"
				/>
			</button>
		</div>

		<Dialog as="div" :open="isOpen" class="relative z-50" @close="isOpen = false">
			<div class="fixed inset-0 bg-neutral-800/40 backdrop-blur-sm dark:bg-black/70"></div>

			<div class="fixed inset-0 overflow-y-auto">
				<div class="flex min-h-full items-center justify-center">
					<DialogPanel class="flex h-full overflow-hidden">
						<NuxtImg :src="target" class="m-auto max-h-screen max-w-full p-6 sm:p-16" />
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	</NuxtLayout>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel } from "@headlessui/vue";

const route = useRoute();

const data = await $fetch("/api/assets", {
	params: {
		collection: route.params.collection,
	},
});

const isOpen = ref(false);
const target = ref("");

function openModal(url: string) {
	isOpen.value = true;
	target.value = url;
}
</script>

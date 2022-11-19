<template>
	<div class="mt-16 sm:mt-28 sm:px-8">
		<Container>
			<ContentDoc tag="header" class="use-prose max-w-2xl" />

			<div class="mt-16 sm:mt-24">
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					<button
						v-for="url in data"
						:key="url"
						type="button"
						class="bg-neutral-100 dark:bg-neutral-800 dark:ring-1 dark:ring-neutral-700/30"
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
			</div>
		</Container>
	</div>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel } from "@headlessui/vue";

const route = useRoute();

const data = await $fetch("/api/assets", {
	params: {
		collection: route.params.collection,
	},
});

const isOpen = ref(true);
const viewing = ref("");

function closeModal() {
	isOpen.value = false;
}

function openModal(url: string) {
	isOpen.value = true;
	viewing.value = url;
}
</script>

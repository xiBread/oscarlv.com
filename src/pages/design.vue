<template>
	<div class="h-full dark:bg-neutral-900 dark:text-white">
		<div class="inter flex items-center justify-center pt-8 italic">
			<p>I apologize for the inconsistent design of this page, I'm still in the process of redesigning.</p>
		</div>

		<div v-for="(category, i) in categories" :key="i">
			<div class="grid grid-cols-3 gap-5 px-32 pt-8 pb-6">
				<h1 class="col-span-full text-5xl font-black">
					{{ i }}
				</h1>

				<div
					v-for="photo in category"
					:key="photo"
					class="aspect-square rounded-lg bg-cover bg-center hover:cursor-pointer"
					:style="{ backgroundImage: `url('${photo}')` }"
					@click="openModal(photo)"
				></div>
			</div>
		</div>

		<div class="mb-6 flex flex-col items-center justify-center">
			<h1 class="col-span-full mb-6 mt-8 text-5xl font-black">Motion Graphic</h1>

			<iframe
				width="1280"
				height="720"
				src="https://www.youtube.com/embed/Iz_ApYiPO6c?loop=1&playlist=Iz_ApYiPO6c"
				allowfullscreen
			></iframe>
		</div>

		<TransitionRoot appear :show="isOpen" as="template">
			<Dialog as="div" @close="closeModal">
				<div class="fixed inset-0 z-10">
					<div class="min-h-screen text-center">
						<TransitionChild
							as="template"
							enter="duration-300 ease-out"
							enter-from="opacity-0"
							enter-to="opacity-100"
							leave="duration-200 ease-in"
							leave-from="opacity-100"
							leave-to="opacity-0"
						>
							<DialogOverlay class="fixed inset-0 bg-zinc-900/70" />
						</TransitionChild>

						<span class="inline-block h-screen align-middle" aria-hidden="true"> &ZeroWidthSpace; </span>

						<TransitionChild
							as="template"
							enter="duration-300 ease-out"
							enter-from="opacity-0 scale-95"
							enter-to="opacity-100 scale-100"
							leave="duration-200 ease-in"
							leave-from="opacity-100 scale-100"
							leave-to="opacity-0 scale-95"
						>
							<div
								class="inline-block w-full max-w-2xl transform overflow-hidden rounded-2xl bg-zinc-800 p-5 text-left align-middle shadow-xl transition-all"
							>
								<div class="my-4">
									<img class="rounded-xl" :src="modalPhoto" />
								</div>

								<button
									type="button"
									class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 py-2 px-4 text-sm font-medium text-blue-900 hover:bg-blue-200"
									@click="closeModal"
								>
									Close
								</button>
							</div>
						</TransitionChild>
					</div>
				</div>
			</Dialog>
		</TransitionRoot>
	</div>
</template>

<script setup lang="ts">
import { TransitionRoot, TransitionChild, Dialog, DialogOverlay } from "@headlessui/vue";

definePageMeta({ title: "Graphic/Digital Design", index: 20 });

const res = await useFetch("/api/assets");
const urls = res.data.value.Contents.filter((obj) => obj.Key.startsWith("design")).map(
	(obj) => `https://oscarlv.s3.amazonaws.com/${obj.Key}`
);

const modalPhoto = ref<string | undefined>();
const isOpen = ref(false);

const categories = {
	Iconography: ["https://oscarlv.s3.amazonaws.com/design/iconography.png"],
	Patterns: urls.filter((url) => url.includes("pattern")),
	"Warped Typography": ["https://oscarlv.s3.amazonaws.com/design/warped-typography.png"],
	"Book Cover Redesign": urls.filter((url) => url.includes("cover")),
};

const closeModal = (): void => void (isOpen.value = false);
const openModal = (hash: string): void => {
	modalPhoto.value = Object.values(categories)
		.find((urls) => {
			return urls.some((url) => url === hash);
		})
		?.find((url) => url === hash);

	isOpen.value = true;
};
</script>

<template>
	<Dialog class="relative z-50" :open="lightbox.isOpen" @close="close()">
		<div class="fixed inset-0 flex items-center justify-center p-4 md:p-8">
			<DialogPanel class="text-white">
				<DialogBackdrop
					class="fixed inset-0 z-40 bg-black/80 backdrop-blur-md md:bg-neutral-800/70"
				/>

				<div
					:class="[
						'flex flex-col items-center justify-center',
						statement && 'md:flex-row',
					]"
				>
					<img
						:src="lightbox.image.src"
						:class="[
							'h-full max-h-[90vh] w-full object-cover',
							statement && 'md:max-w-[50%]',
						]"
					/>

					<div
						v-if="statement"
						class="prose prose-zinc !prose-invert mt-10 md:ml-10 md:mt-0"
					>
						<h2 class="text-4xl">{{ lightbox.image.title }}</h2>
						<p v-html="statement"></p>

						<button
							type="button"
							class="rounded-md bg-zinc-700 px-3 py-2 text-sm font-medium md:hidden"
							aria-label="Close lightbox"
							@click="close()"
						>
							Close
						</button>
					</div>

					<h2 v-else class="mt-2 font-medium">{{ lightbox.image.title }}</h2>
				</div>

				<button
					type="button"
					class="absolute right-6 top-6 hidden md:block"
					aria-label="Close lightbox"
					@click="close()"
				>
					<span class="i-[octicon--x-16] text-3xl"></span>
				</button>
			</DialogPanel>
		</div>
	</Dialog>
</template>

<script setup lang="ts">
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/vue";
import { useStore } from "@nanostores/vue";
import { getEntry } from "astro:content";
import { marked } from "marked";
import { ref, watch } from "vue";
import { $lightbox } from "../lib/lightbox";

const statement = ref("");
const lightbox = useStore($lightbox);

watch(lightbox, async ({ image }) => {
	if (image.dataset.slug) {
		const entry = await getEntry("statements", image.dataset.slug);

		statement.value = marked.parse(entry?.body ?? "");
	}
});

const close = () => $lightbox.setKey("isOpen", false);
</script>

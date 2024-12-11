<script lang="ts">
	const { class: className = "" } = $props();
</script>

<div class="absolute right-6 bottom-8">
	<div class="indicator flex items-center gap-x-2">
		<span class="text-sm">Scroll</span>

		<svg class="mt-0.5 size-3 {className}" fill="none" viewBox="0 0 24 24">
			<path
				fill="currentColor"
				fill-rule="evenodd"
				d="M1.2 8h21.6V5.5H1.2V8Zm21.6 9V8h-2.5v9h2.5Z"
				clip-rule="evenodd"
			>
			</path>
		</svg>
	</div>
</div>

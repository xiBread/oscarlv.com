<script lang="ts">
	const { class: className }: { class: string } = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="32"
	height="32"
	viewBox="0 0 24 24"
	class={className}
>
	<g
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
	>
		<path d="M2 12s3-7 10-7s10 7 10 7s-3 7-10 7s-10-7-10-7" />
		<circle cx="12" cy="12" r="3" />
	</g>
</svg>

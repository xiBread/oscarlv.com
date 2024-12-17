<script lang="ts">
	import { page } from "$app/state";
</script>

{#if page.error}
	<div class="flex-center flex h-svh flex-col px-4">
		<h1>
			<span class="text-vintage-peach font-mono">{page.status}</span> | {page.error.message}
		</h1>

		<button
			class="group mt-6 hover:cursor-pointer"
			type="button"
			onclick={() => history.back()}
		>
			<span class="inline-block transition-transform group-hover:-translate-x-1">&larr;</span>
			Back
		</button>
	</div>
{/if}

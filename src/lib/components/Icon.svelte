<script lang="ts">
	import arrow from "./icons/arrow.svelte";
	import audio from "./icons/audio.svelte";
	import close from "./icons/close.svelte";
	import explicit from "./icons/explicit.svelte";
	import eye from "./icons/eye.svelte";
	import github from "./icons/github.svelte";
	import logo from "./icons/logo.svelte";
	import x from "./icons/x.svelte";

	interface Props {
		class?: string;
		// eslint-disable-next-line no-use-before-define
		name: keyof typeof icons;
	}

	const { class: className = "", name }: Props = $props();

	const icons = {
		arrow,
		audio,
		close,
		explicit,
		eye,
		github,
		logo,
		x,
	};

	const Icon = icons[name];
</script>

<Icon class="inline-block {className}" />

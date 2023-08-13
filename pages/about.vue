<template>
	<Title>about &bullet; olv.</Title>

	<Container class="mt-16 sm:mt-32">
		<ContentDoc tag="article" class="slide prose prose-zinc mx-auto dark:prose-invert" />
	</Container>
</template>

<style>
.slide > * {
	--slide-delay: 0;
	animation: slide 1s calc(var(--slide-delay) * 100ms) 1 both;
}

.slide > *:nth-child(1) {
	--slide-delay: 1;
}

.slide > *:nth-child(2) {
	--slide-delay: 2;
}

.slide > *:nth-child(3) {
	--slide-delay: 3;
}

.slide > *:nth-child(4) {
	--slide-delay: 4;
}

.slide > *:nth-child(5) {
	--slide-delay: 5;
}

.slide > *:nth-child(6) {
	--slide-delay: 6;
}

@keyframes slide {
	from {
		transform: translateY(-10px);
		opacity: 0;
	}

	to {
		transform: translateY(0);
		opacity: 100;
	}
}
</style>

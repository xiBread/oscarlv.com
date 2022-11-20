<template>
	<div class="mt-16 sm:mt-28 sm:px-8">
		<Container>
			<ContentDoc tag="header" class="use-prose max-w-2xl" />

			<div class="mt-16 sm:mt-20">
				<slot></slot>
			</div>
		</Container>
	</div>
</template>

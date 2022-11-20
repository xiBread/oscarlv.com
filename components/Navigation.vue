<template>
	<nav>
		<ContentNavigation v-slot="{ navigation }" :query="{ where: [{ _path: { $not: '/' } }] }">
			<slot :nav="navigation"></slot>
		</ContentNavigation>
	</nav>
</template>

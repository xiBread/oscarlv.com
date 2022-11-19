<template>
	<ContentNavigation v-slot="{ navigation }" :query="{ where: { _path: { $not: '/' } } }">
		<slot :navigation="navigation"></slot>
	</ContentNavigation>
</template>

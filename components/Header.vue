<template>
	<header class="relative z-40 flex flex-col">
		<div class="top-0 z-10 h-16 pt-6">
			<Container class="top-6 w-full sm:px-8">
				<div class="relative flex items-center gap-4">
					<div class="flex flex-1">
						<NuxtLink to="/" class="mx-3" aria-label="Home">
							<svg
								class="h-8 w-8 fill-black dark:fill-white"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									d="M3.77,16.71c-1.31,1.08-3.17,.91-3.09-.72-.13-.72,1.76-3.2,3.24-3.71,.52-.14,.83,.05,.58,.5-.34,.27-.54,.4-.89,.4-1.16,.64-1.85,1.9-2.1,2.39-.67,2.52,2.12,1.01,2.7-.29,.07-.08,.07-.11-.03-.18-.35-.28-.78-.88-.58-1.29,.24-.34,.86-.16,1.17,.11,.22,.18,.33,.45,.34,.8,.01,.72,1.11,.8,1.64,.41,.26-.21,.44-.07,.28,.15-.37,.43-1.48,.59-1.94,.31-.18-.11-.29-.09-.41,.09-.21,.29-.6,.79-.89,1.03Z"
								/>
								<path
									d="M.16,23.97c-.35-.15-.04-.58,.2-.96,2-2.74,3.95-5.07,6.44-8.27,2.47-3.49,6.82-9.07,9.86-12.51,1.15-1.3,1.94-2.02,2.36-2.17,2.79-.68-1.19,4.34-1.54,4.82-2.5,3.23-6.77,7.95-9.9,10.15,0,0-6.43,8.25-6.43,8.25,0,.27-.53,.86-.99,.68ZM9.42,12.69c1.77-1.17,8.1-8.82,9.61-11.52,.21-.5-.07-.36-.83,.43-3.17,3.43-5.95,7.47-8.78,11.08Z"
								/>
								<path
									d="M15.6,14.54c.55-.82,1.96-3.25,3.08-2.84,.19,.8-1.39,2.06-1.94,2.72-.15,.16-.35,.3-.23,.52,.29,.63,2.05-.02,2.53-.19,.16-.08,.44-.11,.42,.08-.83,.65-2.76,1.35-3.53,.41-.09-.15-.16-.08-.26,.03-5.27,4.77-5.77,.28-2.06-2.77,.95-.04,.55,.92-.02,1.22-.44,.28-1,.83-1.2,1.29-2.03,3.76,2.09,.61,3.21-.46Z"
								/>
							</svg>
						</NuxtLink>
					</div>

					<div class="flex flex-1 justify-end md:justify-center">
						<HeaderNav />
					</div>

					<div class="flex justify-end md:flex-1">
						<button
							type="button"
							class="mx-3 my-2"
							:aria-label="title"
							:title="title"
							@click="toggle()"
						>
							<Icon
								:name="isDark ? 'octicon:sun-16' : 'octicon:moon-16'"
								class="block h-5 w-5 text-zinc-500 hover:text-purple-500 dark:hover:text-yellow-300"
							/>
						</button>
					</div>
				</div>
			</Container>
		</div>
	</header>
</template>

<script setup lang="ts">
const isDark = useDark();
const toggle = useToggle(isDark);

const title = `Switch to ${isDark ? "light" : "dark"} mode`;
</script>

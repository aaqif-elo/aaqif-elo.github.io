<script lang="ts">
	import HomeImage from './HomeImage.svelte';
	import HomeText from './HomeText.svelte';
	export let homeImage: {
		handleMousemove: (event: MouseEvent, windowHeight: number, windowWidth: number) => void;
	};
</script>

<div class="home-content row">
	<div class="inner-col col" style="max-width: 35%">
		<HomeImage bind:homeImage />
		<!-- <HomeImage /> -->
	</div>
	<div class="inner-col col" style="max-width: 65%">
		<HomeText />
	</div>
</div>

<style>
	.home-content {
		margin: 5% 10%;
	}
</style>

<script context="module" lang="ts">
	import HomeComponent from '$lib/intro/HomeComponent.svelte';

	let windowHeight: number,
		windowWidth: number,
		homeImage: {
			handleMousemove: (event: MouseEvent, windowHeight: number, windowWidth: number) => void;
		},
		handleMousemove = (event: MouseEvent) => {
			homeImage.handleMousemove(event, windowHeight, windowWidth);
		};

	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<svelte:window
	bind:innerHeight={windowHeight}
	bind:innerWidth={windowWidth}
	on:mousemove={handleMousemove}
/>

<section>
	<div class="content">
		<div class="row">
			<div class="col">
				<HomeComponent bind:homeImage />
			</div>
		</div>
	</div>
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap');
	/*Set font family globally*/
	:global(*) {
		font-family: 'Poppins', Helvetica, sans-serif;
		font-style: normal;
		text-align: left;
	}

	/*Page Styles*/
	/* :global(body) {
		background-color: #222;
		position: relative;
		overflow: hidden;
	} */

	/*Responsive Styles*/
	@media screen and (min-width: 991px) {
		.content {
			max-width: 1320px;
			margin: 0 auto;
		}
	}

	/* All content Styles*/
	.content {
		display: flex;
		flex-flow: column;
		flex-wrap: initial;
		position: relative;
	}
	/*Row Styles*/
	:global(.row) {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		align-items: stretch;
		position: relative;
		vertical-align: middle;
		width: 100%;
		min-height: 100%;
		justify-content: center;
		align-items: center;
		margin-right: -15px;
		margin-left: -15px;
	}

	/*Column Styles*/
	:global(.col) {
		display: inline-block;
		flex: 0 0 100%;
		min-height: 1px;
		padding: 15px 0px 15px 0px;
		max-width: 100%;
	}
</style>

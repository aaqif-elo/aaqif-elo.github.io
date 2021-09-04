<script>
	import HomeImage from './components/HomeImage.svelte';
	import HomeText from './components/HomeText.svelte';
	let windowHeight, windowWidth;
	let homeImage;
	function handleMousemove(event) {
		homeImage.handleMousemove(event, windowHeight, windowWidth);
	}
</script>

<div class="content">
	<div class="row">
		<div class="col" style="max-width: 41.6667%">
			<HomeImage bind:homeImage />
		</div>
		<div class="col" style="max-width: 58.3333%">
			<HomeText />
		</div>
	</div>
</div>

<svelte:window
	bind:innerHeight={windowHeight}
	bind:innerWidth={windowWidth}
	on:mousemove={handleMousemove}
/>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap');
	/*Set font family globally*/
	:global(*) {
		font-family: 'Poppins', Helvetica, sans-serif;
		font-style: normal;
		text-align: left;
	}

	/*Page Styles*/
	:global(body) {
		background-color: #222;
		position: relative;
		/* overflow: hidden; */
	}

	/*Responsive Styles*/
	@media screen and (max-width: 684px) {
		/* .home-photo {
			width: 90%;
			padding-bottom: calc(90% - 36px) !important;
			margin: 30px auto !important;
		} */
	}

	/* All content Styles*/
	.content {
		min-height: 100vh;
		padding-bottom: 120px;
		padding: 52px 40px 60px;
		display: flex;
		flex-flow: column;
		flex-wrap: initial;
		position: relative;
	}
	/*Row Styles*/
	.row {
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
		margin: 5% 0;
	}

	/*Column Styles*/
	.col {
		display: inline-block;
		/* flex-direction: row; */
		/* width: 100%; */
		flex: 0 0 41.666667%;
		min-height: 1px;
		padding: 15px 0px 15px 0px;
	}
</style>

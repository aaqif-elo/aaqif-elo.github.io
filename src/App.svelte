<script>
	let windowHeight = 1080,
		windowWidth = 1920;
	var movementStrength = 15;
	var height = movementStrength / windowHeight;
	var width = movementStrength / windowWidth;
	let newValueX = 0,
		newValueY = 0;

	function handleMousemove(event) {
		newValueX = width * (event.clientX - windowWidth / 2) * -1;
		newValueY = height * (event.clientY - windowHeight / 2) * -1;
	}
</script>

<svelte:window
	bind:innerHeight={windowHeight}
	bind:innerWidth={windowWidth}
	on:mousemove={handleMousemove}
/>

<svelte:body class="body" />
<div class="row">
	<div class="col">
		<div class="home-photo">
			<div
				class="home-image"
				style="background-position: calc(50% + {newValueX}px) calc(50% + {newValueY}px);"
			/>
		</div>
	</div>
</div>

<style>
	/*Page Styles*/
	:global(body) {
		background-color: #222;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
	}

	/*Row Styles*/
	.row {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		align-items: stretch;
		position: relative;
	}

	.col {
		position: relative;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		height: auto;
		width: auto;
	}

	.home-photo {
		padding: 8em;
		margin: 2em;
		border-radius: 1000px;
		background-color: #444;
		display: block;
		position: relative;
		overflow: hidden;
		border-color: #444;
		border-style: solid;
		border-width: 1em;
		box-shadow: 0 0 25px 0 rgb(0 0 0 / 80%);
		margin: 30px auto;
	}

	.home-image {
		background-image: url('../assets/aaqif.jpg');
		background-size: cover;
		min-height: 100px;
		min-width: 100px;
		height: auto;
		width: auto;
		background-repeat: no-repeat;
		display: block;
		position: absolute;
		top: -18px;
		bottom: -18px;
		left: -18px;
		right: -18px;
	}

	:global(body) {
		overflow: hidden;
	}
</style>

<script lang="ts">
	export const homeImage = {
		handleMousemove: (event: MouseEvent, windowHeight: number, windowWidth: number) => {
			let movementStrength = 15;
			let height = movementStrength / windowHeight;
			let width = movementStrength / windowWidth;
			newValueX = width * (event.clientX - windowWidth / 2) * -1;
			newValueY = height * (event.clientY - windowHeight / 2) * -1;
		},
	};

	export let newValueX = 0,
		newValueY = 0;
</script>

<div class="home-photo">
	<div
		class="home-image"
		style="background-position: calc(50% + {newValueX}px) calc(50% + {newValueY}px);"
	/>
</div>

<style>
	/*Responsive Styles*/
	@media screen and (max-width: 684px) {
		/* .home-photo {
			width: 90%;
			padding-bottom: calc(90% - 36px) !important;
			margin: 30px auto !important;
		} */
	}

	/*Photo Container Div*/
	.home-photo {
		/* padding: 8em; */
		padding-bottom: calc(100% - 36px);
		border-radius: 50%;
		background-color: #444;
		display: block;
		position: relative;
		overflow: hidden;
		border-color: #444;
		border-style: solid;
		border-width: 1em;
		box-shadow: 0 0 25px 0 rgb(0 0 0 / 80%);
		/* margin: 30px auto; */
	}

	/* <source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" /> */

	/*Image Div*/
	.home-image {
		background-image: url('aaqif.jpg');
		background-size: cover;
		min-height: 225px;
		min-width: 225px;
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
</style>

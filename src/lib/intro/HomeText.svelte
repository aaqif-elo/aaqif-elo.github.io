<div class="home-text pl-10">
	<!-- Labels for different project categories. TODO: Add onclick navigate to relevant projects -->
	<div class="labels flex flex-row">
		<h4>Fullstack Enginner</h4>
		<h4 class="divider mobile:hidden">|</h4>
		<h4>Mobile Developer</h4>
	</div>
	<h1 class="text-left text-5xl text-neutral-100 font-semibold leading-[56px] mt-0 mb-5">
		Aaqif Muhtasim
	</h1>
	<p class=" text-sm leading-7 font-normal text-text-slate-350">
		Don't have a lot to write here yet... Will think about something later. The style might be
		modified based on the size of the content.
	</p>
	<div class="mt-7">
		<a href="/" target="_blank">Resume</a>
		<a href="/" target="_self">Email</a>
	</div>
</div>

<style>
	/*TODO: Convert all single use response css to tailwind classes */
	/*Responsive Styles*/
	@media screen and (max-width: 930px) {
		/* h1,
		.labels,
		p {
			text-align: center;
			margin: auto;
		} */

		.labels {
			flex-direction: column !important;
		}

		.home-buttons {
			text-align: center;
		}
	}

	h4 {
		font-size: 16px;
		color: #aaa;
		font-weight: 300;
		margin-bottom: 10px;
		margin-top: 10px;
		float: left;
		padding-inline-end: 1em;
	}

	a {
		color: #fff;
		background-color: #333;
		box-shadow: 0 10px 10px -8px rgb(0 0 0 / 78%);
		outline: 0;
		font-weight: 400;
		text-align: center;
		white-space: nowrap;
		vertical-align: middle;
		border-radius: 30px;
		border: 2px solid;
		border-color: #007ced;
		display: inline-block;
		position: relative;
		padding: 0.8em 2.1em;
		margin-bottom: 0.75em;
		margin-right: 0.25em;
		text-decoration: none;
		font-size: 14px;
		line-height: 1.2;
		text-shadow: none;
		box-sizing: border-box;
	}
</style>

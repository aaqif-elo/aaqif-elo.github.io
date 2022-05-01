<script lang="ts">
	import { page } from '$app/stores';
</script>

<header class="flex justify-between">
	<div class="">
		<a href="/">
			<div
				class="float-left w-11 h-11 leading-[44px] rounded-full text-center text-white text-[28px] font-extrabold bg-bg-blue-550 mr-2 mt-1"
			>
				A
			</div>
			<div class="float-left leading-[50px] text-xl text-white">
				<span class="font-semibold">Aaqif</span> Muhtasim
			</div>
		</a>
	</div>

	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
			<li class:active={$page.url.pathname === '/todos'}>
				<a sveltekit:prefetch href="/todos">Todos</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	/* nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	} */

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	/* li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	} */

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--hoverable-text-color);
		opacity: 0.55;
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		opacity: 1;
		transition-duration: 1s;
		transition-property: opacity;
	}

	a:not(:hover) {
		opacity: 0.55;
		transition-duration: 1s;
		transition-property: opacity;
	}
</style>

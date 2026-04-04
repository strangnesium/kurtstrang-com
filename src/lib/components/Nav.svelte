<script lang="ts">
	import { afterNavigate } from '$app/navigation';

	export let path: string = '';

	let menuOpen = false;

	afterNavigate(() => {
		menuOpen = false;
	});

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') menuOpen = false;
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<nav class="nav" aria-label="Site">
	<div class="nav-row">
		<span class="nav-path">
			<a href="/" class="nav-home">C:\Kurt\</a>{#if path}<span class="nav-current">{path}</span>{/if}
		</span>
		<button
			type="button"
			class="nav-toggle"
			aria-expanded={menuOpen}
			aria-controls="site-nav-links"
			aria-label={menuOpen ? 'Close menu' : 'Open menu'}
			on:click={toggleMenu}
		>
			<span class="nav-toggle-bars" aria-hidden="true">
				<span class:nav-toggle-bar-open={menuOpen}></span>
				<span class:nav-toggle-bar-open={menuOpen}></span>
				<span class:nav-toggle-bar-open={menuOpen}></span>
			</span>
		</button>
		<div id="site-nav-links" class="nav-links" class:nav-links-open={menuOpen}>
			<a href="/projects" on:click={() => (menuOpen = false)}>projects</a>
			<a href="/writings" on:click={() => (menuOpen = false)}>my writings</a>
			<a href="/contact" on:click={() => (menuOpen = false)}>contact</a>
		</div>
	</div>
</nav>

<style>
	.nav {
		padding-bottom: var(--spacing-lg);
		border-bottom: 1px solid var(--color-border);
		margin-bottom: var(--spacing-2xl);
	}

	.nav-row {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: var(--spacing-md);
		width: 100%;
	}

	.nav-path {
		font-size: 13px;
		letter-spacing: 0.5px;
		min-width: 0;
		flex: 1;
	}

	.nav-home {
		color: var(--color-text-muted);
		text-decoration: none;
		transition: color 0.15s;
	}

	.nav-home:hover {
		color: var(--mint-leaf);
	}

	.nav-current {
		color: var(--deep-sky-blue);
	}

	.nav-toggle {
		display: none;
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		padding: 0;
		border: 1px solid var(--color-border);
		border-radius: 2px;
		background: var(--color-surface);
		color: inherit;
		cursor: pointer;
		transition:
			border-color 0.15s,
			background 0.15s;
	}

	.nav-toggle:hover {
		border-color: var(--color-border-strong);
		background: var(--color-navy-light);
	}

	.nav-toggle:focus-visible {
		outline: 2px solid var(--deep-sky-blue);
		outline-offset: 2px;
	}

	.nav-toggle-bars {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 5px;
		width: 18px;
		height: 14px;
	}

	.nav-toggle-bars span {
		display: block;
		height: 2px;
		background: var(--color-text-muted);
		border-radius: 1px;
		transition:
			transform 0.2s ease,
			opacity 0.2s ease;
		transform-origin: center;
	}

	.nav-toggle-bar-open:nth-child(1) {
		transform: translateY(7px) rotate(45deg);
	}

	.nav-toggle-bar-open:nth-child(2) {
		opacity: 0;
	}

	.nav-toggle-bar-open:nth-child(3) {
		transform: translateY(-7px) rotate(-45deg);
	}

	.nav-links {
		display: flex;
		flex-direction: row;
		gap: var(--spacing-md);
	}

	.nav-links a {
		font-size: 14px;
		text-decoration: none;
		color: var(--color-text-muted);
		padding: 2px 0;
		border-bottom: 1px solid transparent;
	}

	.nav-links a:hover {
		color: var(--deep-sky-blue);
		border-bottom-color: var(--deep-sky-blue);
	}

	@media (max-width: 640px) {
		.nav-toggle {
			display: flex;
		}

		.nav-links {
			display: none;
			flex-direction: column;
			flex-basis: 100%;
			width: 100%;
			gap: var(--spacing-sm);
			padding-top: var(--spacing-md);
			margin-top: 0;
			border-top: 1px solid var(--color-border);
		}

		.nav-links-open {
			display: flex;
		}

		.nav-links a {
			padding: var(--spacing-sm) 0;
			font-size: 15px;
		}
	}

	@media (min-width: 641px) {
		.nav-row {
			flex-wrap: nowrap;
		}

		.nav-path {
			flex: 0 1 auto;
		}

		.nav-links {
			flex-shrink: 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.nav-toggle-bars span {
			transition: none;
		}
	}
</style>

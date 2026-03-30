<script lang="ts">
	export let path: string = '';
</script>

<nav class="nav">
	<span class="nav-path">
		<a href="/" class="nav-home">C:\Kurt\</a>{#if path}<span class="nav-current">{path}</span>{/if}
	</span>
	<div class="nav-links">
		<a href="/projects">projects</a>
		<a href="/writings">my writings</a>
		<a href="/contact">contact</a>
	</div>
</nav>

<style>
	.nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-bottom: var(--spacing-lg);
		border-bottom: 1px solid var(--color-border);
		margin-bottom: var(--spacing-2xl);
	}

	.nav-path {
		font-size: 13px;
		letter-spacing: 0.5px;
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
		color: var(--color-text-muted);
		opacity: 0.6;
	}

	.nav-links {
		display: flex;
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
</style>

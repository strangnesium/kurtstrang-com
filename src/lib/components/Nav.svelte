<script lang="ts">
	export let path: string = '';
</script>

<nav class="nav">
	<a href="/" class="nav-path">C:\Kurt\{path}</a>
	<div class="nav-links">
		<a href="/projects">projects</a>
		<a href="/about">about</a>
		<a href="/blog">blog</a>
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
		color: var(--color-text-muted);
		letter-spacing: 0.5px;
		text-decoration: none;
	}

	.nav-path:hover {
		color: var(--color-teal);
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
		color: var(--color-teal);
		border-bottom-color: var(--color-teal);
	}
</style>

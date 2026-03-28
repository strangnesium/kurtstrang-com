<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title} — Kurt Strang</title>
	<meta name="description" content={data.meta.description} />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:type" content="article" />
</svelte:head>

<div class="page">
	<Nav path="Blog\" />

	<article>
		<header class="post-header">
			<div class="retro-title-bar">{data.meta.title}</div>
			<div class="post-header-body">
				<h1>{data.meta.title}</h1>
				<time datetime={data.meta.date}>
					{new Date(data.meta.date).toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					})}
				</time>
			</div>
		</header>

		<div class="prose">
			<svelte:component this={data.content} />
		</div>
	</article>

	<div class="post-footer-nav">
		<a href="/blog" class="back-link">← all posts</a>
	</div>

	<Footer />
</div>

<style>
	.page {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: var(--spacing-lg) var(--spacing-md) var(--spacing-xl);
	}

	/* Post header with retro title bar accent */
	.post-header {
		margin-bottom: var(--spacing-xl);
		border: 1px solid var(--color-border);
		background: var(--color-surface);
		overflow: hidden;
	}

	.post-header-body {
		padding: var(--spacing-lg);
	}

	.post-header h1 {
		font-size: 26px;
		font-weight: 700;
		line-height: 1.2;
		margin-bottom: var(--spacing-sm);
	}

	.post-header time {
		font-size: 13px;
		color: var(--color-text-muted);
	}

	/* Prose */
	.prose {
		font-size: 15px;
		line-height: 1.8;
		color: var(--color-text);
	}

	.prose :global(h2) {
		font-size: 20px;
		font-weight: 700;
		margin: var(--spacing-xl) 0 var(--spacing-md);
	}

	.prose :global(h3) {
		font-size: 17px;
		font-weight: 700;
		margin: var(--spacing-lg) 0 var(--spacing-sm);
	}

	.prose :global(p) {
		margin: 0 0 var(--spacing-md);
	}

	.prose :global(ul),
	.prose :global(ol) {
		margin: 0 0 var(--spacing-md);
		padding-left: 24px;
	}

	.prose :global(li) {
		margin-bottom: var(--spacing-xs);
	}

	.prose :global(blockquote) {
		border-left: 3px solid var(--color-teal);
		padding: var(--spacing-sm) var(--spacing-md);
		margin: 0 0 var(--spacing-md);
		color: var(--color-text-muted);
		font-style: italic;
		background: var(--color-teal-light);
	}

	.prose :global(code) {
		font-family: var(--font-mono);
		font-size: 14px;
		background: var(--color-bg);
		padding: 1px 5px;
		border: 1px solid var(--color-border);
	}

	.prose :global(pre) {
		background: var(--color-code-bg);
		color: #d4d4d4;
		padding: var(--spacing-md);
		margin: 0 0 var(--spacing-md);
		overflow-x: auto;
		font-size: 14px;
		line-height: 1.6;
		border: 1px solid var(--color-border);
	}

	.prose :global(pre code) {
		background: none;
		border: none;
		padding: 0;
		color: inherit;
	}

	.prose :global(img) {
		border: 1px solid var(--color-border);
		margin: var(--spacing-sm) 0;
	}

	.prose :global(a) {
		color: var(--color-link);
	}

	.prose :global(a:hover) {
		color: var(--color-link-hover);
	}

	.prose :global(hr) {
		border: none;
		border-top: 1px solid var(--color-border);
		margin: var(--spacing-xl) 0;
	}

	/* Footer nav */
	.post-footer-nav {
		margin-top: var(--spacing-xl);
		margin-bottom: var(--spacing-2xl);
	}

	.back-link {
		font-size: 14px;
		color: var(--color-text-muted);
		text-decoration: none;
	}

	.back-link:hover {
		color: var(--color-teal);
	}
</style>

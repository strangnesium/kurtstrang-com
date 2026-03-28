<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	export let data;
</script>

<svelte:head>
	<title>Blog — Kurt Strang</title>
	<meta name="description" content="Writings by Kurt Strang on building, making, and the internet." />
</svelte:head>

<div class="page">
	<Nav path="Blog\" />

	<header class="page-header">
		<h1>Blog</h1>
		<p>Occasional writing on building things, side projects, and the internet.</p>
	</header>

	{#if data.posts.length === 0}
		<p class="empty-state">No posts yet. Check back soon.</p>
	{:else}
		<div class="post-list">
			{#each data.posts as post}
				<a href="/blog/{post.slug}" class="post-item">
					<div class="post-meta">
						<time datetime={post.date}>
							{new Date(post.date).toLocaleDateString('en-US', {
								year: 'numeric',
								month: 'short',
								day: 'numeric'
							})}
						</time>
					</div>
					<div class="post-info">
						<span class="post-title">{post.title}</span>
						{#if post.description}
							<span class="post-desc">{post.description}</span>
						{/if}
					</div>
				</a>
			{/each}
		</div>
	{/if}

	<Footer />
</div>

<style>
	.page {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: var(--spacing-lg) var(--spacing-md) var(--spacing-xl);
	}

	.page-header {
		margin-bottom: var(--spacing-xl);
	}

	.page-header h1 {
		font-size: 28px;
		font-weight: 700;
		margin-bottom: var(--spacing-sm);
	}

	.page-header p {
		font-size: 14px;
		color: var(--color-text-muted);
	}

	.empty-state {
		color: var(--color-text-muted);
		padding: var(--spacing-xl) 0;
	}

	.post-list {
		display: flex;
		flex-direction: column;
		margin-bottom: var(--spacing-2xl);
	}

	.post-item {
		display: flex;
		gap: var(--spacing-lg);
		padding: var(--spacing-md) 0;
		border-bottom: 1px solid var(--color-border);
		text-decoration: none;
		color: var(--color-text);
		transition: color 0.15s;
	}

	.post-item:first-child {
		border-top: 1px solid var(--color-border);
	}

	.post-item:hover {
		color: var(--color-teal);
	}

	.post-item:hover .post-title {
		color: var(--color-teal);
	}

	.post-meta {
		flex-shrink: 0;
		width: 100px;
	}

	.post-meta time {
		font-size: 13px;
		color: var(--color-text-muted);
		white-space: nowrap;
	}

	.post-info {
		display: flex;
		flex-direction: column;
		gap: 2px;
		min-width: 0;
	}

	.post-title {
		font-weight: 700;
		font-size: 15px;
		transition: color 0.15s;
	}

	.post-desc {
		font-size: 14px;
		color: var(--color-text-muted);
	}

	@media (max-width: 600px) {
		.post-item {
			flex-direction: column;
			gap: var(--spacing-xs);
		}

		.post-meta {
			width: auto;
		}
	}
</style>

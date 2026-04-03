<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { projects } from '$lib/data/projects';
</script>

<svelte:head>
	<title>Projects — Kurt Strang</title>
	<meta name="description" content="Side projects and things I'm building." />
</svelte:head>

<div class="page">
	<Nav path="Projects\" />

	<header class="page-header">
		<h1>Projects</h1>
		<p>Things I'm building and have built. All side projects, all shipped.</p>
	</header>

	<div class="project-list">
		{#each projects as project}
			<div class="project-detail" class:featured={project.featured}>
				<div class="project-header">
					<div class="project-title-row">
						<h2>
							{#if project.featured}<span class="featured-tag">featured</span>{/if}
							{project.name}
						</h2>
						{#if project.period || project.status}
							<div class="project-meta">
								{#if project.period}
									<span class="project-period">{project.period}</span>
								{/if}
								{#if project.status}
									<span class="project-status">{project.status}</span>
								{/if}
							</div>
						{/if}
					</div>
					<p class="project-tagline">{project.description}</p>
				</div>

				{#if project.longDescription}
					<p class="project-body">{project.longDescription}</p>
				{/if}

			<a
				href={project.url}
				target={project.internal ? undefined : '_blank'}
				rel={project.internal ? undefined : 'noopener noreferrer'}
				class="project-visit"
			>
				{project.internal ? 'open' : 'visit'} {project.name} →
			</a>
			</div>
		{/each}
	</div>

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

	.project-list {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-lg);
		margin-bottom: var(--spacing-2xl);
	}

	.project-detail {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		padding: var(--spacing-lg);
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
	}

	.project-detail.featured {
		border-left: 3px solid var(--color-teal);
	}

	.project-header {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xs);
	}

	.project-title-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--spacing-md);
		flex-wrap: wrap;
	}

	.project-title-row h2 {
		font-size: 18px;
		font-weight: 700;
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);
	}

	.featured-tag {
		font-size: 10px;
		text-transform: uppercase;
		letter-spacing: 1px;
		color: var(--color-teal);
		background: var(--color-teal-light);
		padding: 1px 6px;
		font-weight: 600;
	}

	.project-meta {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: var(--spacing-xs);
		justify-content: flex-end;
	}

	.project-period {
		display: inline-block;
		padding: 3px 10px;
		border-radius: 100px;
		font-size: 11px;
		font-weight: 600;
		letter-spacing: 0.02em;
		color: var(--color-text-muted);
		background: var(--color-navy-light);
		border: 1px solid var(--color-border);
	}

	.project-status {
		font-size: 11px;
		text-transform: uppercase;
		letter-spacing: 1px;
		color: var(--color-teal);
		font-weight: 600;
	}

	.project-tagline {
		font-size: 14px;
		color: var(--color-text-muted);
		font-weight: 500;
	}

	.project-body {
		font-size: 15px;
		line-height: 1.7;
		color: var(--color-text);
	}

	.project-visit {
		font-size: 14px;
		color: var(--color-teal);
		text-decoration: none;
		align-self: flex-start;
		border-bottom: 1px solid transparent;
	}

	.project-visit:hover {
		border-bottom-color: var(--color-teal);
	}

	@media (max-width: 600px) {
		.project-title-row {
			flex-direction: column;
			align-items: flex-start;
			gap: var(--spacing-xs);
		}

		.project-meta {
			justify-content: flex-start;
		}
	}
</style>

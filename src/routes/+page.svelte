<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { profile } from '$lib/data/profile';
	import { projects } from '$lib/data/projects';

	export let data;

	$: featuredProject = projects.find((p) => p.featured);
	$: otherProjects = projects.filter((p) => !p.featured);
</script>

<svelte:head>
	<title>Kurt Strang</title>
	<meta name="description" content="Kurt Strang — builder, maker, and internet tinkerer." />
	<meta property="og:title" content="Kurt Strang" />
	<meta property="og:description" content="Builder, maker, and internet tinkerer." />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="page">
	<Nav />

	<header class="hero">
		<h1>{profile.name}</h1>
		<p class="tagline">{profile.title}</p>
	</header>

	<section class="status-card">
		<div class="status-row">
			<span class="status-label">currently</span>
			<span class="status-value">{profile.status.role} at {profile.status.company}</span>
		</div>
		<div class="status-row">
			<span class="status-label">since</span>
			<span class="status-value">{profile.status.since}</span>
		</div>
		<div class="status-row">
			<span class="status-label">based in</span>
			<span class="status-value">{profile.status.location}</span>
		</div>
		<p class="status-blurb">{profile.status.blurb}</p>
	</section>

	{#if data.latestPost}
		<section class="section">
			<h2 class="section-heading">
				<span class="heading-icon">~/</span>latest writing
			</h2>
			<a href="/blog/{data.latestPost.slug}" class="latest-post">
				<span class="retro-title-bar">new post</span>
				<div class="latest-post-body">
					<div>
						<span class="latest-post-title">{data.latestPost.title}</span>
						{#if data.latestPost.description}
							<span class="latest-post-desc">{data.latestPost.description}</span>
						{/if}
					</div>
					<span class="latest-post-arrow">read →</span>
				</div>
			</a>
			<a href="/blog" class="section-link">all posts →</a>
		</section>
	{/if}

	<section class="section">
		<h2 class="section-heading">
			<span class="heading-icon">~/</span>projects
		</h2>
		{#if featuredProject}
			<a
				href={featuredProject.url}
				target="_blank"
				rel="noopener noreferrer"
				class="project-card featured"
			>
				<div class="project-card-inner">
					<span class="project-name">
						<span class="featured-tag">featured</span>
						{featuredProject.name}
					</span>
					<span class="project-desc">{featuredProject.description}</span>
					<span class="project-link">visit →</span>
				</div>
			</a>
		{/if}
		{#each otherProjects as project}
			<a
				href={project.url}
				target="_blank"
				rel="noopener noreferrer"
				class="project-card"
			>
				<div class="project-card-inner">
					<span class="project-name">{project.name}</span>
					<span class="project-desc">{project.description}</span>
					<span class="project-link">visit →</span>
				</div>
			</a>
		{/each}
		<a href="/projects" class="section-link">all projects →</a>
	</section>

	<Footer />
</div>

<style>
	.page {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: var(--spacing-lg) var(--spacing-md) var(--spacing-xl);
	}

	/* Hero */
	.hero {
		margin-bottom: var(--spacing-xl);
	}

	.hero h1 {
		font-size: 36px;
		font-weight: 700;
		line-height: 1.1;
		margin-bottom: var(--spacing-sm);
		letter-spacing: -0.5px;
	}

	.tagline {
		font-size: 18px;
		color: var(--color-teal);
		font-weight: 500;
	}

	/* Status card */
	.status-card {
		margin-bottom: var(--spacing-2xl);
		padding: var(--spacing-lg);
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		display: flex;
		flex-direction: column;
		gap: var(--spacing-sm);
	}

	.status-row {
		display: flex;
		align-items: baseline;
		gap: var(--spacing-md);
	}

	.status-label {
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 1px;
		color: var(--color-text-muted);
		min-width: 80px;
		flex-shrink: 0;
		font-weight: 600;
	}

	.status-value {
		font-size: 15px;
		color: var(--color-text);
	}

	.status-blurb {
		font-size: 14px;
		color: var(--color-text-muted);
		line-height: 1.6;
		margin-top: var(--spacing-sm);
		padding-top: var(--spacing-sm);
		border-top: 1px solid var(--color-border);
	}

	/* Sections */
	.section {
		margin-bottom: var(--spacing-2xl);
	}

	.section-heading {
		font-size: 14px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 1.5px;
		color: var(--color-text-muted);
		margin-bottom: var(--spacing-lg);
		display: flex;
		align-items: center;
		gap: 2px;
	}

	.heading-icon {
		color: var(--color-teal);
	}

	.section-link {
		display: inline-block;
		margin-top: var(--spacing-md);
		font-size: 14px;
		color: var(--color-teal);
		text-decoration: none;
		border-bottom: 1px solid transparent;
	}

	.section-link:hover {
		border-bottom-color: var(--color-teal);
	}

	/* Latest post */
	.latest-post {
		display: block;
		text-decoration: none;
		color: var(--color-text);
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		overflow: hidden;
		transition: border-color 0.15s, box-shadow 0.15s;
	}

	.latest-post:hover {
		border-color: var(--color-navy);
		box-shadow: 0 2px 8px rgba(0, 0, 128, 0.08);
		color: var(--color-text);
	}

	.latest-post .retro-title-bar {
		font-size: 11px;
		text-transform: uppercase;
		letter-spacing: 1px;
		padding: 3px 8px;
	}

	.latest-post-body {
		padding: var(--spacing-md) var(--spacing-lg);
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--spacing-md);
	}

	.latest-post-title {
		font-weight: 700;
		font-size: 15px;
		display: block;
	}

	.latest-post-desc {
		font-size: 13px;
		color: var(--color-text-muted);
		display: block;
		margin-top: 2px;
	}

	.latest-post-arrow {
		font-size: 13px;
		color: var(--color-navy);
		white-space: nowrap;
		flex-shrink: 0;
	}

	/* Projects */
	.project-card {
		display: block;
		text-decoration: none;
		color: var(--color-text);
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		transition: border-color 0.15s, box-shadow 0.15s;
		margin-bottom: var(--spacing-sm);
	}

	.project-card:hover {
		border-color: var(--color-teal);
		box-shadow: 0 2px 8px rgba(0, 128, 128, 0.08);
		color: var(--color-text);
	}

	.project-card.featured {
		border-left: 3px solid var(--color-teal);
	}

	.project-card-inner {
		padding: var(--spacing-md) var(--spacing-lg);
		display: flex;
		align-items: baseline;
		gap: var(--spacing-md);
		flex-wrap: wrap;
	}

	.project-name {
		font-weight: 700;
		font-size: 15px;
		white-space: nowrap;
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

	.project-desc {
		flex: 1;
		font-size: 14px;
		color: var(--color-text-muted);
		min-width: 0;
	}

	.project-link {
		font-size: 13px;
		color: var(--color-teal);
		white-space: nowrap;
		opacity: 0;
		transition: opacity 0.15s;
	}

	.project-card:hover .project-link {
		opacity: 1;
	}

	@media (max-width: 600px) {
		.hero h1 {
			font-size: 28px;
		}

		.status-row {
			flex-direction: column;
			gap: 0;
		}

		.project-card-inner {
			flex-direction: column;
			gap: var(--spacing-xs);
			padding: var(--spacing-md);
		}

		.project-link {
			opacity: 1;
		}
	}
</style>

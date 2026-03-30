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
	<meta name="description" content="Kurt Strang — I build web things." />
	<meta property="og:title" content="Kurt Strang" />
	<meta property="og:description" content="I build web things." />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="page">
	<Nav />

	<header class="hero">
		<div class="hero-identity">
			<h1 class="hero-name">{profile.name}</h1>
			<p class="tagline">{profile.title}</p>
			<div class="hero-meta">
				<span class="meta-item">
					<span class="meta-label">currently</span>
					<span class="meta-value">{profile.status.role} at {profile.status.company}</span>
				</span>
				<span class="meta-sep">·</span>
				<span class="meta-item">
					<span class="meta-label">since</span>
					<span class="meta-value">{profile.status.since}</span>
				</span>
				<span class="meta-sep">·</span>
				<span class="meta-item">
					<span class="meta-label">based in</span>
					<span class="meta-value">{profile.status.location}</span>
				</span>
				<span class="meta-sep">·</span>
				<span class="meta-item">
					<span class="meta-label">from</span>
					<span class="meta-value">{profile.origin}</span>
				</span>
			</div>
		</div>

		<figure class="hero-photo">
			<img
				src="/kurt-photo-full-screen.png"
				alt="Kurt Strang"
				class="hero-photo-img"
			/>
		</figure>
	</header>

	<section class="intro-blurb">
		<p>{profile.bio}</p>
	</section>

	{#if data.latestPost}
		<section class="section">
			<h2 class="section-heading">
				<span class="heading-icon">~/</span>my writings
			</h2>
			<a href="/writings/{data.latestPost.slug}" class="latest-post">
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
			<a href="/writings" class="section-link">all writings →</a>
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

	.hero-identity {
		padding: var(--spacing-lg) 0 var(--spacing-lg);
		border-left: 3px solid var(--pine-teal);
		padding-left: var(--spacing-md);
		margin-bottom: var(--spacing-lg);
	}

	.hero-name {
		font-size: 40px;
		font-weight: 700;
		line-height: 1.05;
		margin-bottom: var(--spacing-xs);
		letter-spacing: -1px;
		color: var(--pine-teal);
	}

	.tagline {
		font-size: 20px;
		color: var(--deep-sky-blue);
		font-weight: 600;
		margin-bottom: var(--spacing-md);
		letter-spacing: -0.3px;
	}

	.hero-meta {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 6px var(--spacing-sm);
		font-size: 13px;
	}

	.meta-item {
		display: inline-flex;
		align-items: baseline;
		gap: 5px;
	}

	.meta-label {
		font-size: 10px;
		text-transform: uppercase;
		letter-spacing: 1px;
		color: var(--mint-leaf);
		font-weight: 700;
		flex-shrink: 0;
	}

	.meta-value {
		color: var(--color-text);
		font-size: 13px;
	}

	.meta-sep {
		color: var(--color-border-strong);
		font-size: 12px;
		line-height: 1;
	}

	.hero-photo {
		margin: 0;
		padding: 0;
		width: 60vw;
		max-width: 100%;
	}

	.hero-photo-img {
		display: block;
		width: 100%;
		height: auto;
		border: 1px solid var(--color-border);
	}

	/* Intro blurb */
	.intro-blurb {
		margin-bottom: var(--spacing-2xl);
		padding: var(--spacing-lg) 0;
		border-top: 1px solid var(--color-border);
	}

	.intro-blurb p {
		font-size: 15px;
		line-height: 1.75;
		color: var(--color-text-muted);
		max-width: 560px;
	}

	/* Sections */
	.section {
		margin-bottom: var(--spacing-2xl);
	}

	.section-heading {
		font-size: 13px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 2px;
		color: var(--color-text-muted);
		margin-bottom: var(--spacing-lg);
		display: flex;
		align-items: center;
		gap: 2px;
	}

	.heading-icon {
		color: var(--deep-sky-blue);
	}

	.section-link {
		display: inline-block;
		margin-top: var(--spacing-md);
		font-size: 14px;
		color: var(--pine-teal);
		text-decoration: none;
		border-bottom: 1px solid transparent;
		transition: color 0.15s, border-color 0.15s;
	}

	.section-link:hover {
		color: var(--mint-leaf);
		border-bottom-color: var(--mint-leaf);
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
		border-color: var(--pine-teal);
		box-shadow: 0 2px 10px rgba(20, 69, 61, 0.1);
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
		color: var(--pine-teal);
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
		border-color: var(--deep-sky-blue);
		box-shadow: 0 2px 10px rgba(72, 190, 255, 0.12);
		color: var(--color-text);
	}

	.project-card.featured {
		border-left: 3px solid var(--pine-teal);
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
		color: var(--pine-teal);
		background: rgba(20, 69, 61, 0.08);
		padding: 1px 6px;
		font-weight: 700;
	}

	.project-desc {
		flex: 1;
		font-size: 14px;
		color: var(--color-text-muted);
		min-width: 0;
	}

	.project-link {
		font-size: 13px;
		color: var(--mint-leaf);
		white-space: nowrap;
		opacity: 0;
		transition: opacity 0.15s;
	}

	.project-card:hover .project-link {
		opacity: 1;
	}

	@media (max-width: 600px) {
		.hero-name {
			font-size: 30px;
		}

		.tagline {
			font-size: 17px;
		}

		.hero-meta {
			flex-direction: column;
			gap: var(--spacing-xs);
		}

		.meta-sep {
			display: none;
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

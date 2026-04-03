<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { profile } from '$lib/data/profile';
	import { projects } from '$lib/data/projects';
	import { siteOrigin } from '$lib/site';

	export let data;

	$: featuredProject = projects.find((p) => p.featured);
	$: otherProjects = projects.filter((p) => !p.featured);

	const homeDescription = `Kurt Strang — builds and optimises websites. ${profile.status.role} at ${profile.status.company}, based in ${profile.status.location}. Projects, writings, and contact.`;

	$: structuredData = JSON.stringify({
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebSite',
				'@id': `${siteOrigin}/#website`,
				url: `${siteOrigin}/`,
				name: 'Kurt Strang',
				description: homeDescription,
				publisher: { '@id': `${siteOrigin}/#person` }
			},
			{
				'@type': 'Person',
				'@id': `${siteOrigin}/#person`,
				name: profile.name,
				url: `${siteOrigin}/`,
				jobTitle: profile.status.role,
				worksFor: {
					'@type': 'Organization',
					name: profile.status.company,
					url: profile.status.companyUrl
				},
				sameAs: [profile.links.linkedin],
				nationality: { '@type': 'Country', name: profile.origin },
				homeLocation: { '@type': 'Place', name: profile.status.location }
			}
		]
	});
</script>

<svelte:head>
	<title>Kurt Strang</title>
	<meta name="description" content={homeDescription} />
	<meta property="og:title" content="Kurt Strang" />
	<meta property="og:description" content={homeDescription} />
	<meta property="og:type" content="website" />
	<meta name="twitter:title" content="Kurt Strang" />
	<meta name="twitter:description" content={homeDescription} />
	{@html `<script type="application/ld+json">${structuredData.replace(/</g, '\\u003c')}</script>`}
</svelte:head>

<div class="page">
	<Nav />

	<header class="hero">
		<div class="hero-text">
			<h1 class="hero-name">{profile.name}</h1>
			<p class="tagline">{profile.title}</p>
			<div class="hero-pills">
				<div class="hero-fact">
					<span class="fact-label">Currently:</span>
					<a
						href={profile.status.companyUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="pill pill-link"
					>
						At {profile.status.company}
					</a>
				</div>
				<div class="hero-fact">
					<span class="fact-label">Doing:</span>
					<span class="pill">{profile.status.role}</span>
				</div>
				<div class="hero-fact">
					<span class="fact-label">Since:</span>
					<span class="pill">{profile.status.since}</span>
				</div>
				<div class="hero-fact">
					<span class="fact-label">Based in:</span>
					<span class="pill">{profile.status.location}</span>
				</div>
				<div class="hero-fact">
					<span class="fact-label">From:</span>
					<span class="pill">{profile.origin}</span>
				</div>
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
					<div class="project-card-header">
						<span class="project-name">
							<span class="featured-tag">featured</span>
							{featuredProject.name}
							{#if featuredProject.period}<span class="pill project-period-inline">{featuredProject.period}</span>{/if}
						</span>
						<span class="project-link">visit →</span>
					</div>
					<p class="project-desc">{featuredProject.description}</p>
				</div>
			</a>
		{/if}
		{#each otherProjects as project}
			<a
				href={project.url}
				target={project.internal ? undefined : '_blank'}
				rel={project.internal ? undefined : 'noopener noreferrer'}
				class="project-card"
			>
				<div class="project-card-inner">
					<div class="project-card-header">
						<span class="project-name">
							{project.name}
							{#if project.period}<span class="pill project-period-inline">{project.period}</span>{/if}
						</span>
						<span class="project-link">{project.internal ? 'open' : 'visit'} →</span>
					</div>
					<p class="project-desc">{project.description}</p>
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
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--spacing-lg);
		align-items: center;
		margin-bottom: var(--spacing-xl);
	}

	.hero-text {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-sm);
		min-width: 0;
	}

	.hero-name {
		font-size: 40px;
		font-weight: 700;
		line-height: 1.05;
		letter-spacing: -1px;
		color: var(--pine-teal);
	}

	.tagline {
		font-size: 20px;
		color: var(--deep-sky-blue);
		font-weight: 600;
		letter-spacing: -0.3px;
		margin-bottom: var(--spacing-xs);
	}

	.hero-pills {
		display: grid;
		grid-template-columns: max-content minmax(0, 1fr);
		row-gap: var(--spacing-xs);
		column-gap: 8px;
		align-items: center;
		justify-items: start;
	}

	.hero-fact {
		display: contents;
	}

	.fact-label {
		justify-self: start;
		flex-shrink: 0;
		font-size: 12px;
		font-weight: 600;
		color: var(--pine-teal);
		white-space: nowrap;
	}

	.pill {
		box-sizing: border-box;
		display: inline-block;
		width: fit-content;
		max-width: 100%;
		padding: 4px 12px;
		background: var(--color-navy-light);
		border: 1px solid var(--color-border);
		border-radius: 100px;
		font-size: 12px;
		line-height: 1.5;
		color: var(--color-text);
		white-space: nowrap;
		overflow-wrap: normal;
	}

	.pill-link {
		text-decoration: none;
		color: var(--color-text);
		transition: border-color 0.15s, background-color 0.15s, color 0.15s;
	}

	.pill-link:hover {
		border-color: var(--pine-teal);
		background: rgba(20, 69, 61, 0.06);
		color: var(--pine-teal);
	}

	.hero-photo {
		margin: 0;
		padding: 0;
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
		flex-direction: column;
		gap: var(--spacing-sm);
	}

	.project-card-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--spacing-md);
		flex-wrap: wrap;
	}

	.project-name {
		font-weight: 700;
		font-size: 15px;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: var(--spacing-sm);
		min-width: 0;
	}

	.project-period-inline {
		font-weight: 600;
		color: var(--color-text-muted);
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
		margin: 0;
		font-size: 14px;
		line-height: 1.5;
		color: var(--color-text-muted);
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
		.hero {
			grid-template-columns: 1fr;
			gap: var(--spacing-md);
		}

		.hero-text {
			order: 1;
		}

		.hero-photo {
			order: 2;
		}

		.hero-name {
			font-size: 30px;
		}

		.tagline {
			font-size: 17px;
		}

		.fact-label {
			font-size: 11px;
		}

		.pill {
			font-size: 11px;
			padding: 3px 10px;
		}

		.project-card-inner {
			padding: var(--spacing-md);
		}

		.project-link {
			opacity: 1;
		}
	}
</style>

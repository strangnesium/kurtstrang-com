<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { profile } from '$lib/data/profile';
</script>

<svelte:head>
	<title>About — Kurt Strang</title>
	<meta name="description" content="About Kurt Strang — {profile.title.toLowerCase()}." />
	<meta property="og:title" content="About Kurt Strang" />
	<meta property="og:description" content={profile.bio} />
	<meta property="og:type" content="profile" />
</svelte:head>

<div class="page">
	<Nav path="About\" />

	<header class="about-header">
		<div class="photo-container">
			<img src="/images/kurt.png" alt="Kurt Strang" />
		</div>
		<div class="about-intro">
			<h1>{profile.name}</h1>
			<p class="tagline">{profile.title}</p>
		</div>
	</header>

	<section class="section">
		<div class="prose-about">
			<p>{profile.bio}</p>
			<p>{profile.workWithMe}</p>
		</div>
	</section>

	<section class="section">
		<h2 class="section-heading">
			<span class="heading-icon">~/</span>get in touch
		</h2>
		<div class="contact-grid">
			<a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" class="contact-card">
				<span class="contact-label">LinkedIn</span>
				<span class="contact-value">kurtstrang</span>
				<span class="contact-arrow">↗</span>
			</a>
			<a href="mailto:{profile.links.email}" class="contact-card">
				<span class="contact-label">Email</span>
				<span class="contact-value">{profile.links.email}</span>
				<span class="contact-arrow">↗</span>
			</a>
		</div>
	</section>

	<Footer />
</div>

<style>
	.page {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: var(--spacing-lg) var(--spacing-md) var(--spacing-xl);
	}

	/* Header with photo */
	.about-header {
		display: flex;
		align-items: center;
		gap: var(--spacing-lg);
		margin-bottom: var(--spacing-2xl);
	}

	.photo-container {
		width: 96px;
		height: 96px;
		border: 2px solid var(--color-border);
		flex-shrink: 0;
		overflow: hidden;
	}

	.photo-container img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.about-intro h1 {
		font-size: 28px;
		font-weight: 700;
		line-height: 1.1;
		margin-bottom: var(--spacing-xs);
	}

	.tagline {
		font-size: 16px;
		color: var(--color-teal);
		font-weight: 500;
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

	/* Bio prose */
	.prose-about {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
		max-width: 580px;
		line-height: 1.8;
	}

	.prose-about p {
		color: var(--color-text);
	}

	/* Contact cards */
	.contact-grid {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-sm);
	}

	.contact-card {
		display: flex;
		align-items: center;
		gap: var(--spacing-md);
		padding: var(--spacing-md) var(--spacing-lg);
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		text-decoration: none;
		color: var(--color-text);
		transition: border-color 0.15s, box-shadow 0.15s;
	}

	.contact-card:hover {
		border-color: var(--color-teal);
		box-shadow: 0 2px 8px rgba(0, 128, 128, 0.08);
		color: var(--color-text);
	}

	.contact-label {
		font-weight: 700;
		font-size: 14px;
		min-width: 80px;
	}

	.contact-value {
		flex: 1;
		font-size: 14px;
		color: var(--color-text-muted);
	}

	.contact-arrow {
		font-size: 14px;
		color: var(--color-teal);
		opacity: 0;
		transition: opacity 0.15s;
	}

	.contact-card:hover .contact-arrow {
		opacity: 1;
	}

	@media (max-width: 600px) {
		.about-header {
			flex-direction: column;
			align-items: flex-start;
			gap: var(--spacing-md);
		}

		.photo-container {
			width: 72px;
			height: 72px;
		}

		.contact-arrow {
			opacity: 1;
		}
	}
</style>

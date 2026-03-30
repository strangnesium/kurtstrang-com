<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { profile } from '$lib/data/profile';
</script>

<svelte:head>
	<title>Contact — Kurt Strang</title>
	<meta name="description" content="Get in touch with Kurt Strang." />
	<meta property="og:title" content="Contact Kurt Strang" />
	<meta property="og:description" content="Get in touch with Kurt Strang." />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="page">
	<Nav path="Contact\" />

	<header class="page-header">
		<div class="page-header-intro">
			<img
				class="contact-photo"
				src="/kurt-profile-picture.png"
				alt="Kurt Strang"
				width="526"
				height="620"
			/>
			<div class="page-header-copy">
				<h1>Contact</h1>
				<p>{profile.workWithMe}</p>
			</div>
		</div>
	</header>

	<section class="section">
		<h2 class="section-heading">
			<span class="heading-icon">~/</span>get in touch
		</h2>
		<div class="contact-grid">
			<a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" class="contact-card">
				<span class="contact-label">LinkedIn</span>
				<span class="contact-value">kurt-strang</span>
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

	.page-header {
		margin-bottom: var(--spacing-2xl);
	}

	.page-header-intro {
		display: flex;
		align-items: flex-start;
		gap: var(--spacing-lg);
	}

	.contact-photo {
		width: 200px;
		max-width: 35%;
		height: auto;
		flex-shrink: 0;
		border: 1px solid var(--color-border);
		object-fit: cover;
		aspect-ratio: 526 / 620;
	}

	.page-header-copy {
		min-width: 0;
		flex: 1;
	}

	.page-header h1 {
		font-size: 28px;
		font-weight: 700;
		margin-bottom: var(--spacing-sm);
	}

	.page-header p {
		font-size: 15px;
		color: var(--color-text-muted);
		line-height: 1.8;
		max-width: 520px;
	}

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
		box-shadow: 0 2px 8px rgba(67, 197, 158, 0.12);
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
		.page-header-intro {
			flex-direction: column;
			align-items: center;
			text-align: center;
		}

		.contact-photo {
			max-width: 200px;
			width: 200px;
		}

		.contact-arrow {
			opacity: 1;
		}
	}
</style>

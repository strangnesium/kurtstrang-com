<script lang="ts">
	import { profile } from '$lib/data/profile';
</script>

<footer class="footer">
	<span>© {new Date().getFullYear()} {profile.name}</span>
	<span class="footer-dot">·</span>
	<a href="/projects">projects</a>
	<span class="footer-dot">·</span>
	<a href="/writings">my writings</a>
	<span class="footer-dot">·</span>
	<a href="/contact">contact</a>
	<span class="footer-dot">·</span>
	<a href="https://redditmentions.com" target="_blank" rel="noopener noreferrer">redditmentions</a>
</footer>

<style>
	.footer {
		padding-top: var(--spacing-lg);
		border-top: 1px solid var(--color-border);
		font-size: 13px;
		color: var(--color-text-muted);
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);
		flex-wrap: wrap;
	}

	.footer a {
		color: var(--color-text-muted);
		text-decoration: none;
	}

	.footer a:hover {
		color: var(--mint-leaf);
	}

	.footer-dot {
		opacity: 0.4;
	}
</style>

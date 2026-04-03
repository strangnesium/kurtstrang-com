<script>
	import '$lib/styles/global.css';
	import '$lib/styles/win98.css';
	import { page } from '$app/stores';
	import { siteOrigin } from '$lib/site';

	$: pathname = $page.url.pathname;
	$: canonicalUrl = pathname === '/' ? `${siteOrigin}/` : `${siteOrigin}${pathname}`;
</script>

<svelte:head>
	<link rel="canonical" href={canonicalUrl} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:site_name" content="Kurt Strang" />
	<meta name="author" content="Kurt Strang" />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<slot />

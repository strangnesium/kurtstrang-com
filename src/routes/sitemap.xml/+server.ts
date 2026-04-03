import type { RequestHandler } from '@sveltejs/kit';
import { siteOrigin } from '$lib/site';

export const prerender = true;

function publishedPostSlugs(): string[] {
	const modules = import.meta.glob('/src/posts/*.md', { eager: true }) as Record<
		string,
		{ metadata?: { published?: boolean } }
	>;
	return Object.keys(modules)
		.map((path) => path.split('/').pop()?.replace('.md', '') ?? '')
		.filter((slug) => modules[`/src/posts/${slug}.md`]?.metadata?.published === true);
}

export const GET: RequestHandler = () => {
	const paths = ['/', '/contact', '/projects', '/writings', '/projects/random-walk-simulator'];
	const urls = [
		...paths.map((p) => `${siteOrigin}${p}`),
		...publishedPostSlugs().map((slug) => `${siteOrigin}/writings/${slug}`)
	];

	const body =
		'<?xml version="1.0" encoding="UTF-8"?>\n' +
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
		urls.map((loc) => `  <url><loc>${loc}</loc></url>`).join('\n') +
		'\n</urlset>';

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' }
	});
};

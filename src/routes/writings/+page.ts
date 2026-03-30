export const prerender = true;

export async function load() {
	const postModules = import.meta.glob('/src/posts/*.md', { eager: true });

	const posts = Object.entries(postModules)
		.map(([path, mod]: [string, any]) => ({
			slug: path.split('/').pop()?.replace('.md', '') ?? '',
			title: mod.metadata?.title ?? 'Untitled',
			date: mod.metadata?.date ?? '',
			description: mod.metadata?.description ?? '',
			published: mod.metadata?.published ?? false
		}))
		.filter((p) => p.published)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return { posts };
}

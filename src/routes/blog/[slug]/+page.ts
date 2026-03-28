export const prerender = true;

export async function load({ params }: { params: { slug: string } }) {
	const modules = import.meta.glob('/src/posts/*.md', { eager: true });
	const path = `/src/posts/${params.slug}.md`;
	const post = modules[path] as any;

	if (!post) {
		throw new Error(`Post not found: ${params.slug}`);
	}

	return {
		content: post.default,
		meta: post.metadata as {
			title: string;
			date: string;
			description: string;
			published: boolean;
		}
	};
}

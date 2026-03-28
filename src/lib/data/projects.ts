export interface Project {
	name: string;
	url: string;
	description: string;
	longDescription?: string;
	status?: string;
	featured?: boolean;
}

export const projects: Project[] = [
	{
		name: 'redditmentions.com',
		url: 'https://redditmentions.com',
		description: 'Monitor Reddit for mentions of your brand, product, or keywords.',
		longDescription: `RedditMentions tracks Reddit in real-time for any keyword or brand mention you care about. Get alerts when people talk about your product, your competitors, or topics you want to jump into. Built for founders, marketers, and anyone who wants to stay plugged into relevant Reddit conversations.`,
		status: 'Active',
		featured: true
	},
	{
		name: 'quiki.eu',
		url: 'https://quiki.eu',
		description: 'Quick wikis for teams and communities.',
		longDescription: `Quiki makes it dead simple to spin up a wiki for your team, community, or project. No setup, no friction — just start writing. Designed for people who want documentation without the overhead of a full knowledge base tool.`,
		status: 'Active'
	},
	{
		name: '8mins.com',
		url: 'https://8mins.com',
		description: 'Bite-sized learning in 8-minute reads.',
		longDescription: `8mins curates and creates focused learning content designed to be read in a single sitting. Each piece is edited down to exactly what you need — no filler, no fluff, just the core ideas in 8 minutes or less.`,
		status: 'Active'
	}
];

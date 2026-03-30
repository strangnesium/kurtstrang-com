export interface Project {
	name: string;
	url: string;
	description: string;
	longDescription?: string;
	status?: string;
	featured?: boolean;
	internal?: boolean;
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
		name: '8mines.com',
		url: 'https://8mines.com',
		description: 'Bite-sized learning in 8-minute reads.',
		longDescription: `8mines curates and creates focused learning content designed to be read in a single sitting. Each piece is edited down to exactly what you need — no filler, no fluff, just the core ideas in 8 minutes or less.`,
		status: 'Active'
	},
	{
		name: 'Random Walk Simulator',
		url: '/projects/random-walk-simulator',
		description: 'Interactive coin-flip random walk with optional drift.',
		longDescription: `Visualize how noisy metrics can wander just by chance. Each step is a coin flip (+1 or −1), optionally biased with a small drift. A useful mental model for understanding randomness in data.`,
		status: 'Interactive',
		internal: true
	}
];

export interface Project {
	name: string;
	url: string;
	description: string;
	longDescription?: string;
	period?: string;
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
		period: 'May 2025–present',
		featured: true
	},
	{
		name: 'quiki.eu',
		url: 'https://quiki.eu',
		description: 'Quick, mobile-friendly random Wikipedia browsing.',
		longDescription: `Quick + Wiki = Quiki: a fast, fun way to dip into random Wikipedia articles when you have a few minutes, built for phones first. The content comes from Wikipedia — this is about discovery and idle curiosity, not hosting your own wiki.`,
		period: 'October 2024'
	},
	{
		name: '8mines.com',
		url: 'https://8mines.com',
		description: 'Free minefield-style game that explains gambling odds and house edge.',
		longDescription: `8 Mines is a probability game on a 4×4 grid: each tile might be a mine, and you try to survive eight clicks across four stages. It is deliberately not gambling — no money, full transparency — and uses rising difficulty and visible odds to show why real games feel "almost winnable" and how the house wins over time. Retro 8-bit presentation.`,
		period: 'January 2026'
	},
	{
		name: 'Random Walk Simulator',
		url: '/projects/random-walk-simulator',
		description: 'A tool to teach about randomness',
		longDescription: `Visualize how noisy metrics can wander just by chance. Each step is a coin flip (+1 or −1), optionally biased with a small drift. A useful mental model for understanding randomness in data.`,
		period: 'November 2025',
		internal: true
	}
];

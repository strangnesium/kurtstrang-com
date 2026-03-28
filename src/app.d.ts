declare global {
	namespace App {}
}

declare module '*.md' {
	import type { SvelteComponent } from 'svelte';
	export default class extends SvelteComponent {}
	export const metadata: Record<string, unknown>;
}

export {};

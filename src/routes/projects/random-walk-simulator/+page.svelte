<script lang="ts">
	import { onMount } from 'svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let canvas: HTMLCanvasElement = undefined as unknown as HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D = undefined as unknown as CanvasRenderingContext2D;
	let walk = [0];
	let drift = '0';
	let statsText = '';

	function stepOnce() {
		const s = Math.random() < 0.5 ? -1 : 1;
		const d = parseFloat(drift);
		const last = walk[walk.length - 1];
		walk = [...walk, last + s + d];
	}

	function addSteps(n: number) {
		const d = parseFloat(drift);
		let current = walk[walk.length - 1];
		const newSteps = [];
		for (let i = 0; i < n; i++) {
			const s = Math.random() < 0.5 ? -1 : 1;
			current = current + s + d;
			newSteps.push(current);
		}
		walk = [...walk, ...newSteps];
		draw();
	}

	function reset() {
		walk = [0];
		draw();
	}

	function draw() {
		if (!canvas || !ctx) return;

		const dpr = window.devicePixelRatio || 1;
		const rect = canvas.getBoundingClientRect();
		canvas.width = rect.width * dpr;
		canvas.height = rect.height * dpr;
		ctx.scale(dpr, dpr);

		const W = rect.width;
		const H = rect.height;
		ctx.clearRect(0, 0, W, H);

		const pad = 28;
		const n = walk.length;
		const xScale = (W - pad * 2) / Math.max(1, n - 1);
		const minY = Math.min(...walk);
		const maxY = Math.max(...walk);
		const yRange = Math.max(2, maxY - minY);
		const yScale = (H - pad * 2) / yRange;

		// Axes
		ctx.strokeStyle = '#d4d0c8';
		ctx.lineWidth = 1;
		ctx.beginPath();
		ctx.moveTo(pad, H - pad);
		ctx.lineTo(W - pad, H - pad);
		ctx.moveTo(pad, pad);
		ctx.lineTo(pad, H - pad);
		ctx.stroke();

		// Zero line
		const zeroY = H - pad - (0 - minY) * yScale;
		ctx.strokeStyle = '#a0a0a0';
		ctx.setLineDash([4, 4]);
		ctx.beginPath();
		ctx.moveTo(pad, zeroY);
		ctx.lineTo(W - pad, zeroY);
		ctx.stroke();
		ctx.setLineDash([]);

		// Zero label
		ctx.fillStyle = '#666666';
		ctx.font = '11px "IBM Plex Mono", monospace';
		ctx.textAlign = 'right';
		ctx.fillText('0', pad - 6, zeroY + 4);

		// Path
		ctx.strokeStyle = '#14453d';
		ctx.lineWidth = 2;
		ctx.beginPath();
		for (let i = 0; i < n; i++) {
			const x = pad + i * xScale;
			const y = H - pad - (walk[i] - minY) * yScale;
			if (i === 0) ctx.moveTo(x, y);
			else ctx.lineTo(x, y);
		}
		ctx.stroke();

		// Endpoint dot
		if (n > 1) {
			const lastX = pad + (n - 1) * xScale;
			const lastY = H - pad - (walk[n - 1] - minY) * yScale;
			ctx.fillStyle = '#43c59e';
			ctx.beginPath();
			ctx.arc(lastX, lastY, 4, 0, Math.PI * 2);
			ctx.fill();
		}

		const last = walk[walk.length - 1];
		const upDown = last >= 0 ? 'up' : 'down';
		const steps = n - 1;
		statsText = `Steps: ${steps.toLocaleString()}  ·  Last value: ${last.toFixed(2)} (${upDown})`;
	}

	onMount(() => {
		ctx = canvas.getContext('2d')!;
		draw();

		const handleResize = () => draw();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});
</script>

<svelte:head>
	<title>Random Walk Simulator — Kurt Strang</title>
	<meta
		name="description"
		content="Interactive random walk simulator. Add steps and watch how noisy metrics wander by pure chance."
	/>
</svelte:head>

<div class="page">
	<Nav path="Projects\RandomWalk\" />

	<header class="page-header">
		<h1>Random Walk Simulator</h1>
		<p>
			See how noisy weekly metrics can wander just by chance. Each step is +1 or −1 (coin flip),
			optionally with a small drift.
		</p>
	</header>

	<div class="simulator">
		<div class="simulator-title-bar retro-title-bar">random_walk.exe</div>
		<div class="simulator-body retro-inset">
			<div class="controls">
				<button class="retro-button" on:click={() => addSteps(100)}>Add 100 steps</button>
				<button class="retro-button" on:click={() => addSteps(1000)}>Add 1,000 steps</button>
				<button class="retro-button" on:click={reset}>Reset</button>
				<label class="drift-label">
					Drift
					<select class="drift-select" bind:value={drift} on:change={draw}>
						<option value="0">0</option>
						<option value="0.01">+0.01</option>
						<option value="-0.01">−0.01</option>
						<option value="0.05">+0.05</option>
						<option value="-0.05">−0.05</option>
					</select>
				</label>
			</div>

			<canvas bind:this={canvas} class="chart" aria-label="Random walk chart"></canvas>

			<div class="stats">{statsText}</div>
		</div>
	</div>

	<section class="about-section">
		<h2>What is a random walk?</h2>
		<p>
			A random walk is a path formed by successive random steps. At each tick, a fair coin is
			flipped — heads means +1, tails means −1. Despite being purely random, the cumulative path
			can look surprisingly like a real trend, which is why random walks are a useful mental model
			for understanding noisy data.
		</p>
		<p>
			Adding a small <strong>drift</strong> biases each step slightly up or down, simulating a weak underlying
			trend beneath the noise.
		</p>
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
		margin-bottom: var(--spacing-xl);
	}

	.page-header h1 {
		font-size: 28px;
		font-weight: 700;
		margin-bottom: var(--spacing-sm);
	}

	.page-header p {
		font-size: 14px;
		color: var(--color-text-muted);
		line-height: 1.7;
	}

	/* Simulator window */
	.simulator {
		margin-bottom: var(--spacing-2xl);
		border: 2px solid var(--color-border);
		border-top-color: #ffffff;
		border-left-color: #ffffff;
		border-bottom-color: #a0a0a0;
		border-right-color: #a0a0a0;
		background: var(--color-surface);
	}

	.simulator-title-bar {
		display: flex;
		align-items: center;
		font-size: 13px;
	}

	.simulator-body {
		margin: 3px;
		padding: var(--spacing-md);
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
	}

	/* Controls */
	.controls {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-sm);
		align-items: center;
	}

	.drift-label {
		font-size: 13px;
		color: var(--color-text-muted);
		display: flex;
		align-items: center;
		gap: 6px;
		margin-left: auto;
	}

	.drift-select {
		font-family: var(--font-mono);
		font-size: 13px;
		padding: 4px 8px;
		background: var(--color-surface);
		border: 2px solid var(--color-border);
		border-top-color: #a0a0a0;
		border-left-color: #a0a0a0;
		border-bottom-color: #ffffff;
		border-right-color: #ffffff;
		color: var(--color-text);
		cursor: pointer;
	}

	/* Chart */
	.chart {
		width: 100%;
		height: 380px;
		background: var(--color-bg);
		border: 2px solid var(--color-border);
		border-top-color: #a0a0a0;
		border-left-color: #a0a0a0;
		border-bottom-color: #ffffff;
		border-right-color: #ffffff;
	}

	/* Stats */
	.stats {
		font-size: 13px;
		color: var(--color-text-muted);
		min-height: 1.4em;
	}

	/* About section */
	.about-section {
		margin-bottom: var(--spacing-2xl);
		padding-top: var(--spacing-lg);
		border-top: 1px solid var(--color-border);
	}

	.about-section h2 {
		font-size: 16px;
		font-weight: 700;
		margin-bottom: var(--spacing-sm);
	}

	.about-section p {
		font-size: 14px;
		line-height: 1.75;
		color: var(--color-text-muted);
		margin-bottom: var(--spacing-md);
	}

	.about-section p:last-child {
		margin-bottom: 0;
	}

	@media (max-width: 600px) {
		.controls {
			flex-direction: column;
			align-items: stretch;
		}

		.drift-label {
			margin-left: 0;
			justify-content: space-between;
		}

		.chart {
			height: 260px;
		}
	}
</style>

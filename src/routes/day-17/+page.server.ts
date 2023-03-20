import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		title: 'Day 17 - Meta Viewport Tag'
	};
}) satisfies PageServerLoad;

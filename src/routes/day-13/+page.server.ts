import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		title: 'Day 13 - min, max, clamp'
	};
}) satisfies PageServerLoad;

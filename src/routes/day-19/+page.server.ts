import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		title: 'Day 19 - Mobile Nav Challenge'
	};
}) satisfies PageServerLoad;

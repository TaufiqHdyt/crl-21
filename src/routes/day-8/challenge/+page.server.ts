import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		title: 'Day 8 Challenge'
	};
}) satisfies PageServerLoad;

import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		title: 'Day 1 Challenge'
	};
}) satisfies PageServerLoad;

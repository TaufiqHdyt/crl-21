import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		title: 'Day 3 Challenge'
	};
}) satisfies PageServerLoad;

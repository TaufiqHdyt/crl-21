import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		title: 'Day 12 - Challenge'
	};
}) satisfies PageServerLoad;

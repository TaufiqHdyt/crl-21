import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		title: 'Day 6 - Review'
	};
}) satisfies PageServerLoad;

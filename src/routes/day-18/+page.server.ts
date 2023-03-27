import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		title: 'Day 18 - Challenge Solution'
	};
}) satisfies PageServerLoad;

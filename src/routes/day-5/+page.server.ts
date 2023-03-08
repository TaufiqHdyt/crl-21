import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		title: 'Day 5 - Challenge from Design'
	};
}) satisfies PageServerLoad;

import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		title: 'Day 11 - Challenge 3 (Navigation)'
	};
}) satisfies PageServerLoad;

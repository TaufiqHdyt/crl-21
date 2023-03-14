import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		title: 'Day 9 - Flexbox Challenge #2'
	};
}) satisfies PageServerLoad;

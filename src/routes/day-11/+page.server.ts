import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		title: 'Day 11 - A deeper dive into flexbox'
	};
}) satisfies PageServerLoad;

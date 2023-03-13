import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		title: 'Day 9 - a Deep Dive into Flexbox'
	};
}) satisfies PageServerLoad;

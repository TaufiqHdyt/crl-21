import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		title: 'Day 12 - Fancier Up Navigation with Flexbox'
	};
}) satisfies PageServerLoad;

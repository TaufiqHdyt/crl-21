import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		title: 'Day 15 - Media Query'
	};
}) satisfies PageServerLoad;

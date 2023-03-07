import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		title: 'Homepage'
	};
}) satisfies PageServerLoad;

import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		title: 'Viewport units'
	};
}) satisfies PageServerLoad;

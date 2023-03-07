import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		title: 'Getting familiar with relative units'
	};
}) satisfies PageServerLoad;

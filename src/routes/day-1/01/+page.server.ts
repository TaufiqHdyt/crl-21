import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		title: 'Percentages vs Fixed widths'
	};
}) satisfies PageServerLoad;

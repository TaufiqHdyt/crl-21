import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		title: 'Flex Box - Space Between Columns'
	};
}) satisfies PageServerLoad;

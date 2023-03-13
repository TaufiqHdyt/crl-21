import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		title: 'Flex Box Introduction'
	};
}) satisfies PageServerLoad;

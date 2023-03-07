import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		title: "Why it's a good idea to avoid heights"
	};
}) satisfies PageServerLoad;

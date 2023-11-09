import { error } from '@sveltejs/kit';


export async function load({ params }) {

    try {
        const response = await fetch('some_url')
    } catch {
        throw error(404);
    }

	return {
		path: params.path
	};
}
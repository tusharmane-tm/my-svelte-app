import { error } from '@sveltejs/kit';


export async function load({ params }) {
    try {
        const id = params.id;
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const json = response.json();

        return {
            post: json
        };
    } catch (err) {
        throw error(404);
    }
}
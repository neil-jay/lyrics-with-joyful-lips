import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';

export const getStaticPaths: GetStaticPaths = async () => {
	const docs = await getCollection('docs');
	return docs.map((entry) => ({
		params: { path: entry.id },
		props: { entry },
	}));
};

export const GET: APIRoute = ({ props }) => {
	const { entry } = props;
	const frontmatter = [
		'---',
		`title: ${JSON.stringify(String(entry.data.title ?? ''))}`,
		`description: ${JSON.stringify(String(entry.data.description ?? ''))}`,
		'---',
		'',
	];

	return new Response(frontmatter.join('\n') + (entry.body ?? ''), {
		headers: { 'content-type': 'text/markdown; charset=utf-8' },
	});
};

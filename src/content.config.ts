import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader({
			generateId: ({ data, entry }) => {
				if (data.slug) return String(data.slug);
				if (data.hymnCode && data.category) {
					return `hymn-lyrics/${data.category}/${String(data.hymnCode).toLowerCase().replace(/\./g, '-')}`;
				}
				return entry.replace(/\.(md|mdx)$/, '').replace(/\\/g, '/').replace(/\/index$/, '');
			},
		}),
		schema: docsSchema(),
	}),
};

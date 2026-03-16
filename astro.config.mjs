// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://withjoyfullipslyrics.neiljay.com',
	outDir: './build',
	integrations: [
		sitemap(),
		starlight({
			title: 'With Joyful Lips Lyrics',
			description:
				'Lyrics from With Joyful Lips, a Catholic hymnal by Fr. Jean L. Mercier. Access hymns for worship services and church presentations.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/neil-jay/lyrics-with-joyful-lips' },
			],
			disable404Route: true,
			components: {
				Footer: './src/components/Footer.astro',
				MarkdownContent: './src/components/MarkdownContent.astro',
			},
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{ label: 'Introduction', slug: 'hymn-lyrics/introduction' },
				'hymn-lyrics/advent-hymns',
				'hymn-lyrics/alleluia-hymns',
				'hymn-lyrics/christmas-carols',
				'hymn-lyrics/christmas-hymns',
				'hymn-lyrics/commitment-hymns',
				'hymn-lyrics/common-hymns',
				'hymn-lyrics/communion-hymns',
				'hymn-lyrics/confirmation-hymns',
				'hymn-lyrics/creation-hymns',
				'hymn-lyrics/creed-hymns',
				'hymn-lyrics/departed-hymns',
				'hymn-lyrics/easter-hymns',
				'hymn-lyrics/entrance-hymns',
				'hymn-lyrics/glory-to-god-hymns',
				'hymn-lyrics/justice-hymns',
				'hymn-lyrics/lent-hymns',
				'hymn-lyrics/lords-prayer',
				'hymn-lyrics/marriage-hymns',
				'hymn-lyrics/offertory-hymns',
				'hymn-lyrics/paraliturgical-hymns',
				'hymn-lyrics/passion-hymns',
				'hymn-lyrics/pentecost-hymns',
				'hymn-lyrics/prayer-hymns',
				'hymn-lyrics/psalms',
				'hymn-lyrics/recessional-hymns',
				'hymn-lyrics/sacred-heart-hymns',
				'hymn-lyrics/saints-hymns',
				'hymn-lyrics/thanksgiving-hymns',
				'hymn-lyrics/virgin-mary-hymns',
				{
					label: 'Blog',
					collapsed: true,
					autogenerate: { directory: 'blog' },
				},
				{ label: 'Terms', slug: 'terms' },
				{ label: 'Copyright', slug: 'copyright' },
			],
		}),
	],
});

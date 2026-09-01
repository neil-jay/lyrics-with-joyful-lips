// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://withjoyfullipslyrics.com/',
	trailingSlash: 'always',
	redirects: {
		'/hymn-lyrics/creation-hymns/l-26-my-god-only-source-of-my-joy-psalm-15/': '/hymn-lyrics/creation-hymns/l-26-my-god-joy/',
		'/hymn-lyrics/departed-hymns/r-3-this-day-you-shall-be-with-me-psalm-114/': '/hymn-lyrics/departed-hymns/r-3-this-day/',
		'/hymn-lyrics/sacred-heart-hymns/m-2-bend-your-neck-to-my-yoke-psalm-33/': '/hymn-lyrics/sacred-heart-hymns/m-2-bend-neck/',
		'/hymn-lyrics/easter-hymns/i-19-o-give-thanks-to-the-lord-psalm-117/': '/hymn-lyrics/easter-hymns/i-19-give-thanks/',
		'/hymn-lyrics/entrance-hymns/a-28-this-is-the-day-the-lord-has-made/': '/hymn-lyrics/entrance-hymns/a-28-this-day/',
		'/hymn-lyrics/entrance-hymns/a-30-let-me-sing-of-your-law-psalm-118/': '/hymn-lyrics/entrance-hymns/a-30-sing-law/',
		'/hymn-lyrics/entrance-hymns/a-53-in-the-lord-is-my-hope-psalm-90/': '/hymn-lyrics/entrance-hymns/a-53-lord-hope/',
		'/hymn-lyrics/entrance-hymns/a-103-let-me-live-in-your-house-o-lord/': '/hymn-lyrics/entrance-hymns/a-103-live-house/',
		'/hymn-lyrics/entrance-hymns/a-111-happy-those-who-hear-the-word-of-god/': '/hymn-lyrics/entrance-hymns/a-111-hear-word/',
		'/hymn-lyrics/entrance-hymns/a-112-how-lovely-is-your-dwelling-place-psalm-83/': '/hymn-lyrics/entrance-hymns/a-112-lovely-dwelling/',
		'/hymn-lyrics/marriage-hymns/o-3-may-the-lord-protect-our-homes-psalm-126/': '/hymn-lyrics/marriage-hymns/o-3-protect-homes/',
		'/hymn-lyrics/passion-hymns/h-9-you-who-pass-by-the-way-psalm-68/': '/hymn-lyrics/passion-hymns/h-9-pass-way/',
		'/hymn-lyrics/recessional-hymns/x-15-may-the-lord-make-our-love-mount-up/': '/hymn-lyrics/recessional-hymns/x-15-love-mount/',
		'/hymn-lyrics/thanksgiving-hymns/cc-5-i-will-sing-god-s-praises-psalm-22/': '/hymn-lyrics/thanksgiving-hymns/cc-5-sing-praises/',
		'/hymn-lyrics/thanksgiving-hymns/c-17-i-will-sing-to-my-god-psalm-145/': '/hymn-lyrics/thanksgiving-hymns/c-17-sing-god/',
		'/hymn-lyrics/virgin-mary-hymns/t-8-my-soul-sings-the-glory-of-god/': '/hymn-lyrics/virgin-mary-hymns/t-8-soul-sings/',
	},
	outDir: './build',
	integrations: [
		sitemap(),
		starlight({
			title: 'With Joyful Lips Lyrics',
			description:
				'Lyrics from With Joyful Lips, a Catholic hymnal by Fr. Jean L. Mercier. Access hymns for worship services and church presentations.',
			head: [
				{
					tag: 'meta',
					attrs: {
						property: 'og:site_name',
						content: 'With Joyful Lips Lyrics',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:image',
						content: 'https://withjoyfullipslyrics.com/img/withjoyfullips.webp',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:image:alt',
						content: 'With Joyful Lips Lyrics',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:image',
						content: 'https://withjoyfullipslyrics.com/img/withjoyfullips.webp',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:image:alt',
						content: 'With Joyful Lips Lyrics',
					},
				},
			],
			favicon: '/img/favicon.ico',
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
				{ label: 'Advent Hymns (28)', collapsed: true, items: [{ autogenerate: { directory: 'hymn-lyrics/advent-hymns' } }] },
				{ label: 'Alleluia Hymns (11)', collapsed: true, items: [{ autogenerate: { directory: 'hymn-lyrics/alleluia-hymns' } }] },
				{ label: 'Christmas Carols (12)', collapsed: true, items: [{ autogenerate: { directory: 'hymn-lyrics/christmas-carols' } }] },
				{ label: 'Christmas Hymns (11)', collapsed: true, items: [{ autogenerate: { directory: 'hymn-lyrics/christmas-hymns' } }] },
				{ label: 'Commitment Hymns (24)', collapsed: true, items: [{ autogenerate: { directory: 'hymn-lyrics/commitment-hymns' } }] },
				{ label: 'Common Hymns (4)', collapsed: true, items: [{ autogenerate: { directory: 'hymn-lyrics/common-hymns' } }] },
				{ label: 'Communion Hymns (92)', collapsed: true, items: [{ autogenerate: { directory: 'hymn-lyrics/communion-hymns' } }] },
				{ label: 'Confirmation Hymns (13)', collapsed: true, items: [{ autogenerate: { directory: 'hymn-lyrics/confirmation-hymns' } }] },
				{ label: 'Creation Hymns (25)', collapsed: true, items: [{ autogenerate: { directory: 'hymn-lyrics/creation-hymns' } }] },
				{ label: 'Creed Hymns (4)', collapsed: true, items: [{ autogenerate: { directory: 'hymn-lyrics/creed-hymns' } }] },
				{ label: 'For the Departed (6)', collapsed: true, items: [{ autogenerate: { directory: 'hymn-lyrics/departed-hymns' } }] },
				{ label: 'Easter Hymns (19)', collapsed: true, items: [{ autogenerate: { directory: 'hymn-lyrics/easter-hymns' } }] },
				{ label: 'Entrance Hymns (89)', collapsed: true, items: [{ autogenerate: { directory: 'hymn-lyrics/entrance-hymns' } }] },
				{ label: 'Glory to God Hymns (3)', collapsed: true, items: [{ autogenerate: { directory: 'hymn-lyrics/glory-to-god-hymns' } }] },
				{ label: 'Justice Hymns (5)', collapsed: true, items: [{ autogenerate: { directory: 'hymn-lyrics/justice-hymns' } }] },
				{ label: 'Lent Hymns (36)', collapsed: true, items: [{ autogenerate: { directory: 'hymn-lyrics/lent-hymns' } }] },
				{ label: "Lord's Prayer (1)", collapsed: true, items: [{ autogenerate: { directory: 'hymn-lyrics/lords-prayer' } }] },
				{ label: 'Marriage Hymns (8)', collapsed: true, items: [{ autogenerate: { directory: 'hymn-lyrics/marriage-hymns' } }] },
				{ label: 'Offertory Hymns (18)', collapsed: true, items: [{ autogenerate: { directory: 'hymn-lyrics/offertory-hymns' } }] },
				{ label: 'Paraliturgical Hymns (7)', collapsed: true, items: [{ autogenerate: { directory: 'hymn-lyrics/paraliturgical-hymns' } }] },
				{ label: 'Passion Hymns (20)', collapsed: true, items: [{ autogenerate: { directory: 'hymn-lyrics/passion-hymns' } }] },
				{ label: 'Pentecost Hymns (13)', collapsed: true, items: [{ autogenerate: { directory: 'hymn-lyrics/pentecost-hymns' } }] },
				{ label: 'Prayer Hymns (7)', collapsed: true, items: [{ autogenerate: { directory: 'hymn-lyrics/prayer-hymns' } }] },
				{ label: 'Psalms (38)', collapsed: true, items: [{ autogenerate: { directory: 'hymn-lyrics/psalms' } }] },
				{ label: 'Recessional Hymns (26)', collapsed: true, items: [{ autogenerate: { directory: 'hymn-lyrics/recessional-hymns' } }] },
				{ label: 'Sacred Heart Hymns (24)', collapsed: true, items: [{ autogenerate: { directory: 'hymn-lyrics/sacred-heart-hymns' } }] },
				{ label: 'Saints Hymns (1)', collapsed: true, items: [{ autogenerate: { directory: 'hymn-lyrics/saints-hymns' } }] },
				{ label: 'Thanksgiving Hymns (36)', collapsed: true, items: [{ autogenerate: { directory: 'hymn-lyrics/thanksgiving-hymns' } }] },
				{ label: 'Virgin Mary Hymns (28)', collapsed: true, items: [{ autogenerate: { directory: 'hymn-lyrics/virgin-mary-hymns' } }] },
				{
					label: 'Blog',
					items: [{ autogenerate: { directory: 'blog', collapsed: true } }],
				},
				{ label: 'Terms', slug: 'terms' },
				{ label: 'Copyright', slug: 'copyright' },
			],
		}),
	],
});

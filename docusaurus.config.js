// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'With Joyful Lips - Hymn Lyrics Collection',
  tagline: 'Complete hymn lyrics from Fr. Jean L. Mercier\'s With Joyful Lips',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://withjoyfullipslyrics.neiljay.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'github.com/neil-jay', // Usually your GitHub org/user name.
  projectName: 'lyrics-with-joyful-lips', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'hymn-lyrics',
          routeBasePath: 'hymn-lyrics',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/neil-jay/lyrics-with-joyful-lips/',
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Joyful Lips Hymnal',
        // logo: {
        //   alt: 'With Joyful Lips',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Browse Hymns',
            to: '/hymn-lyrics/intro',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/neil-jay/lyrics-with-joyful-lips',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Lyrics',
          //   items: [
          //     {
          //       label: 'Browse',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Discord',
          //       href: '#',
          //     },
          //     // {
          //     //   label: 'Discord',
          //     //   href: 'https://discordapp.com/invite/neiljay',
          //     // },
          //   ],
          // },
          // {
          //   title: 'Source',
          //   items: [
          //     // {
          //     //   label: 'Blog',
          //     //   to: '/blog',
          //     // },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/neil-jay/lyrics-with-joyful-lips',
          //     },
          //   ],
          // },
        ],
        copyright: `© ${new Date().getFullYear()} <a href="https://neiljay.com" target="_blank" rel="noopener noreferrer" class="footer__link-item">neiljay</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      metadata: [
        // Basic SEO
        {
          name: 'description',
          content: 'Access complete hymn lyrics from With Joyful Lips by Fr. Jean L. Mercier. Perfect for church services, worship presentations, and spiritual enrichment.',
        },
        {
          name: 'keywords',
          content: 'With Joyful Lips, hymn lyrics, Fr. Jean L. Mercier, church hymns, worship songs, catholic hymns, christian music',
        },
        // Open Graph / Facebook
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:title',
          content: 'With Joyful Lips - Complete Hymn Lyrics Collection',
        },
        {
          property: 'og:description',
          content: 'Access complete hymn lyrics from With Joyful Lips by Fr. Jean L. Mercier. Perfect for church services and worship.',
        },
        {
          property: 'og:image',
          content: 'https://yoursite.com/img/og-image.jpg', // Replace with your actual image URL
        },
        {
          property: 'og:url',
          content: 'https://yoursite.com', // Replace with your actual URL
        },
        // Twitter
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: 'With Joyful Lips - Complete Hymn Lyrics Collection',
        },
        {
          name: 'twitter:description',
          content: 'Access complete hymn lyrics from With Joyful Lips by Fr. Jean L. Mercier. Perfect for church services and worship.',
        },
        {
          name: 'twitter:image',
          content: 'https://yoursite.com/img/twitter-image.jpg', // Replace with your actual image URL
        },
        // Additional SEO
        {
          name: 'author',
          content: 'Fr. Jean L. Mercier',
        },
        {
          name: 'robots',
          content: 'index, follow',
        },
        // Mobile optimization
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0',
        },
        // Language declaration
        {
          httpEquiv: 'Content-Language',
          content: 'en',
        },
      ],
    }),

  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["en"],
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        highlightSearchTermsOnTargetPage: true,
        docsDir: "hymn-lyrics",
        docsRouteBasePath: "hymn-lyrics",
      },
    ],
  ],

  // plugins: [
  //   [
  //     '@docusaurus/plugin-sitemap',
  //     {
  //       changefreq: 'weekly',
  //       priority: 0.5,
  //       ignorePatterns: ['/tags/**'],
  //       filename: 'sitemap.xml',
  //     },
  //   ],
  // ],
};

export default config;

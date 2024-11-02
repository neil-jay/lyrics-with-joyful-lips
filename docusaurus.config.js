// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "With Joyful Lips Lyrics",
  tagline: 'Catholic Hymnal by Fr. Jean L. Mercier',
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
          // editUrl:
          //   'https://github.com/neil-jay/lyrics-with-joyful-lips/edit/main/',
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
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
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
        title: 'With Joyful Lips Lyrics',
        //  logo: {
        //    alt: 'With Joyful Lips',
        //    src: 'img/withjoyfullipslogo.webp',
        //    width: 60,  // adjust this value based on your logo size
        //    height: 60, // adjust this value based on your logo size
        //  },
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
          // yet to add
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
          content: 'Lyrics from With Joyful Lips, a Catholic hymnal by Fr. Jean L. Mercier. Easy access for worship and church services.',
        },
        {
          name: 'keywords',
          content: 'with joyful lips lyrics, catholic hymn lyrics, Fr. Jean L. Mercier, church music, catholic hymns, catholic songs',
        },
        // Open Graph / Facebook
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:title',
          content: 'With Joyful Lips Lyrics',
        },
        {
          property: 'og:description',
          content: 'Lyrics from With Joyful Lips, a Catholic hymnal by Fr. Jean L. Mercier. Easy access for worship and church services.',
        },
        {
          property: 'og:image',
          content: 'https://withjoyfullipslyrics.neiljay.com/img/og-image.jpg',
        },
        {
          property: 'og:url',
          content: 'https://withjoyfullipslyrics.neiljay.com',
        },
        {
          property: 'og:site_name',
          content: 'With Joyful Lips Lyrics',
        },
        // Twitter
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: 'With Joyful Lips Lyrics',
        },
        {
          name: 'twitter:description',
          content: 'Lyrics from With Joyful Lips, a Catholic hymnal by Fr. Jean L. Mercier. Easy access for worship and church services.',
        },
        {
          name: 'twitter:image',
          content: 'https://withjoyfullipslyrics.neiljay.com/img/og-image.jpg',
        },
        {
          name: 'twitter:image:alt',
          content: 'With Joyful Lips Catholic Hymnal Logo',
        },
        // Additional SEO
        {
          name: 'author',
          content: 'Fr. Jean L. Mercier',
        },
        {
          name: 'copyright',
          content: '© 2024 With Joyful Lips Lyrics',
        },
        {
          name: 'robots',
          content: 'index, follow, max-image-preview:large',
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
        {
          name: 'language',
          content: 'English',
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
        searchResultLimits: 15,
        searchBarPosition: "auto",
      },
    ],
  ],
};

export default config;

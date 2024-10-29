// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'With Joyful Lips - Catholic Hymn Lyrics Collection',
  tagline: 'Complete collection of Catholic hymn lyrics for worship and praise',
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
          sidebarPath: './sidebars.js',
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
        title: 'With Joyful Lips Lyrics',
        // logo: {
        //   alt: 'With Joyful Lips',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Lyrics',
            to: '/docs/intro',
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
        {name: 'keywords', content: 'catholic hymns, christian songs, worship lyrics, with joyful lips, church music, catholic songs, christian worship'},
        {name: 'description', content: 'Free collection of Catholic hymn lyrics. Easy to copy and paste with Ctrl+Shift+V. Perfect for worship presentations, church services, and personal devotion.'},
        {name: 'og:title', content: 'With Joyful Lips - Catholic Hymn Lyrics Collection'},
        {name: 'og:description', content: 'Complete collection of Catholic hymn lyrics. Easy to copy-paste with Ctrl+Shift+V. Perfect for worship presentations, church services, and personal devotion.'},
      ],
    }),

  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["en"],
        indexDocs: true,
        indexBlog: true,
        indexPages: false,
        highlightSearchTermsOnTargetPage: true,
        searchResultContextMaxLength: 50,
      },
    ],
  ],
};

export default config;

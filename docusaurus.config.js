import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "With Joyful Lips Lyrics",
  tagline: 'Catholic Hymnal by Fr. Jean L. Mercier',
  favicon: 'img/favicon.ico',

  url: 'https://withjoyfullipslyrics.neiljay.com',
  baseUrl: '/',

  organizationName: 'github.com/neil-jay',
  projectName: 'lyrics-with-joyful-lips',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
        },
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
            to: '/hymn-lyrics/introduction/',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Legal',
            items: [
              {
                label: 'Terms of Service',
                to: '/terms/',
              },
              {
                label: 'Copyright & Attribution',
                to: '/copyright/',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} <span style="display: inline-flex; white-space: nowrap;"><a href="https://neiljay.com" target="_blank" rel="noopener noreferrer" class="footer__link-item">neiljay</a></span>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      metadata: [
        // Basic SEO
        {
          name: 'description',
          content: 'Lyrics from With Joyful Lips, a Catholic hymnal by Fr. Jean L. Mercier. Access traditional Catholic hymns and songs for worship services, church presentations, and other celebrations.',
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
          content: 'https://withjoyfullipslyrics.neiljay.com/img/withjoyfullips.webp',
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
          content: 'https://withjoyfullipslyrics.neiljay.com/img/withjoyfullips.webp',
        },
        {
          name: 'twitter:image:alt',
          content: 'With Joyful Lips Logo',
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

  scripts: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-TXSXJHGCJD',
      async: true,
    },
  ],

  headTags: [
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
      },
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-TXSXJHGCJD');
      `,
    },
  ],
};

export default config;

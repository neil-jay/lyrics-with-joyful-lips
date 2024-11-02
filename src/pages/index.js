import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { useState } from 'react';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          With Joyful Lips Lyrics
        </Heading>
        <p className="hero__subtitle">
          Catholic Hymnal by Fr. Jean L. Mercier | Twelfth Revised Edition
        </p>
        <p className="hero__description">
          Easy access to Catholic hymn lyrics for worship and church services
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/hymn-lyrics/introduction"
            aria-label="Browse Catholic hymn lyrics">
            Browse Hymn Lyrics
          </Link>
        </div>
      </div>
    </header>
  );
}

const FeatureList = [
  {
    title: 'Easy Access to Catholic Hymns',
    description: (
      <>
        Browse through our comprehensive collection of Catholic hymn lyrics.
        Perfect for worship leaders, choirs, and congregations.
      </>
    ),
  },
  {
    title: 'Simple Copy-Paste Feature',
    description: (
      <>
        Use Ctrl + Shift + V to quickly paste lyrics without formatting.
        Ideal for creating presentation slides and worship materials.
      </>
    ),
  },
  {
    title: 'Free and Always Updated',
    description: (
      <>
        Access all hymn lyrics completely free. Our collection is regularly
        updated with new hymns and corrections.
      </>
    ),
  },
];

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="With Joyful Lips Lyrics"
      description="Lyrics from With Joyful Lips, a Catholic hymnal by Fr. Jean L. Mercier. Easy access for worship and church services.">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "With Joyful Lips Lyrics",
          "description": "Lyrics from With Joyful Lips, a Catholic hymnal by Fr. Jean L. Mercier. Easy access for worship and church services.",
          "url": "https://withjoyfullipslyrics.neiljay.com",
          "keywords": "with joyful lips lyrics, catholic hymn lyrics, Fr. Jean L. Mercier, church music, catholic hymns, catholic songs",
          "inLanguage": "en",
          "author": {
            "@type": "Person",
            "name": "NeilJay",
            "url": "https://withjoyfullipslyrics.neiljay.com"
          },
          "creator": {
            "@type": "Person",
            "name": "Fr. Jean L. Mercier",
            "jobTitle": "Catholic Priest"
          },
          "copyrightYear": "2024",
          "license": "All Rights Reserved",
          "about": {
            "@type": "Book",
            "name": "With Joyful Lips",
            "author": "Fr. Jean L. Mercier",
            "bookEdition": "Twelfth Revised Edition",
            "bookFormat": "Catholic Hymnal",
            "copyrightYear": "1989",
            "publisher": "Better Yourself Books & Media Pvt. Ltd."
          }
        })}
      </script>

      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

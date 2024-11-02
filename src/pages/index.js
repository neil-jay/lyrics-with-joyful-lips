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
          Catholic Hymnal by Fr. Jean L. Mercier | 12th Edition
        </p>
        <p className="hero__description">
          Browse and copy lyrics from With Joyful Lips for worship and church services
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/hymn-lyrics/introduction">
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
          "author": {
            "@type": "Person",
            "name": "NeilJay"
          },
          "creator": {
            "@type": "Person",
            "name": "Fr. Jean L. Mercier"
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

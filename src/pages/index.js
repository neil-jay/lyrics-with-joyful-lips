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
          With Joyful Lips - Catholic Hymn Lyrics
        </Heading>
        <p className="hero__subtitle">
          Fr. Jean L. Mercier's Catholic Hymns and Worship Songs Collection | 12th Edition
        </p>
        <p className="hero__description">
          Your digital hymn book: Browse and copy lyrics from the official With Joyful Lips hymnal
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/hymn-lyrics/introduction">
            Browse Joyful Lips Hymns
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
      title="With Joyful Lips Hymn Lyrics"
      description="Catholic hymn lyrics from With Joyful Lips by Fr. Jean L. Mercier. Easy access for worship and church services.">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "With Joyful Lips",
          "description": "Catholic Hymn Lyrics Collection from With Joyful Lips by Fr. Jean L. Mercier",
          "url": "https://withjoyfullipslyrics.neiljay.com",
          "keywords": "catholic hymns, with joyful lips, Fr. Jean L. Mercier, church music, hymn lyrics, catholic songs",
          "author": {
            "@type": "Person",
            "name": "NeilJay"
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

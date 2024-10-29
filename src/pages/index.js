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
          Catholic Hymn Lyrics Collection
        </Heading>
        <p className="hero__subtitle">
          Free collection of Catholic hymns and worship songs with easy copy-paste functionality
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Browse All Hymns
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
      title="Catholic Hymn Lyrics - With Joyful Lips"
      description="Free collection of Catholic hymn lyrics from With Joyful Lips by Fr. Jean L. Mercier. Easy to copy and paste with Ctrl+Shift+V. Perfect for worship presentations and church services.">
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

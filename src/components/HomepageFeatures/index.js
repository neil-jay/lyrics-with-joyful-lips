import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <section className={styles.features} aria-label="Website Features">
      <div className="container">
        <div className="row">
          <article className="col col--6 padding--lg">
            <Heading as="h2">About</Heading>
            <div itemScope itemType="https://schema.org/Book">
              <meta itemProp="author" content="Fr. Jean L. Mercier" />
              <meta itemProp="bookEdition" content="Twelfth Revised Edition" />
              <meta itemProp="bookFormat" content="Catholic Hymnal" />
              <meta itemProp="inLanguage" content="en" />
              <p itemProp="description">
                Welcome! This site provides Catholic hymn lyrics from
                <span itemProp="name"> With Joyful Lips</span>, authored by
                <span itemProp="author"> Fr. Jean L. Mercier</span>. The lyrics are formatted
                for easy use in church services and worship presentations.
              </p>
              <p>
                All content is from the <span itemProp="bookEdition">Twelfth Revised Edition</span>,
                presented in a clean, copy-friendly format for worship leaders.
              </p>
            </div>
          </article>
          <article className="col col--6 padding--lg">
            <Heading as="h2">How to Use</Heading>
            <div className={styles.howToUse}>
              <nav aria-label="Usage Instructions">
                <ol>
                  <li><strong>Search:</strong> Use the search bar to find specific hymns quickly</li>
                  <li><strong>Browse:</strong> Navigate through organized sections of hymns</li>
                  <li><strong>Copy:</strong> Select the lyrics (Ctrl+C or ⌘+C)</li>
                  <li><strong>Paste:</strong> Use Ctrl+Shift+V (Windows) or ⌘+Shift+V (Mac) to remove formatting</li>
                  <li><strong>Present:</strong> Ready for church presentations and handouts</li>
                </ol>
              </nav>
              <p className={styles.copyright}>
                <small>
                  © Lyrics from With Joyful Lips by Fr. Jean L. Mercier, Twelfth Revised Edition.
                </small>
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <section className={styles.features} aria-label="Website Features">
      <div className="container">
        <div className="row">
          <article className="col col--6 padding--lg">
            <Heading as="h1">About With Joyful Lips</Heading>
            <div itemScope itemType="https://schema.org/Book">
              <meta itemProp="author" content="Fr. Jean L. Mercier" />
              <meta itemProp="bookEdition" content="Twelfth Revised Edition" />
              <meta itemProp="bookFormat" content="Hymnal" />
              <p itemProp="description">
                Welcome to With Joyful Lips Lyrics! This site is dedicated to providing easy access
                to the lyrics from <span itemProp="name">With Joyful Lips</span>, a popular hymnal authored by
                <span itemProp="author">Fr. Jean L. Mercier</span>. Designed for both worship and
                educational purposes, these lyrics offer a convenient, text-based format suitable for
                churches, religious gatherings, and anyone looking to enrich their spiritual journey
                with inspiring hymns.
              </p>
              <p>
                The lyrics available on this site are drawn from the <span itemProp="bookEdition">
                Twelfth Revised Edition</span> of With Joyful Lips, and are displayed in a simple,
                readable format for ease of use.
              </p>
            </div>
          </article>
          <article className="col col--6 padding--lg">
            <Heading as="h2">How to Use</Heading>
            <div className={styles.howToUse}>
              <nav aria-label="Usage Instructions">
                <ol>
                  <li><strong>Find Hymns:</strong> Use the search bar at the top to find specific hymns</li>
                  <li><strong>Browse Collection:</strong> Click "Browse All Hymns" to explore the complete collection</li>
                  <li><strong>Copy Lyrics:</strong> Select and copy the lyrics you need (Ctrl+C)</li>
                  <li><strong>Paste Without Formatting:</strong> Use Ctrl+Shift+V to paste without formatting</li>
                  <li><strong>Create Presentations:</strong> Perfect for church services and worship presentations</li>
                </ol>
              </nav>
              <p className={styles.copyright}>
                <small>
                  Note: The hymn lyrics are copyrighted material from With Joyful Lips Book by Fr. Jean L. Mercier.
                </small>
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

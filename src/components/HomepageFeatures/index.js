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
                Welcome to With Joyful Lips Lyrics! This comprehensive resource provides Catholic hymn lyrics from
                <span itemProp="name"> With Joyful Lips</span>, authored by
                <span itemProp="author"> Fr. Jean L. Mercier</span>. The lyrics are carefully formatted
                for seamless integration into church services and worship presentations, serving as a convenient digital hymn book for modern worship needs.
              </p>
              <p>
                All content is sourced from the <span itemProp="bookEdition">Twelfth Revised Edition</span>,
                presented in a clean, copy-friendly format designed for worship leaders and church presentation teams.
                Our digital collection includes traditional Catholic hymns and sacred songs suitable for various occasions throughout the liturgical year.
              </p>
              <p>
                Whether you're preparing for Sunday Mass, feast days, or other celebrations,
                this organized collection makes it easy to find the perfect hymn. From Advent to Easter,
                and through Ordinary Time, you'll find lyrics for every liturgical season.
              </p>
            </div>
          </article>
          <article className="col col--6 padding--lg">
            <Heading as="h2">How to Use This Digital Hymnal</Heading>
            <div className={styles.howToUse}>
              <nav aria-label="Usage Instructions">
                <ol>
                  <li><strong>Search Efficiently:</strong> Use the search bar to find specific hymns by title or theme</li>
                  <li><strong>Browse Categories:</strong> Navigate through organized sections of seasonal and thematic hymns</li>
                  <li><strong>Copy Seamlessly:</strong> Select the lyrics (Ctrl+C or ⌘+C) in our clean format</li>
                  <li><strong>Paste Without Formatting:</strong> Use Ctrl+Shift+V (Windows) or ⌘+Shift+V (Mac) for clean text</li>
                  <li><strong>Present Professionally:</strong> Create beautiful church presentations with properly formatted lyrics</li>
                </ol>
              </nav>
              <p>
                Our digital hymnal supports Catholic worship communities by making it easier to prepare
                meaningful liturgical celebrations. Find hymns categorized by theme, season, and occasion
                for every liturgical need.
              </p>
              <p className={styles.copyright}>
                <small>
                  © Lyrics from With Joyful Lips by Fr. Jean L. Mercier, Twelfth Revised Edition.
                  All rights reserved.
                </small>
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

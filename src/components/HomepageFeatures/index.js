import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--6 padding--lg">
            <Heading as="h2">About With Joyful Lips</Heading>
            <p>
              Welcome to With Joyful Lips Lyrics! This site is dedicated to providing easy access
              to the lyrics from With Joyful Lips, a popular hymnal authored by Fr. Jean L. Mercier.
              Designed for both worship and educational purposes, these lyrics offer a convenient,
              text-based format suitable for churches, religious gatherings, and anyone looking to
              enrich their spiritual journey with inspiring hymns.
            </p>
            <p>
              The lyrics available on this site are drawn from the Twelfth Revised Edition of
              With Joyful Lips, and are displayed in a simple, readable format for ease of use.
            </p>
          </div>
          <div className="col col--6 padding--lg">
            <Heading as="h2">How to Use</Heading>
            <div className={styles.howToUse}>
              <ol>
                <li><strong>Find Hymns:</strong> Use the search bar at the top to find specific hymns</li>
                <li><strong>Browse Collection:</strong> Click "Browse All Hymns" to explore the complete collection</li>
                <li><strong>Copy Lyrics:</strong> Select and copy the lyrics you need (Ctrl+C)</li>
                <li><strong>Paste Without Formatting:</strong> Use Ctrl+Shift+V to paste without formatting</li>
                <li><strong>Create Presentations:</strong> Perfect for church services and worship presentations</li>
              </ol>
              <p className={styles.copyright}>
                Note: The hymn lyrics are copyrighted material from With Joyful Lips Book by Fr. Jean L. Mercier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

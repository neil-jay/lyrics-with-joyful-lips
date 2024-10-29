import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy Access to Catholic Hymns',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Instantly access Catholic hymns for any occassion. Perfect companion at any time.
      </>
    ),
  },
  {
    title: 'Digital Hymnbook for Every Service',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Use this digital hymn resource for easy hymn display in services, offering plain text lyrics for presentations.
      </>
    ),
  },
  {
    title: 'Simple, Convenient Worship Lyrics',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Search and find lyrics with ease. Have a better experience with this digital hymnbook.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h2 className="h2Features">
          {title}
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

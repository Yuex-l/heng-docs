import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Gif: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Swimming',
    Gif: 'img/sparky_swimming.gif',
    description: (
      <></>
    ),
  },
  {
    title: 'Jumping',
    Gif: 'img/sparky_jumping.gif',
    description: (
      <></>
    ),
  },
  {
    title: 'Dancing',
    Gif: 'img/sparky_dance.gif',
    description: (
      <></>
    ),
  },
];

function Feature({title, Gif, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <Heading as="h3" style={{ color: 'white', marginTop: '0px', marginBottom: '20px' }}>{title}</Heading>
        <img src={Gif} alt={title} className={styles.featureGif}  role="img" style={{ borderRadius: '10px' }}/>
      </div>
      <div className="text--center padding-horiz--md">
        <p>{description}</p>
      </div>
    </div>
  );
}

function Feature1({title, Gif, description}: FeatureItem) {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center">
        <img src={Gif} alt={title} className={styles.featureGif} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures1(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className={clsx('hero hero')} style={{ backgroundColor: 'rgb(28 28 28)' }}>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

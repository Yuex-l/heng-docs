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
    title: 'Precise Leg Movement',
    Gif: 'img/leg_circle.gif',
    description: (
    <>SPARKY's legs have an extensive movement range.The entire body possesses 14 degrees otfreedom, providing a remarkable workspace. its incredibly precise leg mobility allows it todraw a perfect circle.</>
    ),
  },
];

function Feature({ title, Gif, description }) {
  return (
    <div className={clsx('col col--12')}>
      <div className="feature-content" style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div className="description-container" style={{ marginRight: '20px', flexGrow: 1 }}>
          <Heading as="h1" style={{ color: 'white', marginTop: '20px', marginBottom: '60px' }}>{title}</Heading>
          <Heading as="p" style={{color: 'white', marginBottom: '0px'}}>
          {description}</Heading>
        </div>
        <img src={Gif} alt={title} className={clsx(styles.featureGif, 'img-right')} style={{ borderRadius: '10px' }} />
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

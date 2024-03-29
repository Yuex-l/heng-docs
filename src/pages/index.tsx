import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageFeatures1 from '@site/src/components/HomepageFeatures1';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://sparky.hengbot.com/pages/sparky">
            Buy Now⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}


export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <main>
        <HomepageFeatures1 />
      </main>
      <h1 style={{margin: 20}}>
        <Translate description="The homepage main heading">
          Welcome to my Docusaurus translated site!
        </Translate>
      </h1>
    </Layout>
  );
}

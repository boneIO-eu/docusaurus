import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import { Roadmap } from '../components/Roadmap';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <span className={clsx(styles.bonePart)}>bone</span>
          <span className={clsx(styles.ioPart)}>IO</span>
          {/* {siteConfig.title} */}
        </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            How to install it on BoneIO
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home ${siteConfig.title}`}
      description="boneIO Smart Home Open Source Automation Project"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Roadmap />
      </main>
    </Layout>
  );
}

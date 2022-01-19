import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Geometric Fractals',
    Svg: require('../../static/img/sierpinski.svg').default,
    description: (
      <>
        We will use geometric recursion and rule-based algorithms, called L-systems, to produce geometric fractals.
      </>
    ),
  },
  {
    title: 'Strange Attactors',
    Svg: require('../../static/img/logo.svg').default,
    description: (
      <>
        We will investigate locally unstable attactors of dynamical systems with fractal structure and globally attractive orbits.
      </>
    ),
  },
  {
    title: 'Physical Systems',
    Svg: require('../../static/img/spinodal.svg').default,
    description: (
      <>
        We will seed the evolution of physical systems, such as reaction/diffusion systems commonly found in nature, to obtain striking results.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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

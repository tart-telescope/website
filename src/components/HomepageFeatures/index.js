import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        TART was designed from the ground up to be easily installed and
        used to get your radio astronomy projects up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        TART lets you modify, access and explore every part of a modern aperture
        synthesis radio telescope. Raw data can be examined, the array layout modified and more..
      </>
    ),
  },
  {
    title: 'Collaborate',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        The TART team on has an array of interesting research projects at all levels from citizen science through undergraduate, to M.Sc and Ph.D projects. New members are welcome, and we can help with joint supervision of student projects with one of the partner insitutions. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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

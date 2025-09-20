import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Machine Learning',
    Svg: require('@site/static/img/machine-learning.svg').default,
    description: (
      <>
        데이터 분석, 모델링 기법, 평가 지표 등
        머신러닝의 핵심 개념과 예제를 정리했습니다.
      </>
    ),
  },
  {
    title: 'Deep Learning',
    Svg: require('@site/static/img/deep-learning.svg').default,
    description: (
      <>
        신경망, 최적화, 최신 아키텍처까지
        딥러닝의 핵심 개념과 예제를 정리했습니다.
      </>
    ),
  },
  {
    title: 'DevOps & Cloud Infrastructure',
    Svg: require('@site/static/img/kubernetes.svg').default,
    description: (
      <>
        쿠버네티스, CI/CD, 클라우드 환경 구축 등
        실무 메모와 설정 방법을 기록합니다.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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

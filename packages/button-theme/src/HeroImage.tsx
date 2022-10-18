import React from 'react';
import { applyTheme, StyleConfig } from '@button-inc/component-library/HeroImage';
import styles from './styles';

const heroImageStyles = {
  ...styles,
  shared: {
    container: `
      padding: 2rem 4rem;
    `,
    innercontainer: `
      background: rgba(36, 118, 237, 0.8);
      padding: 1rem 2rem;
      color: #fff;

      & a {
        color: #fff;
      }
    `,
  },
};

const config: StyleConfig = {
  defaultProps: {},
  staticProps: [],
};

export const BaseHeroImage = applyTheme(heroImageStyles, config);

export default function HeroImage(props: any) {
  const { children, ...rest } = props;

  return <BaseHeroImage {...rest}>{children}</BaseHeroImage>;
}

import React from 'react';
import { applyTheme, StyleConfig } from '@button-inc/component-library/HeroImage';
import styles from './styles';

const config: StyleConfig = {
  defaultProps: {},
  staticProps: [],
};

export const BaseHeroImage = applyTheme(styles, config);

export default function HeroImage(props: any) {
  const { children, ...rest } = props;

  return <BaseHeroImage {...rest}>{children}</BaseHeroImage>;
}

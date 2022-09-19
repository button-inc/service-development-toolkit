import React from 'react';
import { applyTheme, StyleConfig } from '@button-inc/component-library/Callout';
import styles from './styles';

const config: StyleConfig = {
  defaultProps: {
    variant: 'primary',
    size: 'medium',
  },
  staticProps: [],
};

export const BaseCallout = applyTheme(styles, config);

export default function Callout(props: any) {
  const { content, children, ...rest } = props;

  return <BaseCallout {...rest}>{content ? <p>{content}</p> : children}</BaseCallout>;
}

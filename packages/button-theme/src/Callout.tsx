import React from 'react';
import { applyTheme, StyleConfig, Props } from '@button-inc/component-library/Callout';
import styles from './styles';

const config: StyleConfig = {
  defaultProps: {
    variant: 'primary',
    size: 'medium',
  },
  staticProps: [],
};

export const BaseCallout = applyTheme(styles, config);

interface ExtendedProps extends Props {
  content?: string;
}

export default function Callout(props: ExtendedProps) {
  const { content, children, ...rest } = props;

  return <BaseCallout {...rest}>{content ? <p>{content}</p> : children}</BaseCallout>;
}

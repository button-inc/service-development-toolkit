import React from 'react';
import { applyTheme, StyleConfig } from '@button-inc/component-library/Card';
import styles from './styles';

const config: StyleConfig = {
  defaultProps: {},
  staticProps: [],
};

export const BaseCard = applyTheme(styles, config);

export default function Card(props: any) {
  const { title, children, ...rest } = props;

  return (
    <BaseCard {...rest}>
      <BaseCard.Header>{title}</BaseCard.Header>
      <BaseCard.Content>{children}</BaseCard.Content>
    </BaseCard>
  );
}

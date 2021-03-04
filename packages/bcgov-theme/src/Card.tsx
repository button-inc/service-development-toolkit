import React from 'react';
import styled from 'styled-components';
import noop from 'lodash/noop';
import { applyTheme, StyleConfig } from '@button-inc/component-library/Card';
import { Plus, Minus, FaSVG } from './fontawesome';

const styles = {
  shared: {
    container: `
      font-size: 1rem;
    `,
    header: `
      color: #fff;
      background: #38598A;
      padding: 1.2em;
    `,
    content: `
      min-height: 5em;
      background: #F2F2F2;
      padding: 1.5em 1.2em;
    `,
  },
};

const config: StyleConfig = {
  defaultProps: {},
  staticProps: [],
};

export const BaseCard = applyTheme(styles, config);

export default function Card(props: any) {
  const { title, children } = props;

  return (
    <BaseCard>
      <BaseCard.Header>{title}</BaseCard.Header>
      <BaseCard.Content>{children}</BaseCard.Content>
    </BaseCard>
  );
}

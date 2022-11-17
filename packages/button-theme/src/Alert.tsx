import React from 'react';
import { applyTheme, StyleConfig, Props } from '@button-inc/component-library/Alert';
import { CheckCircle, InfoCircle, ExclamationTriangle, ExclamationCircle, FaSVG } from './fontawesome';
import styles from './styles';

const config: StyleConfig = {
  defaultProps: {
    variant: 'info',
    size: 'medium',
    flex: true,
  },
  staticProps: [],
};

const childStyles = {
  group: {
    align: {
      left: `
        margin-right: auto;
    `,
      right: `
        margin-left: auto;
    `,
    },
  },
};

export const BaseAlert = applyTheme(styles, config, childStyles);

const getIconPath = (variant: string) => {
  switch (variant) {
    case 'success':
      return CheckCircle;
    case 'info':
      return InfoCircle;
    case 'warning':
      return ExclamationTriangle;
    default:
      return ExclamationCircle;
  }
};

export default function Alert(props: Props) {
  return (
    <BaseAlert {...props}>
      <BaseAlert.Group>
        <FaSVG>
          <path fill="currentColor" d={getIconPath(props.variant)} />
        </FaSVG>
      </BaseAlert.Group>
      <BaseAlert.Content>{props.content ? props.content : props.children}</BaseAlert.Content>
      {props.closable && (
        <BaseAlert.Group align="right">
          <BaseAlert.Close>close</BaseAlert.Close>
        </BaseAlert.Group>
      )}
    </BaseAlert>
  );
}

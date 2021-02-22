import React from 'react';
import styled from 'styled-components';
import { applyTheme } from 'component-library/Notification';
import { CheckCircle, InfoCircle, ExclamationTriangle, ExclamationCircle, FaSVG } from './fontawesome';

const styles = {
  shared: {
    container: `
      font-family: 'BC Sans', 'Noto Sans', Arial, 'sans serif';
      line-height: 1.5em;
      border: 1px solid transparent;
      border-radius: 4px;
      font-weight: 700;

      & a {
        text-decoration: underline;
      }
    `,
    close: `
      cursor: pointer !important;
      text-align: center;
      text-decoration: none;
      border-radius: 0.2rem;
    `,
  },
  size: {
    small: {
      container: `
        padding: 0.8rem 0.4rem;
      `,
      content: `
        font-size: 0.8rem;
      `,
      group: `
        font-size: 0.8rem;
      `,
      close: `
        font-size: 0.8rem;
        padding: 0.2rem;
      `,
    },
    medium: {
      container: `
        padding: 1rem 0.5rem;
      `,
      content: `
        font-size: 1rem;
      `,
      group: `
        font-size: 1rem;
      `,
      close: `
        font-size: 1rem;
        padding: 0.4rem;
      `,
    },
    large: {
      container: `
        padding: 1.2rem 0.6rem;
      `,
      content: `
        font-size: 1.2rem;
      `,
      group: `
        font-size: 1.2rem;
      `,
      close: `
        font-size: 1.2rem;
        padding: 0.6rem;
      `,
    },
  },
  variant: {
    success: {
      container: `
        background-color: #dff0d8;
        border-color: #d6e9c6;
        color: #2d4821;

        & a {
          color: #2b542c;
        }
      `,
      content: `
        color: #2d4821;
      `,
      close: `
        color: #2d4821;
        border: 1px solid #2d4821;

        &:hover {
          background: #2d4821;
          color: #fff;
        }
      `,
      group: `
        color: #2d4821;
      `,
    },
    info: {
      container: `
        background-color: #d9eaf7;
        border-color: #afd3ee;
        color: #313132;

        & a {
          color: #1a5a96;
        }
      `,
      content: `
        color: #313132;
      `,
      close: `
        color: #313132;
        border: 1px solid #313132;

        &:hover {
          background: #313132;
          color: #fff;
        }
      `,
      group: `
        color: #313132;
      `,
    },
    warning: {
      container: `
        background-color: #f9f1c6;
        border-color: #faebcc;
        color: #6c4a00;

        & a {
          color: #66512c;
        }
      `,
      content: `
        color: #66512c;
      `,
      close: `
        color: #66512c;
        border: 1px solid #66512c;

        &:hover {
          background: #66512c;
          color: #fff;
        }
      `,
      group: `
        color: #66512c;
      `,
    },
    danger: {
      container: `
        background-color: #f2dede;
        border-color: #ebccd1;
        color: #a12622;

        & a {
          color: #843534;
        }
      `,
      content: `
        color: #a12622;
      `,
      close: `
        color: #a12622;
        border: 1px solid #a12622;

        &:hover {
          background: #a12622;
          color: #fff;
        }
      `,
      group: `
        color: #a12622;
      `,
    },
  },
  flex: {
    container: `
      display: flex;
    `,
    group: `
      margin: auto 0.5rem;
    `,
  },
};

const config = {
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

export const BaseAlert: any = applyTheme(styles, config, childStyles);

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

export default function Component(props: any) {
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

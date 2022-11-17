import React from 'react';
import { applyTheme, StyleConfig, Props } from '@button-inc/component-library/Notification';

export const styles = {
  shared: {
    container: `
      border-left-style: solid;
      padding: 1.4em;
      border-left-width: 0.7em;
    `,
  },
  size: {
    small: {
      container: `
        font-size: 0.8rem;
      `,
    },
    medium: {
      container: `
        font-size: 1rem;
      `,
    },
    large: {
      container: `
        font-size: 1.2rem;
      `,
    },
  },
  variant: {
    primary: {
      container: `
        background-color: #f2f2f2;
        border-left-color: #38598a;
      `,
    },
  },
};

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

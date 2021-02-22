import React from 'react';
import { applyTheme } from 'component-library/Notification';

const styles = {
  shared: {
    container: `
      border-left-style: solid;
    `,
  },
  size: {
    small: {
      container: `
        padding: 1.3rem;
        border-left-width: 0.6rem;

        & p {
          font-size: 0.9rem;
        }
      `,
    },
    medium: {
      container: `
        padding: 1.4rem;
        border-left-width: 0.7rem;

        & p {
          font-size: 1rem;
        }
      `,
    },
    large: {
      container: `
        padding: 1.5rem;
        border-left-width: 0.8rem;

        & p {
          font-size: 1.1rem;
        }
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

const config = {
  defaultProps: {
    variant: 'primary',
    size: 'medium',
  },
  staticProps: [],
};

export const BaseCallout: any = applyTheme(styles, config);

export default function Component(props: any) {
  const { content, children, ...rest } = props;

  return <BaseCallout {...rest}>{content ? <p>{content}</p> : children}</BaseCallout>;
}

import React from 'react';
import { applyTheme, StyleConfig, Props } from '@button-inc/component-library/FilePicker';
import Button from './Button';
import { Upload, FaSVG } from './fontawesome';

export const styles = {
  shared: {
    label: `
      display: block;
      font-weight: 600;
      margin-bottom: 0.2777em;
    `,
  },
  size: {
    small: {
      label: `
        font-size: 0.8rem;
      `,
    },
    medium: {
      label: `
        font-size: 1rem;
      `,
    },
    large: {
      label: `
        font-size: 1.2rem;
      `,
    },
  },
};

const config: StyleConfig = {
  defaultProps: {
    size: 'medium',
  },
  staticProps: ['fullWidth'],
  wrapperExtraStyle: `
    &:hover > button {
      text-decoration: underline;
      opacity: 0.80;
    }

    &:focus-within {
      outline: 4px solid #3B99FC;
      outline-offset: 1px;
    }
  `,
};

export const BaseFilePicker = applyTheme(styles, config);

interface ExtendedProps extends Props {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

export default function FilePicker(props: ExtendedProps) {
  const { children, ...rest } = props;
  const { size, disabled } = rest;

  return (
    <BaseFilePicker {...rest}>
      <Button size={size} disabled={disabled} tabIndex={-1}>
        <FaSVG>
          <path fill="currentColor" d={Upload} />
        </FaSVG>
        &nbsp;
        {children}
      </Button>
    </BaseFilePicker>
  );
}

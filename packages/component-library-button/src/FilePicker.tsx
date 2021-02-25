import React from 'react';
import { applyTheme, StyleConfig } from 'component-library/FilePicker';
import Button from './Button';
import { Upload, FaSVG } from './fontawesome';

const styles = {
  shared: {
    label: `
      display: block;
      font-weight: 600;
      margin-bottom: 0.277em;
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
  required: {
    label: `
      &:after {
        margin: -0.2em 0em 0em 0.2em;
        content: '*';
        color: #DB2828;
      }
    `,
  },
};

const config: StyleConfig = {
  defaultProps: {
    size: 'medium',
  },
  staticProps: ['fullWidth'],
  wrapperExtraStyle: `
    &:hover > button {
      color: #fff;
      background-color: #000;
      text-decoration: underline;
    }
  `,
};

export const BaseFilePicker: any = applyTheme(styles, config);

export default function Component(props: any) {
  const { children, ...rest } = props;
  const { size, disabled } = rest;

  return (
    <BaseFilePicker {...rest}>
      <Button variant="dark" size={size} disabled={disabled}>
        <FaSVG>
          <path fill="currentColor" d={Upload} />
        </FaSVG>
        &nbsp;
        {children}
      </Button>
    </BaseFilePicker>
  );
}

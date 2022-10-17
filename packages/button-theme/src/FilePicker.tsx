import React from 'react';
import { applyTheme, StyleConfig } from '@button-inc/component-library/FilePicker';
import Button from './Button';
import { Upload, FaSVG } from './fontawesome';
import styles from './styles';

export const filepickerStyles = {
  ...styles,
  // shared styles are applied to all variants
  shared: {
    label: `
      display: block;
      font-weight: 600;
      margin-bottom: 0.277em;
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

export const BaseFilePicker = applyTheme(filepickerStyles, config);

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

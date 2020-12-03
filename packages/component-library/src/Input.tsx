import React from 'react';
import { applyThemeFactory } from './helpers';

type InputProps = {
  large?: boolean;
  small?: boolean;
  type?: 'email' | 'url' | 'number' | 'password' | 'tel' | 'text';
};

interface Styles {
  shared?: string;
  large?: string;
  small?: string;
}

const allowedTypes = ['email', 'number', 'password', 'tel', 'text', 'url'];

function restrictInputTypeProps(props) {
  if (allowedTypes.includes(props.type)) {
    return props;
  }
  return { ...props, type: undefined };
}

const defaultStyles: Styles = {
  shared: `
  `,
  large: `
    line-height: 39px;
    font-size: 1.5rem;
  `,
  small: `
    line-height: 13px;
    font-size: 0.75rem;
  `,
};

const BaseInput = props => {
  const newProps = restrictInputTypeProps(props);
  return <input {...newProps} />;
};

export const applyTheme = applyThemeFactory<Styles, InputProps>(defaultStyles, BaseInput);

const Input = applyTheme(defaultStyles);

export default Input;

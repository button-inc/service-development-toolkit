import React from 'react';
import styled from 'styled-components';
import getCssFromDisplayProps from './helpers';

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

export const applyTheme = (styles: Styles) => {
  const stylesToApply = { ...defaultStyles, ...styles };

  const defaultInput = styled(BaseInput)`
    ${stylesToApply.shared}
  `;

  return styled(defaultInput)<InputProps>`
    ${(props: InputProps) => {
      const newProps = restrictInputTypeProps(props);
      return getCssFromDisplayProps<InputProps, Styles>(newProps, stylesToApply);
    }}
  `;
};

const Input = applyTheme(defaultStyles);

export default Input;

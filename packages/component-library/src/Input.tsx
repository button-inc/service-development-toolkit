import styled from 'styled-components';
import getCssFromDisplayProps from './helpers';
import React from 'react';
import GlobalStyles from './GlobalStyles';
import { StyledComponentProps } from 'styled-components';

type InputProps = {
  large?: boolean;
  small?: boolean;
  type?: "email" | "url" | "number" | 'password' | 'tel' | 'text'
};

interface Styles {
  shared?: string;
  large?: string;
  small?: string;
}

const allowedTypes = [
  'email',
  'number',
  'password',
  'tel',
  'text',
  'url'
]

function restrictInputTypeProps(props){
  if (allowedTypes.includes(props.type)){
    return props
  } else {
    return {...props, type: undefined}
  }
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
  `
};

export const applyTheme = (styles: Styles) => {
  const stylesToApply = { ...defaultStyles, ...styles };

  const defaultInput = styled.input`
    ${stylesToApply.shared}
  `;

  return styled(defaultInput)<InputProps>`
    ${(props: InputProps) => {
      return getCssFromDisplayProps<InputProps, Styles>(props, stylesToApply);
    }}
  `;
};

const Input = applyTheme(defaultStyles)

export default function(props: InputProps & React.HTMLProps<HTMLInputElement> ){
  const newProps = restrictInputTypeProps(props);
  return (
    <Input {...newProps}></Input>
  )}
;

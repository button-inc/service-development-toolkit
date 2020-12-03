import React from 'react';
import randomstring from 'randomstring';
import { SizeProps } from './interface/sizeProps';
import { SizeStyles } from './interface/sizeStyles';
import { applyThemeFactory } from './helpers';

interface CheckboxProps extends SizeProps {
  label: string;
  value: string;
  disabled?: boolean;
  name?: string;
}

interface Styles extends SizeStyles {
  defaultProps?: object;
  shared?: string;
}

const defaultStyles: Styles = {
  shared: ``,
  mini: `transform: scale(0.25);`,
  tiny: `transform: scale(0.5);`,
  small: `transform: scale(0.75);`,
  medium: `transform: scale(1);`,
  large: `transform: scale(1.25);`,
  big: `transform: scale(1.5);`,
  huge: `transform: scale(2);`,
};

const BaseCheckbox = props => {
  let { id } = props;
  const { label } = props;
  if (!id) {
    id = randomstring.generate(10);
  }
  return (
    <>
      <input {...props} id={id} type="checkbox" />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

export const applyTheme = applyThemeFactory<Styles, CheckboxProps>(defaultStyles, BaseCheckbox);

const Checkbox = applyTheme(defaultStyles);

export default Checkbox;

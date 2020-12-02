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
  shared?: string;
}

const defaultStyles: Styles = {
  shared: ``,
  mini: ``,
  tiny: ``,
  small: ``,
  medium: ``,
  large: ``,
  big: ``,
  huge: ``,
};

const BaseCheckbox = props => {
  let { id } = props;
  const { label } = props;
  if (!id) {
    id = randomstring.generate(10);
  }
  const newProps = { ...props, onChange: null, onClick: null };
  return (
    <>
      <input {...newProps} id={id} type="checkbox" />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

export const applyTheme = applyThemeFactory<Styles, CheckboxProps>(defaultStyles, BaseCheckbox);

const Checkbox = applyTheme(defaultStyles);

export default Checkbox;

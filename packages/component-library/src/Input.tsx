import React from 'react';
import randomstring from 'randomstring';
import { getStyleBuilder } from './helpers';
import { SizeStyles } from './interface/size';

interface Styles extends SizeStyles {
  shared?: object;
  defaultProps?: object;
}

export interface InputProps {
  disabled?: boolean;
  name?: string;
  size?: string;
  type?: string;
  label?: string;
  fullHeight?: boolean;
  fullWidth?: boolean;
  [propName: string]: any;
}

const defaultStyles: Styles = {
  shared: {
    label: '',
    container: '',
    input: '',
  },
  mini: {
    label: '',
    container: '',
    input: '',
  },
  tiny: {},
  small: {},
  medium: {},
  large: {
    label: '',
    container: '',
    input: '',
  },
  big: {},
  huge: {},
};

const allowedTypes = ['email', 'number', 'password', 'tel', 'text', 'url'];

export const applyTheme = (userStyles: Styles) => {
  const stylesToApply = { ...defaultStyles, ...userStyles };
  const styleBuilder = getStyleBuilder(stylesToApply, ['size', 'fullHeight', 'fullWidth']);

  const Scontainer: any = styleBuilder('div', 'container');
  const Slabel: any = styleBuilder('label', 'label');
  const SInput: any = styleBuilder('input', 'input');

  const BaseComponent = (props: InputProps) => {
    let { id } = props;
    const { label, size, fullHeight, fullWidth, type } = props;
    if (!id) {
      id = randomstring.generate(10);
    }

    const computedType = allowedTypes.includes(type || '') ? type : '';

    return (
      <Scontainer size={size} fullHeight={fullHeight} fullWidth={fullWidth}>
        <SInput {...props} type={computedType} id={id} />
        {label && (
          <Slabel size={size} htmlFor={id}>
            {label}
          </Slabel>
        )}
      </Scontainer>
    );
  };

  return BaseComponent;
};

const Input = applyTheme(defaultStyles);

export default Input;

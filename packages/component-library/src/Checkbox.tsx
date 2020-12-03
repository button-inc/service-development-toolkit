import React from 'react';
import randomstring from 'randomstring';
import { SizeStyles } from './interface/sizeStyles'
import styled from 'styled-components';

interface CheckboxProps {
  label?: string;
  value?: string;
  disabled?: boolean;
  name?: string;
  size?: string;
  id?: string;
}

interface Styles extends SizeStyles {
  defaultProps?: object;
  shared?: object;
}

const defaultStyles: Styles = {
  shared: {
    label: '',
    container: ''
  },
  mini: {
    label: '',
    container: ''
  },
  tiny: {},
  small: {},
  medium: {},
  large: {
    label: '',
    container: ''
  },
  big: {},
  huge: {},
};

const styleElement = (tag: string, stylesToApply: any, userStyles: any, type:string ) => {
  const sharedStyles = stylesToApply.shared;
  return styled[tag]`
  ${(props: any) => {
    const sizeProp = (props.size && userStyles[props.size]) || userStyles.defaultProps?.size;
    return (sharedStyles[type] || '') + ((stylesToApply[sizeProp] && stylesToApply[sizeProp][type]) || '');
  }}
`
}

export const applyTheme = userStyles => {
  const stylesToApply = { ...defaultStyles, ...userStyles };

  const Scontainer: any = styleElement('div', stylesToApply, userStyles, 'container')
  const Slabel: any = styleElement('label', stylesToApply, userStyles, 'label')
  const Scheckbox: any = styleElement('input', stylesToApply, userStyles, 'input')

  const BaseComponent = (props: CheckboxProps) => {
    let { id } = props;
    const { label } = props;
    if (!id) {
      id = randomstring.generate(10);
    }
    return (
      <Scontainer size={props.size}>
        <Scheckbox {...props} type="checkbox" id={id}/>
        <Slabel size={props.size} htmlFor={id}>
          {label}
        </Slabel>
      </Scontainer>
    );
  };

  return BaseComponent;
};

const Checkbox = applyTheme(defaultStyles);

export default Checkbox;

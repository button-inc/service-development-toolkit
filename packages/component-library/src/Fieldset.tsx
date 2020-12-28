import React from 'react';
import styled from 'styled-components';
import { SizeStyles } from './interface/sizeStyles';

interface Styles extends SizeStyles {
  shared?: object;
}

interface FieldsetProps {
  disabled?: boolean;
  name?: string;
  size?: string;
  fullHeight?: boolean;
  fullWidth?: boolean;
  title?: string;
  children?: any;
}

const defaultStyles: Styles = {
  shared: {
    legend: '',
    container: '',
  },
  mini: {
    legend: '',
    container: '',
  },
  tiny: {},
  small: {},
  medium: {},
  large: {
    legend: '',
    container: '',
  },
  big: {},
  huge: {},
};

const styleElement = (tag: string, stylesToApply: any, userStyles: any, type: string) => {
  const sharedStyles = stylesToApply.shared;
  return styled[tag]`
    ${(props: any) => {
      let sizeProp;
      //Revert to default size if given size not defined in theme
      if (props.size && userStyles[props.size]) {
        sizeProp = props.size;
      } else {
        sizeProp = userStyles.defaultProps?.size
      }
      return (sharedStyles[type] || '') + ((stylesToApply[sizeProp] && stylesToApply[sizeProp][type]) || '');
    }}
  `;
};

export const applyTheme = userStyles => {
  const stylesToApply = { ...defaultStyles, ...userStyles };

  const Sfieldset: any = styleElement('fieldset', stylesToApply, userStyles, 'container');
  const Slegend: any = styleElement('legend', stylesToApply, userStyles, 'legend');

  const BaseComponent = (props: FieldsetProps) => {
    const {size} = props;
    return (
      <Sfieldset size={size}>
        {props.title && (
          <Slegend size={size}>{props.title}</Slegend>
        )}
        {props.children}
      </Sfieldset>
    );
  };

  return BaseComponent;
};

const Checkbox = applyTheme(defaultStyles);

export default Checkbox;

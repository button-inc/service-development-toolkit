import React from 'react';
import { getStyleBuilder } from './helpers';
import { SizeStyles } from './interface/size';

interface Styles extends SizeStyles {
  shared?: object;
}

export interface FieldsetProps {
  disabled?: boolean;
  name?: string;
  size?: string;
  fullHeight?: boolean;
  fullWidth?: boolean;
  title?: string;
  children?: any;
  [propName: string]: any;
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

export const applyTheme = (userStyles: Styles) => {
  const stylesToApply = { ...defaultStyles, ...userStyles };
  const styleBuilder = getStyleBuilder(stylesToApply, ['size', 'fullHeight', 'fullWidth']);

  const Sfieldset: any = styleBuilder('fieldset', 'container');
  const Slegend: any = styleBuilder('legend', 'legend');

  const BaseComponent = (props: FieldsetProps) => {
    const { size, title, children } = props;
    return (
      <Sfieldset {...props}>
        {title && <Slegend size={size}>{title}</Slegend>}
        {children}
      </Sfieldset>
    );
  };

  return BaseComponent;
};

const Fieldset = applyTheme(defaultStyles);

export default Fieldset;

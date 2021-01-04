import React from 'react';
import { styleElement } from './helpers';
import { SizeStyles } from './interface/size';

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

export const applyTheme = userStyles => {
  const stylesToApply = { ...defaultStyles, ...userStyles };

  const Sfieldset: any = styleElement('fieldset', stylesToApply, 'container', true);
  const Slegend: any = styleElement('legend', stylesToApply, 'legend');

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

const Checkbox = applyTheme(defaultStyles);

export default Checkbox;

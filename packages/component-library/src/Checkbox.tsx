import React from 'react';
import randomstring from 'randomstring';
import { getStyleBuilder } from './helpers';
import { SizeStyles } from './interface/sizeStyles';

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
    container: '',
  },
  mini: {
    label: '',
    container: '',
  },
  tiny: {},
  small: {},
  medium: {},
  large: {
    label: '',
    container: '',
  },
  big: {},
  huge: {},
};

export const applyTheme = (userStyles: Styles) => {
  const stylesToApply = { ...defaultStyles, ...userStyles };
  const styleBuilder = getStyleBuilder(stylesToApply, ['size']);

  const Scontainer: any = styleBuilder('div', 'container');
  const Slabel: any = styleBuilder('label', 'label');
  const Scheckbox: any = styleBuilder('input', 'input');

  const BaseComponent = (props: CheckboxProps) => {
    let { id } = props;
    const { label, size } = props;
    if (!id) {
      id = randomstring.generate(10);
    }
    return (
      <Scontainer size={size}>
        <Scheckbox {...props} type="checkbox" id={id} />
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

const Checkbox = applyTheme(defaultStyles);

export default Checkbox;

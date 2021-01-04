import React from 'react';
import randomstring from 'randomstring';
import { SizeStyles } from './interface/size';
import { VariantStyles } from './interface/variant';
import { styleElement } from './helpers';

interface SelectProps {
  id?: string;
  name?: string;
  variant?: string;
  size?: string;
  children?: any;
  defaultValue?: string;
  disabled?: boolean;
}

interface Styles extends VariantStyles, SizeStyles {
  defaultProps?: object;
  shared?: object;
}

const defaultStyles: Styles = {
  defaultProps: {
    variant: 'secondary',
    size: 'medium',
  },
  shared: {
    select: '',
    container: '',
  },
};

export const applyTheme = stylesToApply => {
  const Scontainer: any = styleElement('div', stylesToApply, 'container');
  const Sselect: any = styleElement('select', stylesToApply, 'select');

  const BaseComponent = (props: SelectProps) => {
    let { id } = props;
    const { name, variant, size, children } = props;
    if (!id) {
      id = randomstring.generate(10);
    }

    return (
      <Scontainer variant={variant} size={size}>
        <Sselect {...props} id={id} name={name}>
          {children}
        </Sselect>
      </Scontainer>
    );
  };

  return BaseComponent;
};

const Select = applyTheme(defaultStyles);

export default Select;

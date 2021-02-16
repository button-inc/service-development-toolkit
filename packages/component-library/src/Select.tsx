import React from 'react';
import { createStyleBuilder, createBootstrap } from './helpers';

interface SelectProps {
  id?: string;
  name?: string;
  label?: string;
  children?: any;
  defaultValue?: string;
  disabled?: boolean;
}

export const applyTheme = (styles, config) => {
  const styleBuilder = createStyleBuilder(styles, config);
  const Scontainer = styleBuilder('div', 'container');
  const Slabel = styleBuilder('label', 'label');
  const Swapper = styleBuilder('div', 'wrapper');
  const Sselect = styleBuilder('select', 'input');

  const bootstrap = createBootstrap(styles, 'radio');

  const BaseComponent = (props: SelectProps) => {
    const { id, name, label, ariaLabel, styleProps, children, rest } = bootstrap(props);

    return (
      <Scontainer {...styleProps}>
        {label && (
          <Slabel htmlFor={id} {...styleProps}>
            {label}
          </Slabel>
        )}
        <Swapper {...styleProps}>
          <Sselect aria-label={ariaLabel} {...rest} id={id} name={name}>
            {children}
          </Sselect>
        </Swapper>
      </Scontainer>
    );
  };

  return BaseComponent;
};

const Select = applyTheme({}, { staticProps: ['fullWidth'] });

export default Select;

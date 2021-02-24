import React from 'react';
import { createStyleBuilder, createBootstrap, StyleConfig as BaseStyleConfig } from './helpers';

interface SelectProps {
  id?: string;
  name?: string;
  label?: string;
  value?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: object;
  [key: string]: any;
}

export interface StyleConfig {
  defaultProps?: object;
  staticProps?: string[];
  breakProps?: string[];
  includeWrapper?: boolean;
}

export const applyTheme = (styles, config: BaseStyleConfig) => {
  const styleBuilder = createStyleBuilder(styles, config);

  const Scontainer = styleBuilder('div', 'container');
  const Slabel = styleBuilder('label', 'label');
  const Swapper = config.includeWrapper ? styleBuilder('div', 'wrapper') : null;
  const Sselect = styleBuilder('select', 'input');

  const bootstrap = createBootstrap(styles, 'radio');

  const BaseComponent = (props: SelectProps) => {
    const { id, name, label, ariaLabel, styleProps, children, rest } = bootstrap(props);

    const input = (
      <Sselect aria-label={ariaLabel} {...rest} id={id} name={name}>
        {children}
      </Sselect>
    );

    return (
      <Scontainer {...styleProps}>
        {label && (
          <Slabel htmlFor={id} {...styleProps}>
            {label}
          </Slabel>
        )}
        {Swapper ? <Swapper {...styleProps}>{input}</Swapper> : input}
      </Scontainer>
    );
  };

  return BaseComponent;
};

const Select = applyTheme({}, { staticProps: ['fullWidth'] });

export default Select;

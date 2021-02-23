import React from 'react';
import { createStyleBuilder, createBootstrap } from './helpers';

export interface InputProps {
  id?: string;
  name?: string;
  label?: string;
  type?: 'email' | 'number' | 'password' | 'tel' | 'text' | 'url';
  value?: string;
  disabled?: boolean;
  className?: string;
  style?: object;
  [key: string]: any;
}

export const applyTheme = (styles, config) => {
  const styleBuilder = createStyleBuilder(styles, config);

  const Scontainer = styleBuilder('div', 'container');
  const Slabel = styleBuilder('label', 'label');
  const SInput = styleBuilder('input', 'input');

  const bootstrap = createBootstrap(styles, 'input');

  const BaseComponent = (props: InputProps) => {
    const { id, name, label, ariaLabel, styleProps, rest } = bootstrap(props);

    return (
      <Scontainer {...styleProps}>
        {label && (
          <Slabel htmlFor={id} {...styleProps}>
            {label}
          </Slabel>
        )}
        <SInput aria-label={ariaLabel} {...rest} id={id} name={name} />
      </Scontainer>
    );
  };

  return BaseComponent;
};

const Input = applyTheme({}, {});

export default Input;

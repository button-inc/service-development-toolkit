import React from 'react';
import { createStyleBuilder, createBootstrap } from './helpers';

export interface InputProps {
  disabled?: boolean;
  name?: string;
  size?: string;
  label?: string;
  fullHeight?: boolean;
  fullWidth?: boolean;
  type?: 'email' | 'number' | 'password' | 'tel' | 'text' | 'url';
  [propName: string]: any;
}

export const applyTheme = (styles, config) => {
  const styleBuilder = createStyleBuilder(styles, config);

  const Scontainer: any = styleBuilder('div', 'container');
  const Slabel: any = styleBuilder('label', 'label');
  const SInput: any = styleBuilder('input', 'input');

  const bootstrap = createBootstrap(styles, 'input');

  const BaseComponent = (props: InputProps) => {
    const { id, name, label, ariaLabel, styleProps, rest } = bootstrap(props);

    return (
      <Scontainer {...styleProps}>
        <SInput {...rest} id={id} name={name} />
        {label && (
          <Slabel htmlFor={id} {...styleProps}>
            {label}
          </Slabel>
        )}
      </Scontainer>
    );
  };

  return BaseComponent;
};

const Input = applyTheme({}, {});

export default Input;

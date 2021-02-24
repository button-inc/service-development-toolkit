import React from 'react';
import { createStyleBuilder, createBootstrap, StyleConfig as BaseStyleConfig } from './helpers';

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
  const Sinput = styleBuilder('input', 'input');

  const bootstrap = createBootstrap(styles, 'input');

  const BaseComponent = (props: InputProps) => {
    const { id, name, label, ariaLabel, styleProps, rest } = bootstrap(props);

    const input = <Sinput aria-label={ariaLabel} {...rest} id={id} name={name} />;

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

const Input = applyTheme({}, {});

export default Input;

import React from 'react';
import { createStyleBuilder, createBootstrap, StyleConfig as BaseStyleConfig } from './helpers';

interface Props {
  id?: string;
  disabled?: boolean;
  className?: string;
  style?: object;
  [key: string]: any;
}

export interface StyleConfig {
  defaultProps?: object;
  staticProps?: string[];
  breakProps?: string[];
}

export const applyTheme = (styles, config: BaseStyleConfig) => {
  const styleBuilder = createStyleBuilder(styles, config);
  const Sbutton = styleBuilder('button', 'button');

  const bootstrap = createBootstrap(styles, 'button');

  const BaseComponent = (props: Props) => {
    const { id, name, label, ariaLabel, styleProps, children, rest } = bootstrap(props);

    return (
      <Sbutton aria-label={ariaLabel} {...rest} id={id} name={name}>
        {children}
      </Sbutton>
    );
  };

  return BaseComponent;
};

const Button = applyTheme({}, {});

export default Button;

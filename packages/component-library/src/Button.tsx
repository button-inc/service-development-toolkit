import React from 'react';
import { createStyleBuilder, createBootstrap } from './helpers';

type Props = {
  id?: string;
  disabled?: boolean;
  className?: string;
  style?: object;
  [key: string]: any;
};

export const applyTheme = (styles, config) => {
  const styleBuilder = createStyleBuilder(styles, config);
  const Sbutton = styleBuilder('button', 'button');

  const bootstrap = createBootstrap(styles, 'button');

  const BaseComponent = (props: Props) => {
    const { id, name, label, ariaLabel, styleProps, children, rest } = bootstrap(props);

    return (
      <Sbutton aria-label={ariaLabel} {...rest} id={id}>
        {children}
      </Sbutton>
    );
  };

  return BaseComponent;
};

const Button = applyTheme({}, {});

export default Button;

import React from 'react';
import { createStyleBuilder } from './helpers';

type ButtonProps = {
  disabled?: boolean;
  [propName: string]: any;
};

export const applyTheme = (styles, config) => {
  const styleBuilder = createStyleBuilder(styles, config);
  const Sbutton = styleBuilder('button', 'button');

  const BaseComponent = (props: ButtonProps) => <Sbutton {...props} />;
  return BaseComponent;
};

const Button = applyTheme({}, {});

export default Button;

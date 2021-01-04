import React from 'react';
import GlobalStyles from './GlobalStyles';
import { getStyleBuilder } from './helpers';
import { SizeStyles } from './interface/size';
import { VariantStyles } from './interface/variant';

type ButtonProps = {
  disabled?: boolean;
  size?: string;
  variant?: string;
  fullHeight?: boolean;
  fullWidth?: boolean;
  [propName: string]: any;
};

interface Styles extends VariantStyles, SizeStyles {
  defaultProps?: object;
  shared?: object;
}

const defaultStyles: Styles = {
  shared: {
    button: `
      color: ${GlobalStyles.fontColor};
      border-radius: 70px;
      padding: 25px 30px;
      line-height: 26px;
      font-size: 1rem;
      border:none;
    `,
  },
};

export const applyTheme = (stylesToApply: Styles) => {
  const styleBuilder = getStyleBuilder(stylesToApply, ['size', 'variant', 'fullWidth', 'fullHeight']);
  const Sbutton = styleBuilder('button', 'button');

  const BaseComponent = (props: ButtonProps) => <Sbutton {...props} />;
  return BaseComponent;
};

const Button = applyTheme(defaultStyles);

export default Button;

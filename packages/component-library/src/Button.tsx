import React from 'react';
import cx from 'clsx';
import { processStyle, createStyleBuilder, createBootstrap, StyleConfig as BaseStyleConfig } from './helpers';

export interface Props {
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

const BUTTON_CLASS = 'pg-button';

export const applyTheme = (styles, config: BaseStyleConfig) => {
  const processedStyle = processStyle(styles);
  const styleBuilder = createStyleBuilder(processedStyle, config);
  const Sbutton = styleBuilder('button', 'button');

  const bootstrap = createBootstrap(processedStyle, 'button');

  const BaseComponent = (props: Props) => {
    const { id, name, label, ariaLabel, styleProps, children, className, rest } = bootstrap(props);

    return (
      <Sbutton aria-label={ariaLabel} {...rest} id={id} className={cx(BUTTON_CLASS, className)}>
        {children}
      </Sbutton>
    );
  };

  return BaseComponent;
};

const Button = applyTheme({}, {});

export default Button;

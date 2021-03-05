import React from 'react';
import { processStyle, createStyleBuilder, createBootstrap, StyleConfig as BaseStyleConfig } from './helpers';

export interface Props {
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
  as?: object;
}

export const applyTheme = (styles, config: BaseStyleConfig) => {
  const processedStyle = processStyle(styles);
  const styleBuilder = createStyleBuilder(processedStyle, config);

  const as = config.as || {};
  const Scontainer = styleBuilder(as.container || 'div', 'container');
  const Slabel = styleBuilder('label', 'label');
  const Swapper = config.includeWrapper ? styleBuilder(as.wrapper || 'div', 'wrapper') : null;
  const Sselect = styleBuilder('select', 'input');

  const bootstrap = createBootstrap(processedStyle, 'radio');

  const BaseComponent = (props: Props) => {
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

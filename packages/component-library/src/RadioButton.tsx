import React from 'react';
import { createStyleBuilder, createBootstrap, StyleConfig as BaseStyleConfig } from './helpers';

export interface Props {
  id?: string;
  name?: string;
  label?: string;
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
}

export const applyTheme = (styles, config: BaseStyleConfig) => {
  const styleBuilder = createStyleBuilder(styles, config);

  const Scontainer = styleBuilder('div', 'container');
  const Slabel = styleBuilder('label', 'label');
  const SradioButton = styleBuilder('input', 'input');
  const Sdot = styleBuilder('span', 'dot');

  const bootstrap = createBootstrap(styles, 'radio');

  const BaseComponent = (props: Props) => {
    const { id, name, label, ariaLabel, styleProps, rest } = bootstrap(props);

    return (
      <Scontainer {...styleProps}>
        <Slabel {...styleProps} htmlFor={id}>
          <SradioButton aria-label={ariaLabel} {...rest} type="radio" id={id} name={name} />
          <Sdot {...styleProps} className="dot" />
          {label}
        </Slabel>
      </Scontainer>
    );
  };

  return BaseComponent;
};

const Radio = applyTheme({}, {});

export default Radio;

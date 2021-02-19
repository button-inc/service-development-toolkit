import React from 'react';
import { createStyleBuilder, createBootstrap } from './helpers';

interface RadioButtonProps {
  label?: string;
  value?: string;
  disabled?: boolean;
  name?: string;
  size?: string;
  id?: string;
}

export const applyTheme = (styles, config) => {
  const styleBuilder = createStyleBuilder(styles, config);

  const Scontainer: any = styleBuilder('div', 'container');
  const Slabel: any = styleBuilder('label', 'label');
  const SradioButton: any = styleBuilder('input', 'input');
  const Sdot: any = styleBuilder('span', 'dot');

  const bootstrap = createBootstrap(styles, 'radio');

  const BaseComponent = (props: RadioButtonProps) => {
    const { id, name, label, ariaLabel, styleProps, rest } = bootstrap(props);

    return (
      <Scontainer {...styleProps}>
        <Slabel {...styleProps} htmlFor={id}>
          <SradioButton {...rest} type="radio" id={id} name={name} />
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

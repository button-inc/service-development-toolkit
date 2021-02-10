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
  const SRadioButton: any = styleBuilder('input', 'input');

  const bootstrap = createBootstrap(styles, 'radio');

  const BaseComponent = (props: RadioButtonProps) => {
    const { id, name, label, ariaLabel, styleProps, rest } = bootstrap(props);

    return (
      <Scontainer {...styleProps}>
        <SRadioButton {...rest} type="radio" id={id} />
        {label && (
          <Slabel {...styleProps} htmlFor={id}>
            {label}
          </Slabel>
        )}
      </Scontainer>
    );
  };

  return BaseComponent;
};

const Radio = applyTheme({}, {});

export default Radio;

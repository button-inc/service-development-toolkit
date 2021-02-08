import React from 'react';
import randomstring from 'randomstring';
import { createStyleBuilder } from './helpers';

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

  const BaseComponent = (props: RadioButtonProps) => {
    let { id } = props;
    const { label, ...rest } = props;
    if (!id) {
      id = randomstring.generate(10);
    }
    return (
      <Scontainer {...rest}>
        <SRadioButton {...props} type="radio" id={id} />
        {label && (
          <Slabel {...rest} htmlFor={id}>
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

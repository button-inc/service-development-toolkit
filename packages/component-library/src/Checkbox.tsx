import React from 'react';
import randomstring from 'randomstring';
import { createStyleBuilder } from './helpers';

interface CheckboxProps {
  label?: string;
  value?: string;
  disabled?: boolean;
  name?: string;
  id?: string;
}

export const applyTheme = (styles, config) => {
  const styleBuilder = createStyleBuilder(styles, config);

  const Scontainer: any = styleBuilder('div', 'container');
  const Slabel: any = styleBuilder('label', 'label');
  const Scheckbox: any = styleBuilder('input', 'input');

  const BaseComponent = (props: CheckboxProps) => {
    let { id } = props;
    const { label, ...rest } = props;
    if (!id) {
      id = randomstring.generate(10);
    }
    return (
      <Scontainer {...rest}>
        <Scheckbox {...rest} type="checkbox" id={id} />
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

const Checkbox = applyTheme({}, {});

export default Checkbox;

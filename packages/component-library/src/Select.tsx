import React from 'react';
import randomstring from 'randomstring';
import { createStyleBuilder } from './helpers';

interface SelectProps {
  id?: string;
  name?: string;
  label?: string;
  children?: any;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const applyTheme = (styles, config) => {
  const styleBuilder = createStyleBuilder(styles, config);
  const Scontainer = styleBuilder('div', 'container');
  const Slabel = styleBuilder('label', 'label');
  const Sselect = styleBuilder('select', 'input');

  const BaseComponent = (props: SelectProps) => {
    let { id, name } = props;
    const { label, children, onChange, ...rest } = props;
    if (!id) {
      id = randomstring.generate(10);
    }

    if (!name) {
      name = `${id}-select`;
    }

    const ariaLabel = label || name;

    return (
      <Scontainer {...rest}>
        {label && (
          <Slabel htmlFor={id} {...rest}>
            {label}
          </Slabel>
        )}
        <Sselect aria-label={ariaLabel} {...rest} id={id} name={name} onChange={onChange}>
          {children}
        </Sselect>
      </Scontainer>
    );
  };

  return BaseComponent;
};

const Select = applyTheme({}, { staticProps: ['fullWidth'] });

export default Select;

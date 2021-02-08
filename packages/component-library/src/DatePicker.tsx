import React from 'react';
import randomstring from 'randomstring';
import { createStyleBuilder } from './helpers';

interface Props {
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
  const Sinput = styleBuilder('input', 'input');

  const BaseComponent = (props: Props) => {
    let { id, name } = props;
    const { label, children, onChange, ...rest } = props;
    if (!id) {
      id = randomstring.generate(10);
    }

    if (!name) {
      name = `${id}-datepicker`;
    }

    const ariaLabel = label || name;

    return (
      <Scontainer {...rest}>
        {label && (
          <Slabel htmlFor={id} {...rest}>
            {label}
          </Slabel>
        )}
        <Sinput aria-label={ariaLabel} {...rest} type="date" id={id} name={name} onChange={onChange} />
      </Scontainer>
    );
  };

  return BaseComponent;
};

const DatePicker = applyTheme({}, {});

export default DatePicker;

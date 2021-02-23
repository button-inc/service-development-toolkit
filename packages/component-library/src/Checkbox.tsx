import React from 'react';
import { createStyleBuilder, createBootstrap } from './helpers';

interface Props {
  id?: string;
  name?: string;
  label?: string;
  value?: string;
  className?: string;
  style?: object;
  disabled?: boolean;
  [key: string]: any;
}

export const applyTheme = (styles, config) => {
  const styleBuilder = createStyleBuilder(styles, config);

  const Scontainer = styleBuilder('div', 'container');
  const Slabel = styleBuilder('label', 'label');
  const Scheckbox = styleBuilder('input', 'input');
  const Scheckmark = styleBuilder('span', 'checkmark');

  const bootstrap = createBootstrap(styles, 'checkbox');

  const BaseComponent = (props: Props) => {
    const { id, name, label, ariaLabel, styleProps, rest } = bootstrap(props);

    return (
      <Scontainer {...styleProps}>
        <Slabel {...styleProps} htmlFor={id}>
          <Scheckbox aria-label={ariaLabel} {...rest} type="checkbox" id={id} name={name} />
          <Scheckmark {...styleProps} className="checkmark" />
          {label}
        </Slabel>
      </Scontainer>
    );
  };

  return BaseComponent;
};

const Checkbox = applyTheme({}, {});

export default Checkbox;

import React from 'react';
import { createStyleBuilder, createBootstrap } from './helpers';

export interface InputProps {
  id?: string;
  name?: string;
  label?: string;
  value?: string;
  disabled?: boolean;
  className?: string;
  style?: object;
  [key: string]: any;
}

export const applyTheme = (styles, config) => {
  const styleBuilder = createStyleBuilder(styles, config);

  const Scontainer = styleBuilder('div', 'container');
  const Slabel = styleBuilder('label', 'label');
  const Stextarea = styleBuilder('textarea', 'input');

  const bootstrap = createBootstrap(styles, 'textarea');

  const BaseComponent = (props: InputProps) => {
    const { id, name, label, ariaLabel, styleProps, rest } = bootstrap(props);

    return (
      <Scontainer {...styleProps}>
        {label && (
          <Slabel htmlFor={id} {...styleProps}>
            {label}
          </Slabel>
        )}
        <Stextarea aria-label={ariaLabel} {...rest} id={id} name={name} />
      </Scontainer>
    );
  };

  return BaseComponent;
};

const Textarea = applyTheme({}, {});

export default Textarea;

import React from 'react';
import { createStyleBuilder, createBootstrap } from './helpers';

export interface InputProps {
  id?: string;
  name?: string;
  label?: string;
  defaultValue?: string;
  disabled?: boolean;
}

export const applyTheme = (styles, config) => {
  const styleBuilder = createStyleBuilder(styles, config);

  const Scontainer: any = styleBuilder('div', 'container');
  const Slabel: any = styleBuilder('label', 'label');
  const Stextarea: any = styleBuilder('textarea', 'input');

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
        <Stextarea {...rest} id={id} name={name} />
      </Scontainer>
    );
  };

  return BaseComponent;
};

const Textarea = applyTheme({}, {});

export default Textarea;

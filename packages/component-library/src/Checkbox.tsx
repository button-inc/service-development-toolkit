import React from 'react';
import randomstring from 'randomstring';
import { createStyleBuilder, getStyleKeys } from './helpers';

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

  const styleKeys = getStyleKeys(styles);

  const BaseComponent = (props: CheckboxProps) => {
    let { id } = props;
    const { label, ...rest } = props;
    if (!id) {
      id = randomstring.generate(10);
    }

    const styleProps = Object.assign({}, ...styleKeys.map(key => ({ [key]: rest[key] })));

    return (
      <Scontainer {...styleProps}>
        <Scheckbox {...rest} type="checkbox" id={id} />
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

const Checkbox = applyTheme({}, {});

export default Checkbox;

import React from 'react';
import randomstring from 'randomstring';
import pickBy from 'lodash/pickBy';
import { createStyleBuilder, getStyleKeys, staticProps } from './helpers';

interface SelectProps {
  id?: string;
  name?: string;
  label?: string;
  children?: any;
  defaultValue?: string;
  disabled?: boolean;
}

export const applyTheme = (styles, config) => {
  const styleBuilder = createStyleBuilder(styles, config);
  const Scontainer = styleBuilder('div', 'container');
  const Slabel = styleBuilder('label', 'label');
  const Sselect = styleBuilder('select', 'input');

  const styleKeys = getStyleKeys(styles);

  const BaseComponent = (props: SelectProps) => {
    let { id, name } = props;
    const { label, children, ...rest } = props;
    if (!id) {
      id = randomstring.generate(10);
    }

    if (!name) {
      name = `${id}-select`;
    }

    const ariaLabel = label || name;

    const styleProps = Object.assign({}, ...styleKeys.map(key => ({ [key]: rest[key] })));
    const staticStyleProps = pickBy(rest, (_value, propName) => staticProps.includes(propName));

    return (
      <Scontainer {...styleProps} {...staticStyleProps}>
        {label && (
          <Slabel htmlFor={id} {...styleProps}>
            {label}
          </Slabel>
        )}
        <Sselect aria-label={ariaLabel} {...rest} id={id} name={name}>
          {children}
        </Sselect>
      </Scontainer>
    );
  };

  return BaseComponent;
};

const Select = applyTheme({}, { staticProps: ['fullWidth'] });

export default Select;

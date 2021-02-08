import React from 'react';
import randomstring from 'randomstring';
import pickBy from 'lodash/pickBy';
import { createStyleBuilder, getStyleKeys, staticProps } from './helpers';

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

  const styleKeys = getStyleKeys(styles);

  const BaseComponent = (props: RadioButtonProps) => {
    let { id } = props;
    const { label, ...rest } = props;
    if (!id) {
      id = randomstring.generate(10);
    }

    const styleProps = Object.assign({}, ...styleKeys.map(key => ({ [key]: rest[key] })));
    const staticStyleProps = pickBy(rest, (value, propName) => staticProps.includes(propName));

    return (
      <Scontainer {...styleProps} {...staticStyleProps}>
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

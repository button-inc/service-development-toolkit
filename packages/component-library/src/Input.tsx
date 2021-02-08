import React from 'react';
import randomstring from 'randomstring';
import pickBy from 'lodash/pickBy';
import { createStyleBuilder, getStyleKeys, staticProps } from './helpers';

export interface InputProps {
  disabled?: boolean;
  name?: string;
  size?: string;
  label?: string;
  fullHeight?: boolean;
  fullWidth?: boolean;
  type?: 'email' | 'number' | 'password' | 'tel' | 'text' | 'url';
  [propName: string]: any;
}

export const applyTheme = (styles, config) => {
  const styleBuilder = createStyleBuilder(styles, config);

  const Scontainer: any = styleBuilder('div', 'container');
  const Slabel: any = styleBuilder('label', 'label');
  const SInput: any = styleBuilder('input', 'input');

  const styleKeys = getStyleKeys(styles);

  const BaseComponent = (props: InputProps) => {
    let { id } = props;
    const { label, ...rest } = props;
    if (!id) {
      id = randomstring.generate(10);
    }

    const styleProps = Object.assign({}, ...styleKeys.map(key => ({ [key]: rest[key] })));
    const staticStyleProps = pickBy(rest, (value, propName) => staticProps.includes(propName));

    return (
      <Scontainer {...styleProps} {...staticStyleProps}>
        <SInput id={id} {...rest} />
        {label && (
          <Slabel htmlFor={id} {...styleProps}>
            {label}
          </Slabel>
        )}
      </Scontainer>
    );
  };

  return BaseComponent;
};

const Input = applyTheme({}, {});

export default Input;

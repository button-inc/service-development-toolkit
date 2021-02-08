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
}

export const applyTheme = (styles, config) => {
  const styleBuilder = createStyleBuilder(styles, config);
  const Scontainer = styleBuilder('div', 'container');
  const Slabel = styleBuilder('label', 'label');
  const Sinput = styleBuilder('input', 'input');

  const { shared = {}, ...others } = styles;
  const styleKeys = Object.keys(others);

  const BaseComponent = (props: Props) => {
    let { id, name } = props;
    const { label, children, ...rest } = props;
    if (!id) {
      id = randomstring.generate(10);
    }

    if (!name) {
      name = `${id}-filepicker`;
    }

    const ariaLabel = label || name;

    const styleProps = Object.assign({}, ...styleKeys.map(key => ({ [key]: rest[key] })));

    return (
      <Scontainer {...styleProps}>
        {label && (
          <Slabel htmlFor={id} {...styleProps}>
            {label}
          </Slabel>
        )}
        <Sinput aria-label={ariaLabel} {...rest} type="file" id={id} name={name} />
      </Scontainer>
    );
  };

  return BaseComponent;
};

const FilePicker = applyTheme({}, {});

export default FilePicker;

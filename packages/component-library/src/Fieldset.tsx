import React from 'react';
import { createStyleBuilder, createBootstrap } from './helpers';

export interface FieldsetProps {
  id?: string;
  name?: string;
  title?: string;
  disabled?: boolean;
  className?: string;
  style?: object;
  [key: string]: any;
}

export const applyTheme = (styles, config) => {
  const styleBuilder = createStyleBuilder(styles, config);

  const Sfieldset = styleBuilder('fieldset', 'container');
  const Slegend = styleBuilder('legend', 'legend');

  const bootstrap = createBootstrap(styles, 'fieldset');

  const BaseComponent = (props: FieldsetProps) => {
    const { id, name, ariaLabel, styleProps, children, rest } = bootstrap(props);

    const { title, disabled, ...others } = rest;

    const childrenWithNames = React.Children.map(children, child => {
      return React.cloneElement(child, {
        name: child.props.name || name,
        disabled: child.props.disabled || disabled,
      });
    });

    return (
      <Sfieldset {...styleProps} id={id}>
        {title && <Slegend {...styleProps}>{title}</Slegend>}
        {childrenWithNames}
      </Sfieldset>
    );
  };

  return BaseComponent;
};

const Fieldset = applyTheme({}, { staticProps: ['fullWidth', 'fullHeight'] });

export default Fieldset;

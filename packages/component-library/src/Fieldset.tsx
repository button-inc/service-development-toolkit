import React from 'react';
import { createStyleBuilder, createBootstrap } from './helpers';

export interface FieldsetProps {
  disabled?: boolean;
  name?: string;
  title?: string;
  children?: any;
  [propName: string]: any;
}

export const applyTheme = (styles, config) => {
  const styleBuilder = createStyleBuilder(styles, config);

  const Sfieldset: any = styleBuilder('fieldset', 'container');
  const Slegend: any = styleBuilder('legend', 'legend');

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

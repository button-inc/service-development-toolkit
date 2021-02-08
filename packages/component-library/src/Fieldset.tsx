import React from 'react';
import { createStyleBuilder } from './helpers';

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

  const BaseComponent = (props: FieldsetProps) => {
    const { title, children, name, ...rest } = props;

    const childrenWithNames = React.Children.map(children, child => {
      return React.cloneElement(child, {
        name: child.props.name || name,
      });
    });

    return (
      <Sfieldset {...rest}>
        {title && <Slegend {...rest}>{title}</Slegend>}
        {childrenWithNames}
      </Sfieldset>
    );
  };

  return BaseComponent;
};

const Fieldset = applyTheme({}, { staticProps: ['fullWidth', 'fullHeight'] });

export default Fieldset;

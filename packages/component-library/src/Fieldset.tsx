import React from 'react';
import pickBy from 'lodash/pickBy';
import { createStyleBuilder, getStyleKeys, staticProps } from './helpers';

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

  const styleKeys = getStyleKeys(styles);

  const BaseComponent = (props: FieldsetProps) => {
    const { title, children, name, id, disabled, ...rest } = props;

    const styleProps = Object.assign({}, ...styleKeys.map(key => ({ [key]: rest[key] })));
    const staticStyleProps = pickBy(rest, (value, propName) => staticProps.includes(propName));

    const childrenWithNames = React.Children.map(children, child => {
      return React.cloneElement(child, {
        name: child.props.name || name,
        disabled: child.props.disabled || disabled,
      });
    });

    return (
      <Sfieldset {...styleProps} {...staticStyleProps} id={id}>
        {title && <Slegend {...styleProps}>{title}</Slegend>}
        {childrenWithNames}
      </Sfieldset>
    );
  };

  return BaseComponent;
};

const Fieldset = applyTheme({}, { staticProps: ['fullWidth', 'fullHeight'] });

export default Fieldset;

import React from 'react';
import reduce from 'lodash/reduce';
import { processStyle, createStyleBuilder, createBootstrap, StyleConfig as BaseStyleConfig } from './helpers';

export interface Props {
  id?: string;
  name?: string;
  title?: string;
  disabled?: boolean;
  className?: string;
  style?: object;
  [key: string]: any;
}

export interface StyleConfig {
  defaultProps?: object;
  staticProps?: string[];
  breakProps?: string[];
  forwardProps?: string[];
}

function recursiveCloneChildren(children, parentProps: object) {
  return React.Children.map(children, child => {
    if (!React.isValidElement(child)) {
      return child;
    }

    // @ts-ignore
    if (child.props?.children) {
      // @ts-ignore
      return recursiveCloneChildren(child.props.children, parentProps);
    }

    return React.cloneElement(child, { ...parentProps, ...((child.props as object) || {}) });
  });
}

export const applyTheme = (styles, config: BaseStyleConfig) => {
  const processedStyle = processStyle(styles);
  const styleBuilder = createStyleBuilder(processedStyle, config);

  const Sfieldset = styleBuilder('fieldset', 'container');
  const Slegend = styleBuilder('legend', 'legend');

  const bootstrap = createBootstrap(processedStyle, 'fieldset');
  const forwardProps = config.forwardProps || [];

  const BaseComponent = (props: Props) => {
    const { id, name, ariaLabel, styleProps, children, rest } = bootstrap(props);

    const { title, disabled, ...others } = rest;

    const forwards = reduce(
      forwardProps,
      (ret, key) => {
        ret[key] = props[key];
        return ret;
      },
      {}
    );

    return (
      <Sfieldset {...styleProps} id={id}>
        {title && <Slegend {...styleProps}>{title}</Slegend>}
        {recursiveCloneChildren(children, forwards)}
      </Sfieldset>
    );
  };

  return BaseComponent;
};

const Fieldset = applyTheme(
  {},
  { staticProps: ['fullWidth', 'fullHeight'], forwardProps: ['size', 'variant', 'disabled', 'required'] }
);

export default Fieldset;

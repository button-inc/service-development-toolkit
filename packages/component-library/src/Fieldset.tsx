import React from 'react';
import cx from 'clsx';
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

const CONTAINER_CLASS = 'pg-fieldset';
const LEGEND_CLASS = 'pg-fieldset-legend';

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
    const { id, name, ariaLabel, styleProps, children, className, rest } = bootstrap(props);

    const { style, legendStyle, title, disabled, ...others } = rest;

    const forwards = reduce(
      forwardProps,
      (ret, key) => {
        ret[key] = props[key];
        return ret;
      },
      {}
    );

    return (
      <Sfieldset {...styleProps} id={id} style={style} className={cx(CONTAINER_CLASS, className)}>
        {title && (
          <Slegend {...styleProps} style={legendStyle} className={LEGEND_CLASS}>
            {title}
          </Slegend>
        )}
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

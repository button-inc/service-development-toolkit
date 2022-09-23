import React from 'react';
import cx from 'clsx';
import { processStyle, createStyleBuilder, createBootstrap, StyleConfig as BaseStyleConfig } from './helpers';

export interface Props {
  id?: string;
  children?: React.ReactNode;
  className?: string;
  style?: object;
  [key: string]: any;
}

const CONTAINER_CLASS = 'pg-callout';

export interface StyleConfig {
  defaultProps?: object;
  staticProps?: string[];
  breakProps?: string[];
  as?: object;
}

export const applyTheme = (styles, config: BaseStyleConfig, childStyles = {}) => {
  const processedStyle = processStyle(styles);
  const processedChildStyle = processStyle(childStyles);
  const styleBuilder = createStyleBuilder(processedStyle, config, processedChildStyle);

  const as = config.as || {};
  const Scontainer = styleBuilder(as.container || 'aside', 'container');

  const bootstrap = createBootstrap(processedStyle, 'callout');

  const BaseComponent = (props: Props) => {
    const { id, name, label, ariaLabel, styleProps, children, className, rest } = bootstrap(props);
    const { closable, ...others } = rest;

    const checkboxId = `${id}-toggle`;

    return (
      <Scontainer {...styleProps} {...others} className={cx(CONTAINER_CLASS, className)}>
        {children}
      </Scontainer>
    );
  };

  return BaseComponent;
};

const Callout = applyTheme({}, {}, {});

export default Callout;

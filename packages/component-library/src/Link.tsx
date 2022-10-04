import React from 'react';
import cx from 'clsx';
import { processStyle, createStyleBuilder, createBootstrap, StyleConfig as BaseStyleConfig } from './helpers';

export interface Props {
  id?: string;
  className?: string;
  style?: object;
  href?: string;
  [key: string]: any;
}

export interface StyleConfig {
  defaultProps?: object;
  staticProps?: string[];
  breakProps?: string[];
}

const LINK_CLASS = 'pg-link';

export const applyTheme = (styles, config: BaseStyleConfig) => {
  const processedStyle = processStyle(styles);
  const styleBuilder = createStyleBuilder(processedStyle, config);
  const Slink = styleBuilder('link', 'link');

  const bootstrap = createBootstrap(processedStyle, 'link');

  const Link = (props: Props) => {
    const { id, name, label, ariaLabel, styleProps, children, className, rest } = bootstrap(props);

    return (
      <Slink {...rest} id={id} className={cx(LINK_CLASS, className)}>
        {children}
      </Slink>
    );
  };

  return Link;
};

const Link = applyTheme({}, {});

export default Link;

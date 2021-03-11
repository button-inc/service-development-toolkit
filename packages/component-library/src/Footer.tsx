import React from 'react';
import cx from 'clsx';
import { processStyle, createStyleBuilder, StyleConfig as BaseStyleConfig } from './helpers';

export interface Props {
  children?: React.ReactNode;
  className?: string;
  style?: object;
  [key: string]: any;
}

export interface StyleConfig {
  defaultProps?: object;
  staticProps?: string[];
  breakProps?: string[];
  as?: object;
}

const CONTAINER_CLASS = 'pg-footer';
const FOOTER_CLASS = 'pg-footer-footer';

export const applyTheme = (styles, config: BaseStyleConfig) => {
  const processedStyle = processStyle(styles);
  const styleBuilder = createStyleBuilder(processedStyle, config);

  const as = config.as || {};
  const Scontainer = styleBuilder(as.container || 'footer', 'container');
  const Sfooter = styleBuilder(as.footer || 'div', 'footer');

  const BaseComponent = (props: Props) => {
    const { children, style, footerStyle, className, ...rest } = props;

    return (
      <Scontainer {...rest} style={style} className={cx(CONTAINER_CLASS, className)}>
        <Sfooter style={footerStyle} className={FOOTER_CLASS}>
          {children}
        </Sfooter>
      </Scontainer>
    );
  };

  return BaseComponent;
};

const Footer = applyTheme({}, {});

export default Footer;

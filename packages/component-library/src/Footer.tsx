import React from 'react';
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

export const applyTheme = (styles, config: BaseStyleConfig) => {
  const processedStyle = processStyle(styles);
  const styleBuilder = createStyleBuilder(processedStyle, config);

  const as = config.as || {};
  const Scontainer = styleBuilder(as.container || 'footer', 'container');
  const Sfooter = styleBuilder(as.footer || 'div', 'footer');

  const BaseComponent = (props: Props) => {
    const { children, ...rest } = props;
    return (
      <Scontainer {...rest}>
        <Sfooter>{children}</Sfooter>
      </Scontainer>
    );
  };

  return BaseComponent;
};

const Footer = applyTheme({}, {});

export default Footer;

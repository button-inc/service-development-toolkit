import React from 'react';
import { createStyleBuilder, StyleConfig as BaseStyleConfig } from './helpers';

interface Props {
  children?: React.ReactNode;
  className?: string;
  style?: object;
  [key: string]: any;
}

export const applyTheme = (styles, config: BaseStyleConfig) => {
  const styleBuilder = createStyleBuilder(styles, config);
  const Scontainer = styleBuilder('footer', 'container');
  const Sfooter = styleBuilder('div', 'footer');

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

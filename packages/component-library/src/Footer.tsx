import React from 'react';
import { createStyleBuilder } from './helpers';

interface Props {
  children?: any;
}

export const applyTheme = (styles, config) => {
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

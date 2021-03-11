import React, { useContext } from 'react';
import cx from 'clsx';
import styled from 'styled-components';
import { processStyle, createStyleBuilder, createBootstrap, StyleConfig as BaseStyleConfig } from './helpers';

export interface Props {
  id?: string;
  children?: React.ReactNode;
  className?: string;
  style?: object;
  [key: string]: any;
}

interface Context {
  styleProps: object;
  Sheader: any;
  Scontent: any;
  Sfooter: any;
  Sclose: any;
}

const CONTAINER_CLASS = 'pg-modal-container';
const MODAL_CLASS = 'pg-modal-main';
const HEADER_CLASS = 'pg-modal-header';
const CONTENT_CLASS = 'pg-modal-content';
const FOOTER_CLASS = 'pg-modal-footer';
const CLOSE_CLASS = 'pg-modal-close';

const initialContext: Context = {
  styleProps: {},
  Sheader: null,
  Scontent: null,
  Sfooter: null,
  Sclose: null,
};

const ModalContext = React.createContext(initialContext);

export interface StyleConfig {
  defaultProps?: object;
  staticProps?: string[];
  breakProps?: string[];
  as?: object;
}

const createHiddenContainer = tag => {
  return styled[tag]`
    visibility: hidden;

    &:target {
      visibility: visible;
    }
  `;
};

export const applyTheme = (styles, config: BaseStyleConfig) => {
  const processedStyle = processStyle(styles);
  const styleBuilder = createStyleBuilder(processedStyle, config);

  const as = config.as || {};
  const Scontainer = styleBuilder(createHiddenContainer(as.container || 'div'), 'container');
  const Smain = styleBuilder(as.modal || 'div', 'modal');
  const Sheader = styleBuilder(as.header || 'div', 'header');
  const Scontent = styleBuilder(as.content || 'div', 'content');
  const Sfooter = styleBuilder(as.footer || 'div', 'footer');
  const Sclose = styleBuilder('a', 'close');

  const bootstrap = createBootstrap(processedStyle, 'modal');

  const BaseComponent = (props: Props) => {
    const { id, name, label, ariaLabel, styleProps, children, className, rest } = bootstrap(props);
    const { style, modalStyle, onToggle, defaultToggled, ...others } = rest;

    return (
      <ModalContext.Provider value={{ styleProps, Sheader, Scontent, Sfooter, Sclose }}>
        <Scontainer {...others} className={cx(CONTAINER_CLASS, className)} id={id} style={style}>
          <Smain className={MODAL_CLASS} style={modalStyle}>
            {children}
          </Smain>
        </Scontainer>
      </ModalContext.Provider>
    );
  };

  BaseComponent.Header = props => {
    const { children, className, ...rest } = props;
    const classes = cx(HEADER_CLASS, className);
    const { Sheader, styleProps } = useContext(ModalContext);

    return (
      <Sheader className={classes} {...styleProps} {...rest}>
        {children}
      </Sheader>
    );
  };

  BaseComponent.Content = props => {
    const { children, className, ...rest } = props;
    const classes = cx(CONTENT_CLASS, className);
    const { Scontent, styleProps } = useContext(ModalContext);

    return (
      <Scontent className={classes} {...styleProps} {...rest}>
        {children}
      </Scontent>
    );
  };

  BaseComponent.Footer = props => {
    const { children, className, ...rest } = props;
    const classes = cx(FOOTER_CLASS, className);
    const { Sfooter, styleProps } = useContext(ModalContext);

    return (
      <Sfooter className={classes} {...styleProps} {...rest}>
        {children}
      </Sfooter>
    );
  };

  BaseComponent.Close = props => {
    const { children, className, ...rest } = props;
    const classes = cx(CLOSE_CLASS, className);
    const { Sclose, styleProps } = useContext(ModalContext);

    return (
      <Sclose className={classes} {...styleProps} href="#" {...rest}>
        {children}
      </Sclose>
    );
  };

  return BaseComponent;
};

const Modal = applyTheme({}, {});

export default Modal;

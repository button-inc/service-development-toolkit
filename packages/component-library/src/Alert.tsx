import React, { useContext } from 'react';
import cx from 'clsx';
import styled from 'styled-components';
import { processStyle, createStyleBuilder, createBootstrap, StyleConfig as BaseStyleConfig } from './helpers';

export interface Props {
  id?: string;
  children?: React.ReactNode;
  closable?: boolean;
  className?: string;
  style?: object;
  [key: string]: any;
}

interface Context {
  checkboxId: string;
  styleProps: object;
  Sheader: any;
  Scontent: any;
  Sgroup: any;
  Sclose: any;
}

const CONTAINER_CLASS = 'pg-alert';
const HEADER_CLASS = 'pg-alert-header';
const CONTENT_CLASS = 'pg-alert-content';
const CLOSE_CLASS = 'pg-alert-close';

const InvisibleCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  left: -100vw;

  &:checked + .${CONTAINER_CLASS} {
    display: none;
  }
`;

const initialContext: Context = {
  checkboxId: '',
  styleProps: {},
  Sheader: null,
  Scontent: null,
  Sgroup: null,
  Sclose: null,
};

const AlertContext = React.createContext(initialContext);

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
  const Sheader = styleBuilder(as.header || 'header', 'header');
  const Scontent = styleBuilder(as.content || 'div', 'content');
  const Sgroup = styleBuilder(as.group || 'div', 'group');
  const Sclose = styleBuilder('label', 'close');

  const bootstrap = createBootstrap(processedStyle, 'alert');

  const BaseComponent = (props: Props) => {
    const { id, name, label, ariaLabel, styleProps, children, className, rest } = bootstrap(props);
    const { closable, ...others } = rest;

    const checkboxId = `${id}-toggle`;

    return (
      <AlertContext.Provider value={{ checkboxId, styleProps, Sheader, Scontent, Sgroup, Sclose }}>
        {closable && <InvisibleCheckbox id={checkboxId} />}
        <Scontainer {...styleProps} {...others} className={cx(CONTAINER_CLASS, className)}>
          {children}
        </Scontainer>
      </AlertContext.Provider>
    );
  };

  BaseComponent.Header = props => {
    const { children, className, ...rest } = props;
    const classes = cx(HEADER_CLASS, className);
    const { Sheader, styleProps } = useContext(AlertContext);

    return (
      <Sheader className={classes} {...styleProps} {...rest}>
        {children}
      </Sheader>
    );
  };

  BaseComponent.Content = props => {
    const { children, className, ...rest } = props;
    const classes = cx(CONTENT_CLASS, className);
    const { Scontent, styleProps } = useContext(AlertContext);

    return (
      <Scontent className={classes} {...styleProps} {...rest}>
        {children}
      </Scontent>
    );
  };

  BaseComponent.Group = props => {
    const { children, className, ...rest } = props;
    const classes = cx(CONTENT_CLASS, className);
    const { Sgroup, styleProps } = useContext(AlertContext);

    return (
      <Sgroup className={classes} {...styleProps} {...rest}>
        {children}
      </Sgroup>
    );
  };

  BaseComponent.Close = props => {
    const { children, className, ...rest } = props;
    const classes = cx(CLOSE_CLASS, className);
    const { Sclose, checkboxId, styleProps } = useContext(AlertContext);

    return (
      <Sclose className={classes} htmlFor={checkboxId} {...styleProps} role="button" aria-label="close" {...rest}>
        {children}
      </Sclose>
    );
  };

  return BaseComponent;
};

const Alert = applyTheme({}, {}, {});

export default Alert;

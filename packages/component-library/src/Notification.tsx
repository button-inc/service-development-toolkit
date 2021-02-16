import React, { useContext } from 'react';
import cx from 'clsx';
import styled, { StyledInterface } from 'styled-components';
import { createStyleBuilder, createBootstrap } from './helpers';

interface Props {
  id?: string;
  name?: string;
  label?: string;
  children?: any;
  defaultValue?: string;
  disabled?: boolean;
  closable?: boolean;
}

interface Context {
  checkboxId: string;
  styleProps: object;
  Sheader: any;
  Scontent: any;
  Sclose: any;
}

const CONTAINER_CLASS = 'pg-notification';
const HEADER_CLASS = 'pg-header';
const CONTENT_CLASS = 'pg-content';
const CLOSE_CLASS = 'pg-close';

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
  Sclose: null,
};

const NotificationContext = React.createContext(initialContext);

export const applyTheme = (styles, config) => {
  const styleBuilder = createStyleBuilder(styles, config);
  const Scontainer = styleBuilder('div', 'container');
  const Sheader = styleBuilder('div', 'header');
  const Scontent = styleBuilder('div', 'content');
  const Sclose = styleBuilder('div', 'close');

  const bootstrap = createBootstrap(styles, 'notification');

  const BaseComponent = (props: Props) => {
    const { id, name, label, ariaLabel, styleProps, children, className, rest } = bootstrap(props);
    const { closable, others } = rest;

    const checkboxId = `${id}-toggle`;

    return (
      <NotificationContext.Provider value={{ checkboxId, styleProps, Sheader, Scontent, Sclose }}>
        {closable && <InvisibleCheckbox id={checkboxId} />}
        <Scontainer {...others} className={cx(CONTAINER_CLASS, className)}>
          {children}
        </Scontainer>
      </NotificationContext.Provider>
    );
  };

  BaseComponent.Header = ({ children, className }) => {
    const classes = cx(HEADER_CLASS, className);
    const { Sheader, styleProps } = useContext(NotificationContext);

    return (
      <Sheader className={classes} {...styleProps}>
        {children}
      </Sheader>
    );
  };

  BaseComponent.Content = ({ children, className }) => {
    const classes = cx(CONTENT_CLASS, className);
    const { Scontent, styleProps } = useContext(NotificationContext);

    return (
      <Scontent className={classes} {...styleProps}>
        {children}
      </Scontent>
    );
  };

  BaseComponent.Close = ({ children, className }) => {
    const classes = cx(CLOSE_CLASS, className);
    const { Sclose, checkboxId, styleProps } = useContext(NotificationContext);

    return (
      <Sclose className={classes} {...styleProps}>
        <label htmlFor={checkboxId}>{children}</label>
      </Sclose>
    );
  };

  return BaseComponent;
};

const Notification = applyTheme({}, {});

export default Notification;

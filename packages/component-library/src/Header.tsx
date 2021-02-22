import React, { useContext } from 'react';
import cx from 'clsx';
import styled from 'styled-components';
import { createStyleBuilder, createBootstrap } from './helpers';

interface Props {
  id?: string;
  name?: string;
  label?: string;
  children?: any;
  defaultValue?: string;
  disabled?: boolean;
}

interface Context {
  checkboxId: string;
  styleProps: object;
  Stoggle: any;
  Ssidebar: any;
}

const CONTAINER_CLASS = 'pg-header';
const TOGGLE_CLASS = 'pg-header-toggle';
const SIDEBAR_CLASS = 'pg-header-sidebar';

const InvisibleCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  left: -100vw;

  &:checked + .${CONTAINER_CLASS} > .${SIDEBAR_CLASS} {
    display: block;
  }
`;

const HiddenSidebar = styled.div`
  display: none;
`;

const initialContext: Context = {
  checkboxId: '',
  styleProps: {},
  Stoggle: null,
  Ssidebar: null,
};

const HeaderContext = React.createContext(initialContext);

export const applyTheme = (styles, config) => {
  const styleBuilder = createStyleBuilder(styles, config);
  const Scontainer = styleBuilder('div', 'container');
  const Stoggle = styleBuilder('label', 'toggle');
  const Ssidebar = styleBuilder(HiddenSidebar, 'sidebar');

  const bootstrap = createBootstrap(styles, 'header');

  const BaseComponent = (props: Props) => {
    const { id, name, label, ariaLabel, styleProps, children, className, rest } = bootstrap(props);

    const checkboxId = `${id}-toggle`;

    return (
      <HeaderContext.Provider value={{ checkboxId, styleProps, Stoggle, Ssidebar }}>
        <InvisibleCheckbox id={checkboxId} />
        <Scontainer {...rest} className={cx(CONTAINER_CLASS, className)}>
          {children}
        </Scontainer>
      </HeaderContext.Provider>
    );
  };

  BaseComponent.Toggle = props => {
    const { children, className, ...rest } = props;
    const classes = cx(TOGGLE_CLASS, className);
    const { checkboxId, Stoggle, styleProps } = useContext(HeaderContext);

    return (
      <Stoggle className={classes} htmlFor={checkboxId} {...styleProps} {...rest}>
        {children}
      </Stoggle>
    );
  };

  BaseComponent.Sidebar = props => {
    const { children, className, ...rest } = props;
    const classes = cx(SIDEBAR_CLASS, className);
    const { Ssidebar, styleProps } = useContext(HeaderContext);

    return (
      <Ssidebar className={classes} {...styleProps} {...rest}>
        {children}
      </Ssidebar>
    );
  };

  return BaseComponent;
};

const Header = applyTheme({}, {});

export default Header;

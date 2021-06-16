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
  checkboxId: string;
  styleProps: object;
  Sheader: any;
  Scontent: any;
  Stoggle: any;
}

const CONTAINER_CLASS = 'pg-card';
const HEADER_CLASS = 'pg-card-header';
const CONTENT_CLASS = 'pg-card-content';
const TOGGLE_CLASS = 'pg-card-toggle';
const TOGGLE_ON_CLASS = 'pg-card-toggle-on';
const TOGGLE_OFF_CLASS = 'pg-card-toggle-off';

const InvisibleCheckbox = styled.input.attrs({ type: 'checkbox', 'aria-label': 'toggle contents visibility' })`
  position: absolute;
  left: -100vw;

  & + .${CONTAINER_CLASS} .${TOGGLE_ON_CLASS} {
    display: none;
  }

  & + .${CONTAINER_CLASS} .${TOGGLE_OFF_CLASS} {
    display: block;
  }

  &:checked + .${CONTAINER_CLASS} .${TOGGLE_ON_CLASS} {
    display: block;
  }

  &:checked + .${CONTAINER_CLASS} .${TOGGLE_OFF_CLASS} {
    display: none;
  }

  &:checked + .${CONTAINER_CLASS} > .${CONTENT_CLASS} {
    display: block;
  }
`;

const createHiddenContent = tag => {
  return styled[tag]`
    display: none;
  `;
};

const initialContext: Context = {
  checkboxId: '',
  styleProps: {},
  Sheader: null,
  Scontent: null,
  Stoggle: null,
};

const CardContext = React.createContext(initialContext);

export interface StyleConfig {
  defaultProps?: object;
  staticProps?: string[];
  breakProps?: string[];
  toggleable?: boolean;
  as?: object;
}

export const applyTheme = (styles, config: BaseStyleConfig) => {
  const processedStyle = processStyle(styles);
  const styleBuilder = createStyleBuilder(processedStyle, config);

  const as = config.as || {};
  const Scontainer = styleBuilder(as.container || 'section', 'container');
  const Sheader = styleBuilder(as.header || 'header', 'header');
  const Stoggle = styleBuilder('label', 'toggle');
  const Scontent = styleBuilder(
    config.toggleable ? createHiddenContent(as.content || 'div') : as.content || 'div',
    'content'
  );

  const bootstrap = createBootstrap(processedStyle, 'card');

  const BaseComponent = (props: Props) => {
    const { id, name, label, ariaLabel, styleProps, children, className, rest } = bootstrap(props);
    const { onToggle, defaultToggled, ...others } = rest;

    const checkboxId = `${id}-toggle`;

    return (
      <CardContext.Provider value={{ checkboxId, styleProps, Stoggle, Sheader, Scontent }}>
        {config.toggleable && (
          <InvisibleCheckbox
            id={checkboxId}
            onChange={e => onToggle(e, e.target.checked)}
            defaultChecked={defaultToggled}
          />
        )}
        <Scontainer {...others} className={cx(CONTAINER_CLASS, className)}>
          {children}
        </Scontainer>
      </CardContext.Provider>
    );
  };

  BaseComponent.Toggle = props => {
    const { children, className, ...rest } = props;
    const classes = cx(TOGGLE_CLASS, className);
    const { checkboxId, Stoggle, styleProps } = useContext(CardContext);

    return (
      <Stoggle className={classes} htmlFor={checkboxId} {...styleProps} {...rest}>
        {children}
      </Stoggle>
    );
  };

  BaseComponent.ToggleOn = props => {
    const { children, className, ...rest } = props;
    const classes = cx(TOGGLE_ON_CLASS, className);
    const { checkboxId, Stoggle, styleProps } = useContext(CardContext);

    return (
      <Stoggle className={classes} htmlFor={checkboxId} {...styleProps} {...rest}>
        {children}
      </Stoggle>
    );
  };

  BaseComponent.ToggleOff = props => {
    const { children, className, ...rest } = props;
    const classes = cx(TOGGLE_OFF_CLASS, className);
    const { checkboxId, Stoggle, styleProps } = useContext(CardContext);

    return (
      <Stoggle className={classes} htmlFor={checkboxId} {...styleProps} {...rest}>
        {children}
      </Stoggle>
    );
  };

  BaseComponent.Header = props => {
    const { children, className, ...rest } = props;
    const classes = cx(HEADER_CLASS, className);
    const { Sheader, styleProps } = useContext(CardContext);

    return (
      <Sheader className={classes} {...styleProps} {...rest}>
        {children}
      </Sheader>
    );
  };

  BaseComponent.Content = props => {
    const { children, className, ...rest } = props;
    const classes = cx(CONTENT_CLASS, className);
    const { Scontent, styleProps } = useContext(CardContext);

    return (
      <Scontent className={classes} {...styleProps} {...rest}>
        {children}
      </Scontent>
    );
  };

  return BaseComponent;
};

const Card = applyTheme({}, {});

export default Card;

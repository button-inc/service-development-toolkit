import React, { useContext } from 'react';
import cx from 'clsx';
import each from 'lodash/each';
import styled from 'styled-components';
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

const CONTAINER_CLASS = 'pg-notification';
const HEADER_CLASS = 'pg-header';
const CONTENT_CLASS = 'pg-content';
const CLOSE_CLASS = 'pg-close';

const InvisualCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  left: -100vw;

  &:checked ~ .${CONTAINER_CLASS} {
    display: none;
  }
`;

const concatStyle = style => {
  let str = style.container || '';

  if (style.header)
    str += `& .${HEADER_CLASS} {
    ${style.header}
  }`;

  if (style.content)
    str += `& .${CONTENT_CLASS} {
    ${style.content}
  }`;

  if (style.close)
    str += `& .${CLOSE_CLASS} {
    ${style.close}
  }`;

  return { container: str };
};

const mergeStyle = styles => {
  const { shared = {}, ...others } = styles;
  const ret = { shared: concatStyle(shared) };

  each(others, (val, key) => {
    ret[key] = {};

    each(val, (val2, key2) => {
      ret[key][key2] = concatStyle(val2);
    });
  });

  return ret;
};

const Context = React.createContext('');

export const applyTheme = (styles, config) => {
  const mergedStyles = mergeStyle(styles);
  const styleBuilder = createStyleBuilder(mergedStyles, config);
  const Scontainer = styleBuilder('div', 'container');

  const bootstrap = createBootstrap(styles, 'notification');

  const BaseComponent = (props: Props) => {
    const { id, name, label, ariaLabel, styleProps, children, rest } = bootstrap(props);
    const { closable } = rest;

    const checkboxId = `${id}-toggle`;

    return (
      <Context.Provider value={checkboxId}>
        <div>
          {closable && <InvisualCheckbox id={checkboxId} />}
          <Scontainer {...styleProps} className={CONTAINER_CLASS}>
            {children}
          </Scontainer>
        </div>
      </Context.Provider>
    );
  };

  BaseComponent.Header = ({ children, className }) => {
    const classes = cx(HEADER_CLASS, className);
    return <div className={classes}>{children}</div>;
  };

  BaseComponent.Content = ({ children, className }) => {
    const classes = cx(CONTENT_CLASS, className);
    return <div className={classes}>{children}</div>;
  };

  BaseComponent.Close = ({ children, className }) => {
    const classes = cx(CLOSE_CLASS, className);
    const checkboxId = useContext(Context);

    return (
      <div className={classes}>
        <label htmlFor={checkboxId}>{children}</label>
      </div>
    );
  };

  return BaseComponent;
};

const Notification = applyTheme({}, {});

export default Notification;

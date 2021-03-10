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
  Srow: any;
  Scol: any;
  cols: number;
}

interface ColProps {
  readonly width: number;
}

const CONTAINER_CLASS = 'pg-grid-container';
const ROW_CLASS = 'pg-grid-row';
const COL_CLASS = 'pg-grid-col';

const initialContext: Context = {
  styleProps: {},
  Srow: null,
  Scol: null,
  cols: 16,
};

const GridContext = React.createContext(initialContext);

const createGridRow = tag => {
  return styled[tag]`
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: inherit;
    -ms-flex-pack: inherit;
    justify-content: inherit;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    width: 100% !important;
    ${props =>
      props.collapse
        ? `@media (max-width: ${props.collapse}px) {
            -webkit-box-orient: vertical;
            -ms-flex-direction: column;
            flex-direction: column;
            & > * {
              width: 100% !important;
            }
          }
          `
        : ''}
  `;
};

const createGridCol = tag => {
  return styled[tag]<ColProps>`
    width: ${props => props.width}%;
  `;
};

export interface StyleConfig {
  defaultProps?: object;
  staticProps?: string[];
  breakProps?: string[];
  as?: object;
  cols?: number;
}

export const applyTheme = (styles, config: BaseStyleConfig) => {
  const processedStyle = processStyle(styles);
  const styleBuilder = createStyleBuilder(processedStyle, config);

  const as = config.as || {};
  const Scontainer = styleBuilder(as.container || 'div', 'container');
  const Srow = styleBuilder(createGridRow(as.row || 'div'), 'row');
  const Scol = styleBuilder(createGridCol(as.col || 'div'), 'col');

  const cols = config.cols || 16;

  const bootstrap = createBootstrap(processedStyle, 'grid');

  const BaseComponent = (props: Props) => {
    const { id, name, label, ariaLabel, styleProps, children, className, rest } = bootstrap(props);

    return (
      <GridContext.Provider value={{ styleProps, Srow, Scol, cols }}>
        <Scontainer {...rest} className={cx(CONTAINER_CLASS, className)}>
          {children}
        </Scontainer>
      </GridContext.Provider>
    );
  };

  BaseComponent.Row = props => {
    const { children, className, collapse, ...rest } = props;
    const classes = cx(ROW_CLASS, className);
    const { Srow, styleProps } = useContext(GridContext);

    return (
      <Srow className={classes} {...styleProps} {...rest} collapse={collapse || ''}>
        {children}
      </Srow>
    );
  };

  BaseComponent.Col = props => {
    const { children, className, span = 1, ...rest } = props;
    const classes = cx(COL_CLASS, className);
    const { Scol, cols, styleProps } = useContext(GridContext);
    const width = (span / cols) * 100;

    return (
      <Scol className={classes} {...styleProps} {...rest} width={width}>
        {children}
      </Scol>
    );
  };

  return BaseComponent;
};

const Grid = applyTheme({}, {});

export default Grid;

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
  gutter: number | number[] | undefined;
  gutterUnit: string | undefined;
  justify: string | undefined;
  align: string | undefined;
}

interface ColProps {
  readonly width: number;
}

const CONTAINER_CLASS = 'pg-grid-container';
const ROW_CLASS = 'pg-grid-row';
const COL_CLASS = 'pg-grid-col';

const JUSTIFY = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  'space-between': 'space-between',
  'space-around': 'space-around',
};

const ALIGN = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
};

const initialContext: Context = {
  styleProps: {},
  Srow: null,
  Scol: null,
  cols: 16,
  gutter: 0,
  gutterUnit: 'px',
  justify: 'start',
  align: 'start',
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
    ${props => `
      margin-left: -${props.gutterHorizontal}${props.gutterUnit};
      margin-right: -${props.gutterHorizontal}${props.gutterUnit};
      row-gap: ${props.gutterVertical}${props.gutterUnit};
      & > .${COL_CLASS} {
        padding: ${props.gutterVertical}${props.gutterUnit} ${props.gutterHorizontal}${props.gutterUnit};
      }
      justify-content: ${JUSTIFY[props.justify]};
      align-items: ${ALIGN[props.align]};
      ${
        props.collapse
          ? `@media (max-width: ${props.collapse}px) {
              -webkit-box-orient: vertical;
              -ms-flex-direction: column;
              flex-direction: column;
              & > .${COL_CLASS} {
                width: 100% !important;
              }
            }
            `
          : ''
      }
    `}
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
  gutter?: number | number[];
  gutterUnit?: string;
  justify?: string;
  align?: string;
}

export const applyTheme = (styles, config: BaseStyleConfig) => {
  const processedStyle = processStyle(styles);
  const styleBuilder = createStyleBuilder(processedStyle, config);

  const as = config.as || {};
  const Scontainer = styleBuilder(as.container || 'div', 'container');
  const Srow = styleBuilder(createGridRow(as.row || 'div'), 'row');
  const Scol = styleBuilder(createGridCol(as.col || 'div'), 'col');

  const { cols = 16, gutter, gutterUnit, justify, align } = config;

  const bootstrap = createBootstrap(processedStyle, 'grid');

  const BaseComponent = (props: Props) => {
    const { id, name, label, ariaLabel, styleProps, children, className, rest } = bootstrap(props);

    return (
      <GridContext.Provider value={{ styleProps, Srow, Scol, cols, gutter, gutterUnit, justify, align }}>
        <Scontainer {...rest} className={cx(CONTAINER_CLASS, className)}>
          {children}
        </Scontainer>
      </GridContext.Provider>
    );
  };

  BaseComponent.Row = props => {
    const { Srow, styleProps, gutter: gt, gutterUnit: gtu, justify: jt, align: al } = useContext(GridContext);
    const { children, className, gutter = gt, gutterUnit = gtu, justify = jt, align = al, collapse, ...rest } = props;
    const classes = cx(ROW_CLASS, className);

    let gutterHorizontal = 0;
    let gutterVertical = 0;

    if (Array.isArray(gutter)) {
      gutterHorizontal = gutter[0] || 0;
      gutterVertical = gutter[1] || 0;
    } else {
      const val = gutter || 0;
      gutterHorizontal = val;
      gutterVertical = val;
    }

    return (
      <Srow
        className={classes}
        {...styleProps}
        {...rest}
        collapse={collapse || ''}
        gutterHorizontal={gutterHorizontal}
        gutterVertical={gutterVertical}
        gutterUnit={gutterUnit || 'px'}
        justify={justify || 'start'}
        align={align || 'start'}
      >
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

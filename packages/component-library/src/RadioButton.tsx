import React from 'react';
import cx from 'clsx';
import { processStyle, createStyleBuilder, createBootstrap, StyleConfig as BaseStyleConfig } from './helpers';

export interface Props {
  id?: string;
  name?: string;
  label?: string;
  value?: string;
  disabled?: boolean;
  className?: string;
  style?: object;
  [key: string]: any;
}

export interface StyleConfig {
  defaultProps?: object;
  staticProps?: string[];
  breakProps?: string[];
  as?: object;
}

const CONTAINER_CLASS = 'pg-radio';
const LABEL_CLASS = 'pg-radio-label';
const INPUT_CLASS = 'pg-radio-input';
const DOT_CLASS = 'dot';

export const applyTheme = (styles, config: BaseStyleConfig) => {
  const processedStyle = processStyle(styles);
  const styleBuilder = createStyleBuilder(processedStyle, config);

  const as = config.as || {};
  const Scontainer = styleBuilder(as.container || 'div', 'container');
  const Slabel = styleBuilder('label', 'label');
  const SradioButton = styleBuilder('input', 'input');
  const Sdot = styleBuilder('span', 'dot');

  const bootstrap = createBootstrap(processedStyle, 'radio');

  const RadioButton = (props: Props) => {
    const { id, name, label, ariaLabel, styleProps, className, rest } = bootstrap(props);
    const { style, labelStyle, inputStyle, dotStyle, ...others } = rest;

    return (
      <Scontainer {...styleProps} style={style} className={cx(CONTAINER_CLASS, className)}>
        <Slabel {...styleProps} htmlFor={id} style={labelStyle} className={LABEL_CLASS}>
          <SradioButton
            aria-label={ariaLabel}
            {...others}
            type="radio"
            id={id}
            name={name}
            style={inputStyle}
            className={INPUT_CLASS}
          />
          <Sdot {...styleProps} style={dotStyle} className={DOT_CLASS} />
          {label}
        </Slabel>
      </Scontainer>
    );
  };

  return RadioButton;
};

const Radio = applyTheme({}, {});

export default Radio;

import React from 'react';
import cx from 'clsx';
import { processStyle, createStyleBuilder, createBootstrap, StyleConfig as BaseStyleConfig } from './helpers';

export interface Props {
  id?: string;
  name?: string;
  label?: string;
  value?: string;
  className?: string;
  style?: object;
  disabled?: boolean;
  [key: string]: any;
}

export interface StyleConfig {
  defaultProps?: object;
  staticProps?: string[];
  breakProps?: string[];
  as?: object;
}

const CONTAINER_CLASS = 'pg-checkbox';
const LABEL_CLASS = 'pg-checkbox-label';
const INPUT_CLASS = 'pg-checkbox-input';
const CHECKMARK_CLASS = 'checkmark';

export const applyTheme = (styles, config: BaseStyleConfig) => {
  const processedStyle = processStyle(styles);
  const styleBuilder = createStyleBuilder(processedStyle, config);

  const as = config.as || {};
  const Scontainer = styleBuilder(as.container || 'div', 'container');
  const Slabel = styleBuilder('label', 'label');
  const Scheckbox = styleBuilder('input', 'input');
  const Scheckmark = styleBuilder('span', 'checkmark');

  const bootstrap = createBootstrap(processedStyle, 'checkbox');

  const Checkbox = (props: Props) => {
    const { id, name, label, ariaLabel, styleProps, className, rest } = bootstrap(props);
    const { style, labelStyle, inputStyle, checkmarkStyle, ...others } = rest;

    return (
      <Scontainer {...styleProps} style={style} className={cx(CONTAINER_CLASS, className)}>
        <Slabel {...styleProps} htmlFor={id} style={labelStyle} className={LABEL_CLASS}>
          <Scheckbox
            aria-label={ariaLabel}
            {...others}
            type="checkbox"
            id={id}
            name={name}
            style={inputStyle}
            className={INPUT_CLASS}
          />
          <Scheckmark {...styleProps} style={checkmarkStyle} className={CHECKMARK_CLASS} />
          {label}
        </Slabel>
      </Scontainer>
    );
  };

  return Checkbox;
};

const Checkbox = applyTheme({}, {});

export default Checkbox;

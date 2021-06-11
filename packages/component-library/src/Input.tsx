import React from 'react';
import cx from 'clsx';
import { processStyle, createStyleBuilder, createBootstrap, StyleConfig as BaseStyleConfig } from './helpers';

export interface Props {
  id?: string;
  name?: string;
  label?: string;
  type?: 'email' | 'number' | 'password' | 'tel' | 'text' | 'url';
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
  includeWrapper?: boolean;
  as?: object;
}

const CONTAINER_CLASS = 'pg-input';
const LABEL_CLASS = 'pg-input-label';
const INPUT_CLASS = 'pg-input-input';
const WRAPPER_CLASS = 'pg-input-wrapper';

export const applyTheme = (styles, config: BaseStyleConfig) => {
  const processedStyle = processStyle(styles);
  const styleBuilder = createStyleBuilder(processedStyle, config);

  const as = config.as || {};
  const Scontainer = styleBuilder(as.container || 'div', 'container');
  const Slabel = styleBuilder('label', 'label');
  const Swapper = config.includeWrapper ? styleBuilder(as.wrapper || 'div', 'wrapper') : null;
  const Sinput = styleBuilder('input', 'input');

  const bootstrap = createBootstrap(processedStyle, 'input');

  const Input = (props: Props) => {
    const { id, name, label, ariaLabel, styleProps, className, rest } = bootstrap(props);
    const { style, labelStyle, inputStyle, wrapperStyle, ...others } = rest;

    const input = (
      <Sinput aria-label={ariaLabel} {...others} id={id} name={name} style={inputStyle} className={INPUT_CLASS} />
    );

    return (
      <Scontainer {...styleProps} style={style} className={cx(CONTAINER_CLASS, className)}>
        {label && (
          <Slabel htmlFor={id} {...styleProps} style={labelStyle} className={LABEL_CLASS}>
            {label}
          </Slabel>
        )}
        {Swapper ? (
          <Swapper {...styleProps} style={wrapperStyle} className={WRAPPER_CLASS}>
            {input}
          </Swapper>
        ) : (
          input
        )}
      </Scontainer>
    );
  };

  return Input;
};

const Input = applyTheme({}, {});

export default Input;

import React from 'react';
import cx from 'clsx';
import { processStyle, createStyleBuilder, createBootstrap, StyleConfig as BaseStyleConfig } from './helpers';

export interface Props {
  id?: string;
  name?: string;
  label?: string;
  description?: string;
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

const CONTAINER_CLASS = 'pg-datepicker';
const LABEL_CLASS = 'pg-datepicker-label';
const DESCRIPTION_CLASS = 'pg-datepicker-description';
const INPUT_CLASS = 'pg-datepicker-input';
const WRAPPER_CLASS = 'pg-datepicker-wrapper';

export const applyTheme = (styles, config: BaseStyleConfig) => {
  const processedStyle = processStyle(styles);
  const styleBuilder = createStyleBuilder(processedStyle, config);

  const as = config.as || {};
  const Scontainer = styleBuilder(as.container || 'div', 'container');
  const Slabel = styleBuilder('label', 'label');
  const Sdescription = styleBuilder('label', 'description');
  const Swapper = config.includeWrapper ? styleBuilder(as.wrapper || 'div', 'wrapper') : null;
  const Sinput = styleBuilder('input', 'input');

  const bootstrap = createBootstrap(processedStyle, 'datepicker');

  const BaseComponent = (props: Props) => {
    const { id, name, label, description, ariaLabel, styleProps, className, rest } = bootstrap(props);
    const { style, labelStyle, descriptionStyle, inputStyle, wrapperStyle, ...others } = rest;

    const input = (
      <Sinput
        aria-label={ariaLabel}
        {...others}
        type="date"
        id={id}
        name={name}
        style={inputStyle}
        className={INPUT_CLASS}
      />
    );

    return (
      <Scontainer {...styleProps} style={style} className={cx(CONTAINER_CLASS, className)}>
        {label && (
          <Slabel htmlFor={id} {...styleProps} style={labelStyle} className={LABEL_CLASS}>
            {label}
          </Slabel>
        )}
        {description && (
          <Sdescription htmlFor={id} {...styleProps} style={descriptionStyle} className={DESCRIPTION_CLASS}>
            {description}
          </Sdescription>
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

  return BaseComponent;
};

const DatePicker = applyTheme({}, {});

export default DatePicker;

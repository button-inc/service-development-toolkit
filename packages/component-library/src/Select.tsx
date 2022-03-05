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
  children?: React.ReactNode;
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

const CONTAINER_CLASS = 'pg-select';
const LABEL_CLASS = 'pg-select-label';
const DESCRIPTION_CLASS = 'pg-select-description';
const INPUT_CLASS = 'pg-select-input';
const WRAPPER_CLASS = 'pg-select-wrapper';

export const applyTheme = (styles, config: BaseStyleConfig) => {
  const processedStyle = processStyle(styles);
  const styleBuilder = createStyleBuilder(processedStyle, config);

  const as = config.as || {};
  const Scontainer = styleBuilder(as.container || 'div', 'container');
  const Slabel = styleBuilder('label', 'label');
  const Sdescription = styleBuilder('label', 'description');
  const Swapper = config.includeWrapper ? styleBuilder(as.wrapper || 'div', 'wrapper') : null;
  const Sselect = styleBuilder('select', 'input');

  const bootstrap = createBootstrap(processedStyle, 'select');

  const BaseComponent = (props: Props) => {
    const { id, name, label, description, ariaLabel, styleProps, children, className, rest } = bootstrap(props);
    const { style, labelStyle, descriptionStyle, inputStyle, wrapperStyle, ...others } = rest;

    const input = (
      <Sselect aria-label={ariaLabel} {...others} id={id} name={name} style={inputStyle} className={INPUT_CLASS}>
        {children}
      </Sselect>
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

const Select = applyTheme({}, { staticProps: ['fullWidth'] });

export default Select;

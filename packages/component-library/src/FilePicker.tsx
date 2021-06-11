import React from 'react';
import cx from 'clsx';
import styled, { StyledInterface } from 'styled-components';
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
  wrapperExtraStyle?: string;
  as?: object;
}

const CONTAINER_CLASS = 'pg-filepicker';
const LABEL_CLASS = 'pg-filepicker-label';
const INPUT_CLASS = 'pg-filepicker-input';
const WRAPPER_CLASS = 'pg-filepicker-wrapper';

interface InputWrapperProps {
  readonly wrapperExtraStyle?: string;
}

const InputWrapper = styled.div<InputWrapperProps>`
  position: relative;
  overflow: hidden;
  display: inline-block;

  ${props => props.wrapperExtraStyle}
`;

const HiddenInput = styled.input.attrs({ type: 'file' })`
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  font-size: 0px;
  width: 100%;
  height: 100%;
`;

export const applyTheme = (styles, config: BaseStyleConfig) => {
  const processedStyle = processStyle(styles);
  const styleBuilder = createStyleBuilder(processedStyle, config);

  const as = config.as || {};
  const Scontainer = styleBuilder(as.container || 'div', 'container');
  const Slabel = styleBuilder('label', 'label');
  const Sinput = styleBuilder('input', 'input');

  const bootstrap = createBootstrap(processedStyle, 'filepicker');

  const FilePicker = (props: Props) => {
    const { id, name, label, ariaLabel, styleProps, children, className, rest } = bootstrap(props);
    const { style, labelStyle, inputStyle, role, wrapperStyle, ...others } = rest;

    return (
      <Scontainer {...styleProps} style={style} className={cx(CONTAINER_CLASS, className)}>
        {label && (
          <Slabel htmlFor={id} {...styleProps} style={labelStyle} className={LABEL_CLASS}>
            {label}
          </Slabel>
        )}
        {children ? (
          <InputWrapper
            style={wrapperStyle}
            className={WRAPPER_CLASS}
            wrapperExtraStyle={config.wrapperExtraStyle || ''}
            role={role}
          >
            {children}
            <HiddenInput
              aria-label={ariaLabel}
              {...others}
              id={id}
              name={name}
              style={inputStyle}
              className={INPUT_CLASS}
            />
          </InputWrapper>
        ) : (
          <Sinput
            aria-label={ariaLabel}
            {...others}
            type="file"
            id={id}
            name={name}
            style={inputStyle}
            className={INPUT_CLASS}
          />
        )}
      </Scontainer>
    );
  };

  return FilePicker;
};

const FilePicker = applyTheme({}, {});

export default FilePicker;

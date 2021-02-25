import React from 'react';
import styled, { StyledInterface } from 'styled-components';
import { createStyleBuilder, createBootstrap, StyleConfig as BaseStyleConfig } from './helpers';

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
}

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
  font-size: 100px;
`;

export const applyTheme = (styles, config: BaseStyleConfig) => {
  const styleBuilder = createStyleBuilder(styles, config);

  const Scontainer = styleBuilder('div', 'container');
  const Slabel = styleBuilder('label', 'label');
  const Sinput = styleBuilder('input', 'input');

  const bootstrap = createBootstrap(styles, 'filepicker');

  const BaseComponent = (props: Props) => {
    const { id, name, label, ariaLabel, styleProps, children, rest } = bootstrap(props);

    return (
      <Scontainer {...styleProps}>
        {label && (
          <Slabel htmlFor={id} {...styleProps}>
            {label}
          </Slabel>
        )}
        {children ? (
          <InputWrapper wrapperExtraStyle={config.wrapperExtraStyle || ''}>
            {children}
            <HiddenInput aria-label={ariaLabel} {...rest} id={id} name={name} />
          </InputWrapper>
        ) : (
          <Sinput aria-label={ariaLabel} {...rest} type="file" id={id} name={name} />
        )}
      </Scontainer>
    );
  };

  return BaseComponent;
};

const FilePicker = applyTheme({}, {});

export default FilePicker;

import React from 'react';
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
  includeWrapper?: boolean;
  as?: object;
}

export const applyTheme = (styles, config: BaseStyleConfig) => {
  const processedStyle = processStyle(styles);
  const styleBuilder = createStyleBuilder(processedStyle, config);

  const as = config.as || {};
  const Scontainer = styleBuilder(as.container || 'div', 'container');
  const Slabel = styleBuilder('label', 'label');
  const Swapper = config.includeWrapper ? styleBuilder(as.wrapper || 'div', 'wrapper') : null;
  const Stextarea = styleBuilder('textarea', 'input');

  const bootstrap = createBootstrap(processedStyle, 'textarea');

  const BaseComponent = (props: Props) => {
    const { id, name, label, ariaLabel, styleProps, rest } = bootstrap(props);

    const input = <Stextarea aria-label={ariaLabel} {...rest} id={id} name={name} />;

    return (
      <Scontainer {...styleProps}>
        {label && (
          <Slabel htmlFor={id} {...styleProps}>
            {label}
          </Slabel>
        )}
        {Swapper ? <Swapper {...styleProps}>{input}</Swapper> : input}
      </Scontainer>
    );
  };

  return BaseComponent;
};

const Textarea = applyTheme({}, {});

export default Textarea;

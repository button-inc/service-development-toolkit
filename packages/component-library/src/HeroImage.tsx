import React from 'react';
import styled from 'styled-components';
import { createBootstrap, StyleConfig as BaseStyleConfig } from './helpers';
import { processStyle, createStyleBuilder } from './helpers';

export interface Props {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  style?: object;
  url?: string;
  [key: string]: any;
}

const Container = styled.div`
  background-image: url(${(props: Props) => props.url});
  background-size: cover;
`;

export const applyTheme = (styles, config: BaseStyleConfig) => {
  const processedStyle = processStyle(styles);
  const styleBuilder = createStyleBuilder(processedStyle, config);
  
  const SContainer = styleBuilder(Container, 'container');
  const SInnerContainer = styleBuilder('div', 'innercontainer');
  
  const bootstrap = createBootstrap(processedStyle, 'heroimage');
  
  
  const HeroImage = (props: Props) => {
    const { id, name, label, ariaLabel, styleProps, children, className, rest } = bootstrap(props);
    const { url, ...others } = rest;
    
    return (
      <SContainer {...others} url={url}>
        <SInnerContainer>{children}</SInnerContainer>
      </SContainer>
      );
    }
    
    return HeroImage;
  }
  
  const HeroImage = applyTheme({}, {});

  export default HeroImage;
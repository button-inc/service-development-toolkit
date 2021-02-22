import React from 'react';
import styled from 'styled-components';
import { ExternalLinkAlt, FaSVG } from './fontawesome';

const sizes: {
  [key: string]: string;
} = {
  small: '1rem',
  medium: '1.2rem',
  large: '1.3rem',
};

type Props = {
  size?: string;
};

const StyledAnchor = styled.a`
  font-family: 'BC Sans', 'Noto Sans', Arial, 'sans serif';
  font-size: ${(props: Props) => sizes[props.size || 'small']};
  color: #1a5a96;

  &:hover {
    text-decoration: none;
    color: blue;
  }
`;

export default function Component(props: any) {
  const { content, icon, children, ...rest } = props;

  return (
    <StyledAnchor {...rest}>
      {content || children}
      {icon && (
        <>
          &nbsp;
          <FaSVG>
            <path fill="currentColor" d={ExternalLinkAlt} />
          </FaSVG>
        </>
      )}
    </StyledAnchor>
  );
}

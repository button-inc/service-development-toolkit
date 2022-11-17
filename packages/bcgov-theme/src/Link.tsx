import React from 'react';
import styled from 'styled-components';
import { ExternalLinkAlt, FaSVG } from './fontawesome';

export const sizes: {
  [key: string]: string;
} = {
  small: '0.8rem',
  medium: '1rem',
  large: '1.2rem',
};

type Props = {
  size?: string;
  content?: string;
  external?: boolean;
  children?: React.ReactNode;
};

const StyledAnchor = styled.a`
  font-size: ${(props: Props) => sizes[props.size || 'medium']};
  color: #1a5a96;

  &:hover {
    text-decoration: none;
    color: blue;
  }

  &:focus {
    outline: 4px solid #3b99fc;
    outline-offset: 1px;
  }
`;

export default function Link(props: Props) {
  const { content, external, children, ...rest } = props;

  return (
    <StyledAnchor target={external ? '_blank' : '_self'} {...rest}>
      {content || children}
      {external && (
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

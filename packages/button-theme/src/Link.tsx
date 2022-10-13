import React from 'react';
import { applyTheme, StyleConfig } from '@button-inc/component-library/Link';

export const sizes: {
  [key: string]: string;
} = {
  small: '0.8rem',
  medium: '1rem',
  large: '1.2rem',
};

type Props = {
  size?: string;
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

const config: StyleConfig = {
  defaultProps: {
    variant: 'primary',
    size: 'medium',
  },
  breakProps: [],
  staticProps: [],
};

const Button = applyTheme(styles, config);

export default Button;

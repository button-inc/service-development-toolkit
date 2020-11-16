import styled, { css, DefaultTheme } from 'styled-components';

interface ButtonProps {
  secondary: boolean;
  primary: boolean;
  large: boolean;
  theme: DefaultTheme;
}

const Button = styled.button`
  ${(props: ButtonProps) => props.theme?.btn?.shared}
  ${(props: ButtonProps) => props.secondary && props.theme?.btn?.secondary}
  ${(props: ButtonProps) => props.primary && props.theme?.btn?.primary}
  ${(props: ButtonProps) =>
    props.large &&
    css`
      font-size: 1.5rem;
    `}
`;

export default Button;

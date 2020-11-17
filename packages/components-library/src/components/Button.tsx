import styled from 'styled-components';
import { getCssFromDisplayProps } from '../helpers';
import { buttonDisplayProps } from '../constants';

interface ButtonProps {
  theme: any;
  secondary?: boolean;
  warning?: boolean;
  danger?: boolean;
  success?: boolean;
  primary?: boolean;
  large?: boolean;
  small?: boolean;
}

const Button = styled.button`
  ${(props: ButtonProps) => props.theme?.btn?.shared}
  ${(props: ButtonProps) => getCssFromDisplayProps(props, 'btn', buttonDisplayProps)}
`;

export default Button;

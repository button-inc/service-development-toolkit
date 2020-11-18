import styled, { DefaultTheme } from 'styled-components';
import getCssFromDisplayProps from './helpers';
import GlobalStyles from './GlobalStyles';

interface ButtonProps {
  secondary: boolean;
  primary: boolean;
  large: boolean;
  theme: DefaultTheme;
}

interface Styles {
  shared: string;
  primary: string;
  secondary: string;
  large: string;
  small: string;
  warning: string;
  danger: string;
  success: string;
}

const styles: Styles = {
  shared: `
  color: ${GlobalStyles.fontColor};
  border-radius: 70px;
  padding: 25px 30px;
  line-height: 26px;
  font-size: 1rem;
  border:none;
  `,
  primary: `
    color: ${GlobalStyles.fontColor};
    background-color: ${GlobalStyles.primaryColor};
    font-family: ${GlobalStyles.primaryFont}, ${GlobalStyles.secondaryFont};
  `,
  secondary: `
    background: blue
  `,
  large: `
    line-height: 39px;
    font-size: 1.5rem;
  `,
  small: `
    line-height: 13px;
    font-size: 0.75rem;
  `,
  warning: `
    background-color: ${GlobalStyles.warningColor}
  `,
  danger: `
    background-color: ${GlobalStyles.dangerColor}
  `,
  success: `
    background-color: ${GlobalStyles.successColor}
  `,
};

const defaultButton = styled.button`
  ${styles.shared}
`;

const Button = styled(defaultButton)`
  ${(props: ButtonProps) => {
    return getCssFromDisplayProps<ButtonProps, Styles>(props, styles);
  }}
`;

export default Button;

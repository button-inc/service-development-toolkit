import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import { applyThemeFactory } from './helpers';

type ButtonProps = {
  secondary?: boolean;
  primary?: boolean;
  large?: boolean;
};

interface Styles {
  shared?: string;
  primary?: string;
  secondary?: string;
  large?: string;
  small?: string;
  warning?: string;
  danger?: string;
  success?: string;
}

const defaultStyles: Styles = {
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

const BaseButton = styled.button``;

export const applyTheme = applyThemeFactory<Styles, ButtonProps>(defaultStyles, BaseButton);

const Button = applyTheme(defaultStyles);

export default Button;

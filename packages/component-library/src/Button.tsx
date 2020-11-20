import styled from 'styled-components';
import getCssFromDisplayProps from './helpers';
import GlobalStyles from './GlobalStyles';

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

export const applyTheme = (styles: Styles) => {
  const stylesToApply = { ...defaultStyles, ...styles };

  const defaultButton = styled.button`
    ${stylesToApply.shared}
  `;

  return styled(defaultButton)<ButtonProps>`
    ${(props: ButtonProps) => {
      return getCssFromDisplayProps<ButtonProps, Styles>(props, stylesToApply);
    }}
  `;
};

const Button = applyTheme(defaultStyles);

export default Button;

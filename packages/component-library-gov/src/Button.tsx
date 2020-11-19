import styled, { DefaultTheme, ThemeProvider } from 'styled-components';
import getCssFromDisplayProps from './helpers';
import GlobalStyles from './GlobalStyles';
import _Button from 'component-library/lib/Button';

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
}

const styles: Styles = {
  shared: `
      border-radius: 4px;
      text-align: center;
      text-decoration: none;
      display: block;
      font-size: 18px;
      font-family: ‘BCSans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
      font-weight: 700;
      letter-spacing: 1px;
      cursor: pointer;
      &:focus {
        outline: 4px solid #3B99FC;
        outline-offset: 1px;
      }
      &:active {
        opacity: 1;
      }
    `,
  primary: `
      background-color: ${GlobalStyles.primaryColor};
      border: none;
      color: white;
      padding: 12px 32px;

      &:hover {
        text-decoration: underline;
        opacity: 0.80;
      }
    `,
  secondary: `
      background: none;
      border: 2px solid #003366;
      padding: 10px 30px;
      color: #003366;

      &:hover {
        opacity: 0.80;
        text-decoration: underline;
        background-color: #003366;
        color: #FFFFFF;
      }
    `,
};

const defaultButton = styled(_Button)`
  ${styles.shared}
`;

const Button = styled(defaultButton)`
  ${(props: ButtonProps) => {
    return getCssFromDisplayProps<ButtonProps, Styles>(props, styles);
  }}
`;

export default Button;

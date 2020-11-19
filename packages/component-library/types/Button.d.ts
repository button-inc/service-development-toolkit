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
export declare const applyTheme: (
  styles: Styles
) => import('styled-components').StyledComponent<'button', any, {}, never>;
declare const Button: import('styled-components').StyledComponent<'button', any, {}, never>;
export default Button;

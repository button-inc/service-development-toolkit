import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    btn: {
      shared: string;
      primary: string;
      secondary: string;
      warning: string;
      danger: string;
      success: string;
      small: string;
      large: string;
    };
  }
}

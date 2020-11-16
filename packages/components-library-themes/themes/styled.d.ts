import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    btn: {
      shared: string;
      primary: string;
      secondary: string;
    };
  }
}

import { DefaultTheme } from 'styled-components';
const primaryColor = '#2476ed';
const fontColor = '#fff';
const primaryFont = 'Basisgrotesquepro';
const secondaryFont = 'sans-serif';
const warningColor = 'yellow';
const dangerColor = 'red';
const successColor = 'green';


export const ButtonTheme: DefaultTheme = {
  name: 'ButtonInc',
  btn: {
    shared: `
    color: ${fontColor};
    border-radius: 70px;
    padding: 25px 30px;
    line-height: 26px;
    font-size: 1rem;
    border:none;
    `,
    primary: `
      color: ${fontColor};
      background-color: ${primaryColor};
      font-family: ${primaryFont}, ${secondaryFont};
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
      background-color: ${warningColor}
    `,
    danger: `
      background-color: ${dangerColor}
    `,
    success: `
      background-color: ${successColor}
    `
  }
}

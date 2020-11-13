import { DefaultTheme } from 'styled-components';
const primaryColor = '#2476ed';
const fontColor = '#fff';
const primaryFont = 'Basisgrotesquepro';
const secondaryFont = 'sans-serif'

export const ButtonTheme: DefaultTheme = {
  name: 'ButtonInc',
  btn: {
    shared: '',
    primary: `
      color: ${fontColor};
      background-color: ${primaryColor};
      font-family: ${primaryFont}, ${secondaryFont};
      border-radius: 70px;
      padding: 25px 30px;
      line-height: 26px;
      font-size: 1rem;
      border:none;
    `,
    secondary: `
      background: red
    `
  }
}
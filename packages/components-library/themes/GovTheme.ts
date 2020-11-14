import { DefaultTheme } from 'styled-components';

const primaryColor = '#003366';

export const GovTheme: DefaultTheme = {
  name: 'Gov',
  btn: {
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
      background-color: ${primaryColor};
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
  },
};

export default GovTheme;

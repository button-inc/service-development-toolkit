import { applyTheme, StyleConfig } from '@button-inc/component-library/Button';
import styles from './styles';

export const buttonStyles = {
  ...styles,
  // shared styles are applied to all variants
  shared: {
    button: `
      cursor: pointer;
      display: inline-block;
      min-height: 1em;
      outline: none;
      border-width: 0;
      vertical-align: baseline;
      background: #E0E1E2 none;
      color: rgba(0, 0, 0, 0.6);
      margin: 0;
      padding: 0.78571429em 1.6em 0.78571429em;
      text-transform: none;
      text-shadow: none;
      font-weight: bold;
      line-height: 1em;
      font-style: normal;
      text-align: center;
      text-decoration: none;
      border-radius: 0.25rem;
      box-shadow: 0px 0px 0px 1px transparent inset, 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
      user-select: none;
      -webkit-transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, background 0.1s ease, -webkit-box-shadow 0.1s ease;
      transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, background 0.1s ease, -webkit-box-shadow 0.1s ease;
      transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;
      transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, box-shadow 0.1s ease, background 0.1s ease, -webkit-box-shadow 0.1s ease;
      will-change: '';
      -webkit-tap-highlight-color: transparent;
    `,
  },
};

const config: StyleConfig = {
  defaultProps: {
    variant: 'primary',
    size: 'medium',
  },
  breakProps: ['disabled'],
  staticProps: [],
};

const Button = applyTheme(buttonStyles, config);

export default Button;

import { applyTheme } from 'component-library/Button';

const styles = {
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
      font-family: 'Roboto', 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
      margin: 0;
      padding: 0.78571429em 1.5em 0.78571429em;
      text-transform: none;
      text-shadow: none;
      font-weight: bold;
      line-height: 1em;
      font-style: normal;
      text-align: center;
      text-decoration: none;
      border-radius: 0.28571429rem;
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
  size: {
    medium: {
      button: `
        font-size: 1rem;
      `,
    },
  },
  variant: {
    primary: {
      button: `
        color: #fff;
        background-color: #2476ED;
        box-shadow: 0px 0px 0px 1px #2476ED inset !important;

        &:hover {
          background-color: rgba(78,150,255,1);
          box-shadow: 0px 0px 0px 1px rgba(78,150,255,1) inset !important;
          text-decoration: underline;
        }

        &:focus {
          box-shadow: 0px 0px 0px 2px rgba(251,221,1,1) inset !important;
        }
      `,
    },
    secondary: {
      button: `
        color: #2476ED;
        background-color: transparent;
        box-shadow: 0px 0px 0px 1px #2476ED inset !important;

        &:hover {
          background-color: rgba(185,226,255,1);
          text-decoration: underline;
        }

        &:focus {
          box-shadow: 0px 0px 0px 2px rgba(251,221,1,1) inset !important;
        }
      `,
    },
    warning: {
      button: `
        color: #fff;
        background-color: rgba(245,14,14,1);
        box-shadow: 0px 0px 0px 1px rgba(245,14,14,1) inset !important;

        &:hover {
          background-color: rgba(245,14,14,1);
          box-shadow: 0px 0px 0px 1px rgba(245,14,14,1) inset !important;
          text-decoration: underline;
        }

        &:focus {
          box-shadow: 0px 0px 0px 2px rgba(251,221,1,1) inset !important;
        }
      `,
    },
  },
  disabled: `
    font-size: 1rem;
    color: #fff !important;
    background-color: #2476ED !important;
    box-shadow: 0px 0px 0px 1px #2476ED inset !important;
    text-decoration: none !important;
    opacity: 0.43;
  `,
};

const config = {
  defaultProps: {
    variant: 'primary',
    size: 'medium',
  },
  breakProps: ['disabled'],
  staticProps: [],
};

const Button: any = applyTheme(styles, config);

export default Button;

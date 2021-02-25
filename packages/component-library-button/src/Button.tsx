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
  size: {
    small: {
      button: `
        font-size: 0.8rem;
      `,
    },
    medium: {
      button: `
        font-size: 1rem;
      `,
    },
    large: {
      button: `
        font-size: 1.2rem;
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
          background-color: #4e96ff;
          box-shadow: 0px 0px 0px 1px #4e96ff inset !important;
          text-decoration: underline;
        }

        &:focus {
          box-shadow: 0px 0px 0px 2px #FBDD01 inset !important;
        }
      `,
    },
    secondary: {
      button: `
        color: #2476ED;
        background-color: transparent;
        box-shadow: 0px 0px 0px 2px #2476ED inset !important;

        &:hover {
          background-color: #b9e2ff;
          text-decoration: underline;
        }

        &:focus {
          box-shadow: 0px 0px 0px 2px #FBDD01 inset !important;
        }
      `,
    },
    warning: {
      button: `
        color: #fff;
        background-color: #F50E0E;
        box-shadow: 0px 0px 0px 1px #F50E0E inset !important;

        &:hover {
          background-color: #FA7C7C;
          box-shadow: 0px 0px 0px 1px #FA7C7C inset !important;
          text-decoration: underline;
        }

        &:focus {
          box-shadow: 0px 0px 0px 2px #FBDD01 inset !important;
        }
      `,
    },
    dark: {
      button: `
        color: #000;
        background-color: #fff;
        box-shadow: 0px 0px 0px 2px #000 inset !important;

        &:hover {
          color: #fff;
          background-color: #000;
          text-decoration: underline;
        }

        &:focus {
          box-shadow: 0px 0px 0px 2px #FBDD01 inset !important;
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

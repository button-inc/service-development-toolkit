import { applyTheme, StyleConfig } from '@button-inc/component-library/Button';

export const styles = {
  shared: {
    button: `
      border-radius: 0.222em;
      border-width: 0;
      padding: 0.66em 1.77em;
      text-align: center;
      text-decoration: none;
      font-weight: 700;
      letter-spacing: 1px;
      display: inline-block;
      cursor: pointer;
      box-shadow: 0px 0px 0px 2px transparent inset, 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
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
        background-color: #003366;
        box-shadow: 0px 0px 0px 2px #003366 inset !important;
        color: #fff;

        &:hover {
          text-decoration: underline;
          opacity: 0.80;
        }

        &:focus {
          outline: 4px solid #3B99FC;
          outline-offset: 1px;
        }

        &:active {
          opacity: 1;
        }
      `,
    },
    'primary-inverse': {
      button: `
        background-color: #fff;
        box-shadow: 0px 0px 0px 2px #313132 inset !important;
        color: #313132;

        &:hover {
          text-decoration: underline;
          background-color: #f2f2f2
        }

        &:focus {
          outline: 4px solid #3B99FC;
          outline-offset: 1px;
        }

        &:active {
          background-color: #fff;
        }
      `,
    },
    'primary-disabled': {
      button: `
        background-color: #003366;
        box-shadow: 0px 0px 0px 2px #fff inset !important;
        color: #fff;
        cursor: not-allowed;
        opacity: 0.3;
      `,
    },
    secondary: {
      button: `
        background: none;
        box-shadow: 0px 0px 0px 2px #003366 inset !important;
        color: #003366;

        &:hover {
          opacity: 0.80;
          text-decoration: underline;
          background-color: #003366;
          color: #FFFFFF;
        }

        &:focus {
          outline-offset: 1px;
          outline: 4px solid #3B99FC;
        }

        &:active {
          opacity: 1;
        }
      `,
    },
    'secondary-inverse': {
      button: `
        background: none;
        box-shadow: 0px 0px 0px 2px #fff inset !important;
        color: #fff;

        &:hover {
          text-decoration: underline;
          background-color: #fff;
          color: #313132;
        }

        &:focus {
          outline-offset: 1px;
          outline: 4px solid #3B99FC;
        }

        &:active {
          background-color: #f2f2f2;
          color: #313132;
        }

        &:disabled {
          background-color: #003366;
          opacity: 0.3;
          cursor: not-allowed;
        }
      `,
    },
    'secondary-disabled': {
      button: `
        background-color: #fff;
        box-shadow: 0px 0px 0px 2px #003366 inset !important;
        color: #003366;
        cursor: not-allowed;
        opacity: 0.3;
      `,
    },
  },
};

const config: StyleConfig = {
  defaultProps: {
    variant: 'primary',
    size: 'medium',
  },
  breakProps: [],
  staticProps: ['fullHeight', 'fullWidth'],
};

const Button = applyTheme(styles, config);

export default Button;

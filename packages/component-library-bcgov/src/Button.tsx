import { applyTheme } from 'component-library/Button';

const styles = {
  shared: {
    button: `
      border-radius: 4px;
      padding: 0.78571429em 1.6em 0.78571429em;
      text-align: center;
      text-decoration: none;
      Font-family: ‘BCSans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
      font-weight: 700;
      letter-spacing: 1px;
      display: inline-block;
      cursor: pointer;
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
        border: none;
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
        border: none;
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
        opacity: 0.3;
        border: none;
        color: #fff;
        cursor: not-allowed;
      `,
    },
    secondary: {
      button: `
        background: none;
        border: 2px solid #003366;
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
        border: 2px solid #fff;
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
        opacity: 0.3;
        border: 2px solid #003366;
        color: #003366;
        cursor: not-allowed;
      `,
    },
  },
};

const config = {
  defaultProps: {
    variant: 'primary',
    size: 'medium',
  },
  breakProps: [],
  staticProps: [],
};

const Button: any = applyTheme(styles, config);

export default Button;

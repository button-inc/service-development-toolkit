import { applyTheme } from 'component-library/Input';

const styles = {
  shared: {
    label: `
      display: block;
      font-weight: 600;
    `,
    input: `
      margin: 0em;
      max-width: 100%;
      -webkit-box-flex: 1;
      -ms-flex: 1 0 auto;
      flex: 1 0 auto;
      outline: none;
      -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
      text-align: left;
      line-height: 1.21428571em;
      font-family: 'Roboto', 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
      padding: 0.35em 0.5em;
      background: #FFFFFF;
      color: rgba(0, 0, 0, 0.87);
      border-radius: 0.15rem;
      -webkit-box-shadow: none;
      box-shadow: none;
      display: block;
    `,
  },
  size: {
    small: {
      label: `
        font-size: 0.7rem;
      `,
      input: `
        font-size: 0.8rem;
      `,
    },
    medium: {
      label: `
        font-size: 0.8rem;
      `,
      input: `
        font-size: 1rem;
      `,
    },
    large: {
      label: `
        font-size: 0.9rem;
      `,
      input: `
        font-size: 1.2rem;
      `,
    },
  },
  variant: {
    standard: {
      input: `
        border: 1px solid #000;
      `,
    },
    warning: {
      input: `
        border: 2px solid #F50E0E;
      `,
    },
  },
  required: {
    label: `
      &:after {
        margin: -0.2em 0em 0em 0.2em;
        content: '*';
        color: #DB2828;
      }
    `,
  },
};

const config = {
  defaultProps: {
    variant: 'standard',
    size: 'small',
  },
  staticProps: ['fullWidth'],
};

const Input = applyTheme(styles, config);

export default Input;

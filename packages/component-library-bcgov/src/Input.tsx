import { applyTheme } from 'component-library/Input';

const styles = {
  shared: {
    label: `
      font-family: ‘BCSans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
      display: block;
      margin-bottom: 5px;
    `,
    input: `
      font-family: ‘BCSans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
      display: block;
      border: 2px solid #606060;
      border-radius: 4px;
      padding: 0.45em 0.55em;
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
    size: 'medium',
  },
  staticProps: ['fullWidth'],
};

const Input = applyTheme(styles, config);

export default Input;

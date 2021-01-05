import { applyTheme } from 'component-library/Input';

const styles = {
  shared: {
    input: `
    border: 2px solid #606060;
    height: 34px;
    margin-top: 5px;
    margin-bottom: 15px;
    padding: 5px 5px 5px 7px;
    border-radius: 4px;
    `,
    container: `
      background: red;
    `,
    label: `
      color: green;
    `,
  },
  small: {
    input: `
    height: 28px;
    margin-top: 4px;
    margin-bottom: 12px;
    padding: 4px 4px 4px 6px;
    `,
  },
  large: {
    input: `
    height: 40px;
    margin-top: 6px;
    margin-bottom: 18px;
    padding: 6px 6px 6px 8px;
    `,
  },
};

const Input = applyTheme(styles);

export default Input;

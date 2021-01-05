import { applyTheme } from 'component-library/RadioButton';

const styles = {
  shared: {
    label: 'font-size: 32px;',
    container: 'background-color: red;',
  },
  defaultProps: {
    size: 'tiny',
  },
  tiny: {
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
  large: {
    container: `
      border: 5px solid red;
      background-color: yelllow;
    `,
    label: 'color: orange;',
  },
};

const Checkbox: any = applyTheme(styles);

export default Checkbox;

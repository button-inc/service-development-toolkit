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
    container: `
      border: 5px solid blue;
      background-color: green;
    `,
    label: 'color: purple;',
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

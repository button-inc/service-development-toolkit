import { applyTheme } from 'component-library/Select';

const styles = {
  shared: {
    select: '',
    container: `
      border: 1px solid black;
      padding: 2px;
    `,
  },
  defaultProps: {
    variant: 'warning',
    size: 'tiny',
  },
  tiny: {
    select: 'font-size: 5px;',
  },
  medium: {
    select: 'font-size: 10px;',
  },
  secondary: {
    container: `
      border-color: blue;
    `,
    select: '',
  },
  warning: {
    container: `
      border-color: red;
    `,
    select: '',
  },
};

const Select: any = applyTheme(styles);

export default Select;

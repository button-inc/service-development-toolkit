import { applyTheme } from 'component-library/Button';

const styles = {
  shared: {
    button: `
      border-radius: 10px;
    `,
  },
  size: {
    tiny: {
      button: 'font-size: 15px;',
    },
    medium: {
      input: 'font-size: 20px;',
    },
  },
  variant: {
    secondary: {
      button: `
                  border-color: blue;
                `,
    },
    warning: {
      button: `
                  border-color: red;
                `,
    },
  },
};

const config = {
  defaultProps: {
    variant: 'warning',
    size: 'tiny',
  },
  staticProps: ['fullWidth', 'fullHeight'],
};

const Select: any = applyTheme(styles, config);

export default Select;

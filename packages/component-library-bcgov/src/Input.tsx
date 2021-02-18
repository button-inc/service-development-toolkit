import { applyTheme } from 'component-library/Input';

const styles = {
  shared: {
    input: '',
    container: `
            border: 1px solid black;
            padding: 2px;
          `,
  },
  size: {
    tiny: {
      input: 'font-size: 15px;',
    },
    medium: {
      input: 'font-size: 20px;',
    },
  },
  variant: {
    secondary: {
      container: `
                  border-color: blue;
                `,
      input: '',
    },
    warning: {
      container: `
                  border-color: red;
                `,
      input: '',
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

const Input = applyTheme(styles, config);

export default Input;

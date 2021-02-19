import { applyTheme } from 'component-library/Checkbox';

const styles = {
  shared: {
    input: '',
    container: `
            border: 2px solid green;
            padding: 2px;
          `,
  },
  size: {
    tiny: {
      input: 'font-size: 15px;',
      label: 'font-size: 15px;',
    },
    medium: {
      input: 'font-size: 20px;',
      label: 'font-size: 20px;',
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

const Checkbox: any = applyTheme(styles, config);

export default Checkbox;

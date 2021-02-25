import { applyTheme, StyleConfig } from 'component-library/DatePicker';

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
  display: {
    none: {},
    block: {
      input: 'display: block;',
    },
  },
};

const config: StyleConfig = {
  defaultProps: {
    variant: 'warning',
    size: 'tiny',
  },
  staticProps: [],
};

const DatePicker: any = applyTheme(styles, config);

export default DatePicker;

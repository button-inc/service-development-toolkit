import { applyTheme, StyleConfig } from 'component-library/Fieldset';

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

const config: StyleConfig = {
  defaultProps: {
    variant: 'warning',
    size: 'tiny',
  },
  staticProps: ['fullWidth', 'fullHeight'],
};

const Fieldset = applyTheme(styles, config);

export default Fieldset;

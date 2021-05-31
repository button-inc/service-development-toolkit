import { applyTheme, StyleConfig } from '@button-inc/component-library/Input';

export const styles = {
  shared: {
    label: `
      display: block;
      margin-bottom: 0.2777em;
    `,
    input: `
      display: block;
      border: 2px solid #606060;
      border-radius: 0;
      padding: 0.5em 0.6em;
    `,
  },
  size: {
    small: {
      container: `
        font-size: 0.8rem;
      `,
    },
    medium: {
      container: `
        font-size: 1rem;
      `,
    },
    large: {
      container: `
        font-size: 1.2rem;
      `,
    },
  },
  rounded: {
    input: `
      border-radius: 0.25em;
    `,
  },
};

const config: StyleConfig = {
  defaultProps: {
    size: 'medium',
    rounded: true,
  },
  staticProps: ['fullWidth'],
};

const Input = applyTheme(styles, config);

export default Input;

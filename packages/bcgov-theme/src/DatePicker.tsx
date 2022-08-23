import { applyTheme, StyleConfig } from '@button-inc/component-library/DatePicker';

export const styles = {
  shared: {
    label: `
      display: block;
      margin-bottom: 0.2777em;
    `,
    description: `
      margin-bottom: 0.2777em;
      color: #606060;
      font-size: 0.88em;
    `,
    input: `
      display: block;
      border: 2px solid #606060;
      border-radius: 0;
      padding: 0.5em 0.6em;

      &:focus {
        outline: 4px solid #3B99FC;
        outline-offset: 1px;
      }
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

const DatePicker = applyTheme(styles, config);

export default DatePicker;

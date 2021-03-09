import { applyTheme, StyleConfig } from '@button-inc/component-library/Fieldset';

export const styles = {
  shared: {
    container: `
      border: none;
    `,
    legend: `
      color: #38598A;
      font-weight: 600;
      font-size: 1.5em;
      margin-bottom: 1em;
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
};

const config: StyleConfig = {
  defaultProps: {
    size: 'medium',
  },
  staticProps: ['fullWidth'],
  forwardProps: ['size', 'variant', 'disabled', 'required'],
};

const Fieldset = applyTheme(styles, config);

export default Fieldset;

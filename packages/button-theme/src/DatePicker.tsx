import { applyTheme, StyleConfig } from '@button-inc/component-library/DatePicker';
import styles from './styles';

export const datepickerStyles = {
  ...styles,
  // shared styles are applied to all variants
  shared: {
    label: `
      display: block;
      font-weight: 600;
      margin-bottom: 0.277em;
    `,
    input: `
      margin: 0em;
      max-width: 100%;
      -webkit-box-flex: 1;
      -ms-flex: 1 0 auto;
      flex: 1 0 auto;
      outline: none;
      -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
      text-align: left;
      line-height: 1.21428571em;
      padding: 0.35em 0.5em;
      background: #FFFFFF;
      color: rgba(0, 0, 0, 0.87);
      border-radius: 0.15rem;
      -webkit-box-shadow: none;
      box-shadow: none;
      display: block;
    `,
  },
  variant: {
    standard: {
      input: `
        border: 1px solid #000;
      `,
    },
    warning: {
      input: `
        border: 2px solid #F50E0E;
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
    variant: 'standard',
    size: 'small',
  },
  staticProps: ['fullWidth'],
};

const DatePicker = applyTheme(datepickerStyles, config);

export default DatePicker;

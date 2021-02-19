import { applyTheme } from 'component-library/Textarea';

const styles = {
  shared: {
    label: `
      display: block;
      font-weight: 600;
    `,
    input: `
      margin: 0em;
      -webkit-appearance: none;
      tap-highlight-color: rgba(255, 255, 255, 0);
      padding: 0.78571429em 1em;
      background: #FFFFFF;
      border: 1px solid rgba(34, 36, 38, 0.15);
      outline: none;
      color: rgba(0, 0, 0, 0.87);
      border-radius: 0.28571429rem;
      -webkit-box-shadow: 0em 0em 0em 0em transparent inset;
      box-shadow: 0em 0em 0em 0em transparent inset;
      -webkit-transition: color 0.1s ease, border-color 0.1s ease;
      transition: color 0.1s ease, border-color 0.1s ease;
      font-size: 1em;
      line-height: 1.2857;
    `,
  },
  size: {
    small: {
      label: `
        font-size: 0.7rem;
      `,
      input: `
        font-size: 0.8rem;
      `,
    },
    medium: {
      label: `
        font-size: 0.8rem;
      `,
      input: `
        font-size: 1rem;
      `,
    },
    large: {
      label: `
        font-size: 0.9rem;
      `,
      input: `
        font-size: 1.2rem;
      `,
    },
  },
  variant: {
    standard: {
      input: `
        border: 1px solid #000;

        &:focus {
          box-shadow: 0px 0px 0px 2px #FBDD01 inset !important;
        }
      `,
    },
  },
  resize: {
    none: { input: 'resize: none;' },
    both: { input: 'resize: both;' },
    horizontal: { input: 'resize: horizontal;' },
    vertical: { input: 'resize: vertical;' },
  },
  required: {
    label: `
      &:after {
        margin: -0.2em 0em 0em 0.2em;
        content: '*';
        color: #DB2828;
      }
    `,
  },
};

const config = {
  defaultProps: {
    variant: 'standard',
    size: 'small',
    resize: 'both',
  },
  staticProps: ['fullWidth'],
};

const Textarea = applyTheme(styles, config);

export default Textarea;

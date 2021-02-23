import { applyTheme } from 'component-library/Textarea';

const styles = {
  shared: {
    label: `
      font-family: 'BCSans', 'Noto Sans', Verdana, Arial, sans-serif;
      display: block;
      margin-bottom: 5px;
    `,
    input: `
      font-family: 'BCSans', 'Noto Sans', Verdana, Arial, sans-serif;
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
      label: `
        font-size: 0.8rem;
      `,
      input: `
        font-size: 0.8rem;
      `,
    },
    medium: {
      label: `
        font-size: 1rem;
      `,
      input: `
        font-size: 1rem;
      `,
    },
    large: {
      label: `
        font-size: 1.2rem;
      `,
      input: `
        font-size: 1.2rem;
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
  rounded: {
    input: `
      border-radius: 0.25em;
    `,
  },
};

const config = {
  defaultProps: {
    size: 'medium',
    resize: 'none',
    rounded: true,
  },
  staticProps: ['fullWidth'],
};

const Textarea = applyTheme(styles, config);

export default Textarea;

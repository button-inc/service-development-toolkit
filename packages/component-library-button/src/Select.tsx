import { applyTheme } from 'component-library/Select';

const styles = {
  shared: {
    container: `
      font-family: 'Roboto', 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
    `,
    label: `
      display: block;
      font-weight: 600;
    `,
    wrapper: `
      position: relative;
      display: flex;
      background: #fff;
      overflow: hidden;
      border: 1px solid #000;
      border-radius: 0.15rem;
      padding: 0.25rem 0;

      &:after {
        content: '\\25BC';
        position: absolute;
        top: 0;
        right: 0;
        width: 50px;
        height: 100%;
        text-align: center;
        padding: 0.25rem 0;
        background: #E4E4E4;
        cursor: pointer;
        pointer-events: none;
        -webkit-transition: .25s all ease;
        -o-transition: .25s all ease;
        transition: .25s all ease;
      }
      &:hover::after {}
  `,
    input: `
      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      appearance: none;
      outline: 0;
      box-shadow: none;
      border: 0 !important;
      background: #fff;
      background-image: none;
      display: inline-block;
      border-radius: 0.15rem;
      flex: 1;
      padding: 0 .5em;
      color: #000;
      cursor: pointer;

      &::-ms-expand {
        display: none;
      }
    `,
  },
  size: {
    small: {
      label: `
        font-size: 0.7rem;
      `,
      wrapper: `
        font-size: 0.8rem;
      `,
      input: `
        font-size: 0.8rem;
      `,
    },
    medium: {
      label: `
        font-size: 0.8rem;
      `,
      wrapper: `
        font-size: 1rem;
      `,
      input: `
        font-size: 1rem;
      `,
    },
    large: {
      label: `
        font-size: 0.9rem;
      `,
      wrapper: `
        font-size: 1.2rem;
      `,
      input: `
        font-size: 1.2rem;
      `,
    },
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
    size: 'medium',
  },
  staticProps: ['fullWidth'],
};

const Select: any = applyTheme(styles, config);

export default Select;

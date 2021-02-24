import { applyTheme } from 'component-library/RadioButton';

// The inner circles are two-thirds small than its outer circles.
const styles = {
  shared: {
    label: `
      display: block;
      position: relative;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      height: 1em;
      line-height: 1em;
      padding-left: 1.5em;
    `,
    input: `
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;

      &:checked ~ .dot {
        background-color: #ffffff;
      }

      &:checked ~ .dot:after {
        display: block;
      }
    `,
    dot: `
      position: absolute;
      top: 0;
      left: 0;
      width: 1em;
      height: 1em;
      border-radius: 50%;
      box-shadow: 0px 0px 0px 2px #606060 inset;

      &:after {
        content: "";
        position: absolute;
        display: none;
        top: 50%;
        left: 50%;
        width: 0.5em;
        height: 0.5em;
        border-radius: 50%;
        background: #606060;
        transform: translate(-50%, -50%);
      }
    `,
  },
  size: {
    small: {
      label: `
        font-size: 0.8rem;
      `,
      dot: `
        font-size: 0.8rem;
      `,
    },
    medium: {
      label: `
        font-size: 1rem;
      `,
      dot: `
        font-size: 1rem;
      `,
    },
    large: {
      label: `
        font-size: 1.2rem;
      `,
      dot: `
        font-size: 1.2rem;
      `,
    },
  },
};

const config = {
  defaultProps: {
    size: 'medium',
  },
  staticProps: [],
};

const RadioButton: any = applyTheme(styles, config);

export default RadioButton;

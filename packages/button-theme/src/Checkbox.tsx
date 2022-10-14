import { applyTheme, StyleConfig } from '@button-inc/component-library/Checkbox';
import { Check, toSvgUrl } from './fontawesome';
import styles from './styles';

const checkSVG = toSvgUrl(Check);

export const checkboxStyles = {
  ...styles,
  // shared styles are applied to all variants
  shared: {
    label: `
      display: block;
      position: relative;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      cursor: pointer;
      height: 1em;
      line-height: 1em;
      padding-left: 1.5em;
    `,
    input: `
      position: absolute;
      opacity: 0;
      height: 0;
      width: 0;

      &:checked ~ .checkmark:after {
        display: block;
      }
    `,
    checkmark: `
      position: absolute;
      top: 0;
      left: 0;
      height: 1em;
      width: 1em;
      box-shadow: 0 0 0 0.12em #606060 inset;
      border-radius: 0.2em;

      &:after {
        content: ' ';
        background-image: ${checkSVG};
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        display: none;
        width: 0.625em;
        top: 0.1875em;
        left: 0.1875em;
        height: 100%;
        text-align: center;
        cursor: pointer;
        pointer-events: none;
        -webkit-transition: .25s all ease;
        -o-transition: .25s all ease;
        transition: .25s all ease;
      }
    `,
  },
};

const config: StyleConfig = {
  defaultProps: {
    size: 'medium',
  },
  staticProps: [],
};

const Checkbox = applyTheme(checkboxStyles, config);

export default Checkbox;

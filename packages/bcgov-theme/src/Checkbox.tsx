import { applyTheme, StyleConfig } from '@button-inc/component-library/Checkbox';
import { Check, toSvgUrl } from './fontawesome';

const checkSVG = toSvgUrl(Check, 'white');

export const styles = {
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

      &:focus-within {
        outline: 4px solid #3B99FC;
        outline-offset: 1px;
      }
    `,
    input: `
      position: absolute;
      opacity: 0;
      height: 0;
      width: 0;

      &:checked ~ .checkmark {
        background-color: #606060;
      }
    `,
    checkmark: `
      position: absolute;
      top: 0;
      left: 0;
      height: 1em;
      width: 1em;
      outline: 2px solid #606060;

      &:after {
        content: ' ';
        background-image: ${checkSVG};
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        width: 35px;
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
  staticProps: [],
};

const Checkbox = applyTheme(styles, config);

export default Checkbox;

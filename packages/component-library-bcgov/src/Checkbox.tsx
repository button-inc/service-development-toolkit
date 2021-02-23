import { applyTheme } from 'component-library/Checkbox';
import { Check, toSvgUrl } from './fontawesome';

const checkSVG = toSvgUrl(Check, 'white');

const styles = {
  shared: {
    label: `
      display: block;
      position: relative;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      cursor: pointer;
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
      label: `
        font-size: 0.8rem;
        height: 0.8rem;
        padding-left: 1.2rem;
      `,
      checkmark: `
        height: 0.8rem;
        width: 0.8rem;
      `,
    },
    medium: {
      label: `
        font-size: 1rem;
        height: 1rem;
        padding-left: 1.5rem;
      `,
      checkmark: `
        height: 1rem;
        width: 1rem;
      `,
    },
    large: {
      label: `
        font-size: 1.2rem;
        height: 1.2rem;
        padding-left: 1.7rem;
      `,
      checkmark: `
        height: 1.2rem;
        width: 1.2rem;
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

const Checkbox: any = applyTheme(styles, config);

export default Checkbox;

import { applyTheme, StyleConfig } from '@button-inc/component-library/Select';
import { ChevronDown, toSvgUrl } from './fontawesome';

const chevronDownSVG = toSvgUrl(ChevronDown);

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
    wrapper: `
      position: relative;
      display: flex;
      background: #fff;
      overflow: hidden;
      border: 2px solid #606060;
      border-radius: 0;
      padding: 0.3em 0;

      &:after {
        content: ' ';
        background-image: ${chevronDownSVG};
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        right: 0.2em;
        width: 1.2em;
        height: 100%;
        text-align: center;
        cursor: pointer;
        pointer-events: none;
        -webkit-transition: .25s all ease;
        -o-transition: .25s all ease;
        transition: .25s all ease;
      }

      &:focus-within  {
        outline: 4px solid #3B99FC;
        outline-offset: 1px;
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
    wrapper: `
      border-radius: 0.25em;
    `,
  },
};

const config: StyleConfig = {
  defaultProps: {
    size: 'medium',
    rounded: true,
    required: false,
  },
  staticProps: ['fullWidth'],
  includeWrapper: true,
};

const Dropdown = applyTheme(styles, config);

export default Dropdown;

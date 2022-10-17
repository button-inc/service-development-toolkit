import { applyTheme, StyleConfig } from '@button-inc/component-library/Select';
import styles from './styles';

export const dropdownStyles = {
  ...styles,
  // shared styles are applied to all variants
  shared: {
    container: `
    `,
    label: `
      display: block;
      font-weight: 600;
      margin-bottom: 0.2777em;
    `,
    wrapper: `
      position: relative;
      display: flex;
      background: #fff;
      overflow: hidden;
      border: 1px solid #000;
      border-radius: 0.15em;
      padding: 0.25em 0;

      &:after {
        content: '\\25BC';
        position: absolute;
        top: 0;
        right: 0;
        width: 50px;
        height: 100%;
        text-align: center;
        padding: 0.25em 0;
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
      border-radius: 0.15em;
      flex: 1;
      padding: 0 .5em;
      color: #000;
      cursor: pointer;

      &::-ms-expand {
        display: none;
      }
    `,
  },
};

const config: StyleConfig = {
  defaultProps: {
    size: 'medium',
  },
  staticProps: ['fullWidth'],
  includeWrapper: true,
};

const Dropdown = applyTheme(dropdownStyles, config);

export default Dropdown;

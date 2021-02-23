import { applyTheme } from 'component-library/RadioButton';

const sizes = {
  small: 0.8,
  medium: 1,
  large: 1.2,
  smallPaddingLeft: 0,
  mediumPaddingLeft: 0,
  largePaddingLeft: 0,
  smallInner: 0,
  mediumInner: 0,
  largeInner: 0,
};

const plRatio = 1.5;
sizes.smallPaddingLeft = sizes.small * plRatio;
sizes.mediumPaddingLeft = sizes.medium * plRatio;
sizes.largePaddingLeft = sizes.large * plRatio;

const innerRatio = 1 / 2;
sizes.smallInner = sizes.small * innerRatio;
sizes.mediumInner = sizes.medium * innerRatio;
sizes.largeInner = sizes.large * innerRatio;

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
      border-radius: 50%;
      box-shadow: 0px 0px 0px 2px #606060 inset;

      &:after {
        content: "";
        position: absolute;
        display: none;
        top: 50%;
        left: 50%;
        border-radius: 50%;
        background: #606060;
        transform: translate(-50%, -50%);
      }
    `,
  },
  size: {
    small: {
      label: `
        font-size: ${sizes.small}rem;
        height: ${sizes.small}rem;
        line-height: ${sizes.small}rem;
        padding-left: ${sizes.smallPaddingLeft}rem;
      `,
      dot: `
        width: ${sizes.small}rem;
        height: ${sizes.small}rem;

        &:after {
          width: ${sizes.smallInner}rem;
          height: ${sizes.smallInner}rem;
        }
      `,
    },
    medium: {
      label: `
        font-size: ${sizes.medium}rem;
        height: ${sizes.medium}rem;
        line-height: ${sizes.medium}rem;
        padding-left: ${sizes.mediumPaddingLeft}rem;
      `,
      dot: `
        height: ${sizes.medium}rem;
        width: ${sizes.medium}rem;

        &:after {
          width: ${sizes.mediumInner}rem;
          height: ${sizes.mediumInner}rem;
        }
      `,
    },
    large: {
      label: `
        font-size: ${sizes.large}rem;
        height: ${sizes.large}rem;
        line-height: ${sizes.large}rem;
        padding-left: ${sizes.largePaddingLeft}rem;
      `,
      dot: `
        height: ${sizes.large}rem;
        width: ${sizes.large}rem;

        &:after {
          width: ${sizes.largeInner}rem;
          height: ${sizes.largeInner}rem;
        }
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

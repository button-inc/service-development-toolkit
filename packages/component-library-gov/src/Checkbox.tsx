import { applyTheme } from 'component-library/Checkbox';

const styles = {
  defaultProps: {
    size: 'tiny',
  },
  tiny: `
    transform: scale(3);
    `,
  large: `
    transform: scale(5);
    `,
};

const Checkbox: any = applyTheme(styles);

export default Checkbox;

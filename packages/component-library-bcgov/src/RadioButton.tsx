import { applyTheme } from 'component-library/RadioButton';

const styles = {
  shared: {
    input: '',
    container: `
            border: 1px solid green;
            padding: 2px;
          `,
  },
  size: {
    tiny: {
      label: 'font-size: 15px;',
    },
    medium: {
      label: 'font-size: 20px;',
    },
  },
};

const config = {
  defaultProps: {
    size: 'tiny',
  },
  staticProps: ['fullWidth', 'fullHeight'],
};

const Radio: any = applyTheme(styles, config);

export default Radio;

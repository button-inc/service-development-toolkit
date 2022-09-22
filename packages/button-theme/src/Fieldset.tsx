import { applyTheme, StyleConfig } from '@button-inc/component-library/Fieldset';
import styles from './styles';

const config: StyleConfig = {
  defaultProps: {
    size: 'medium',
  },
  staticProps: ['fullWidth'],
  forwardProps: ['size', 'variant', 'disabled', 'required'],
};

const Fieldset = applyTheme(styles, config);

export default Fieldset;

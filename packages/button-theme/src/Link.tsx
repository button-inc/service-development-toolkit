import { applyTheme, StyleConfig } from '@button-inc/component-library/Link';
import styles from './styles';

const config: StyleConfig = {
  defaultProps: {
    size: 'medium',
  },
  breakProps: [],
  staticProps: [],
};

const Link = applyTheme(styles, config);

export default Link;

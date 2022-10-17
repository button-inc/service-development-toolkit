import { applyTheme, StyleConfig } from '@button-inc/component-library/Grid';

export const styles = {};

const config: StyleConfig = {
  defaultProps: {},
  staticProps: [],
  cols: 20,
  gutter: [5, 2],
};

export const BaseGrid = applyTheme(styles, config);

export default BaseGrid;

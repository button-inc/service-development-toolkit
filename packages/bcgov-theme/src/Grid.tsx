import React from 'react';
import styled from 'styled-components';
import { applyTheme, StyleConfig } from '@button-inc/component-library/Grid';

export const styles = {};

const config: StyleConfig = {
  defaultProps: {},
  staticProps: [],
  cols: 20,
};

export const BaseGrid = applyTheme(styles, config);

export default BaseGrid;

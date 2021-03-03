import React from 'react';
import styled from 'styled-components';
import noop from 'lodash/noop';
import { applyTheme, StyleConfig } from 'component-library/Modal';

const styles = {
  shared: {
    container: `
      position: fixed;
      top: 0;
      left: 0;
      font-size: 1rem;
      width: 100%;
      height: 100%;
      background: rgba(220,220,220,0.8);
    `,
    modal: `
      max-width: 800px;
      margin: 2rem auto;
    `,
    header: `
      display: flex;
      color: #fff;
      background: #38598A;
      padding: 1.2em;
    `,
    content: `
      min-height: 5em;
      background: #fff;
      padding: 1.5em 1.2em;
    `,
    close: `
      margin-left: auto;
      color: #fff;
      font-weight: 600;
    `,
  },
};

const config: StyleConfig = {
  defaultProps: {},
  staticProps: [],
};

export const BaseModal = applyTheme(styles, config);

export default BaseModal;

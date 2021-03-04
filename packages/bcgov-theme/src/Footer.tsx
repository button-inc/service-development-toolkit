import React from 'react';
import styled from 'styled-components';
import { applyTheme, StyleConfig } from '@button-inc/component-library/Footer';

const styles = {
  shared: {
    container: `
      background-color: #036;
      border-top: 2px solid #fcba19;
      color: #fff;
      font-size: 1rem;
    `,
    footer: `
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      height: 2.5555em;

      & ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 0;
        padding-top: 0.2em;
        padding-left: 1em;
        color: #fff;
        list-style: none;
        align-items: center;
        height: 100%;
      }

      & ul li a {
        font-size: 0.813em;
        font-weight: normal;  /* 400 */
        color: #fff;
        border-right: 1px solid #4b5e7e;
        padding-left: 1em;
        padding-right: 1em;
      }

      & a:hover {
        color: #fff;
        text-decoration: underline;
      }

      & :focus {
        outline: 0.2222em solid #3B99FC;
        outline-offset: 1px;
      }
    `,
  },
};

const config: StyleConfig = {
  defaultProps: {},
  staticProps: [],
};

const Footer = applyTheme(styles, config);

export default Footer;

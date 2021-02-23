import React from 'react';
import styled from 'styled-components';
import { applyTheme } from 'component-library/Footer';

const styles = {
  shared: {
    container: `
      background-color: #036;
      border-top: 2px solid #fcba19;
      color: #fff;
    `,
    footer: `
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      height: 46px;

      & ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 0;
        padding-top: 0.2rem;
        padding-left: 1rem;
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
        padding-left: 5px;
        padding-right: 5px;
      }

      & a:hover {
        color: #fff;
        text-decoration: underline;
      }

      & :focus {
        outline: 4px solid #3B99FC;
        outline-offset: 1px;
      }
    `,
  },
};

const config = {
  defaultProps: {},
  staticProps: [],
};

const Footer: any = applyTheme(styles, config);

export default Footer;

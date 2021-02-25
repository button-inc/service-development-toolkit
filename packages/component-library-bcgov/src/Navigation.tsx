import React from 'react';
import styled from 'styled-components';
import isFunction from 'lodash/isFunction';
import { applyTheme, StyleConfig } from 'component-library/Navigation';
import { BaseHeader } from './Header';
import { Bars, FaSVG } from './fontawesome';
import bcgovLogoSVG from './svg/bcgov_logo';

const styles = {
  shared: {
    container: `
      width: 100%;
    `,
    sidebar: `
      color: #fcba19;
      background-color: #38598a;
      padding: 5px 0 5px 0;
      -webkit-box-shadow: 0 6px 8px -4px #b3b1b3;
      -moz-box-shadow: 0 6px 8px -4px #b3b1b3;
      box-shadow: 0 6px 8px -4px #b3b1b3;

      & ul {
        display: flex;
        flex-direction: column;
        margin: 0;
        color: #fff;
        list-style: none;
      }

      & ul li {
        margin: 5px 0;
      }

      & ul li a {
        display: flex;
        font-size: 0.813em;
        font-weight: normal;  /* 400 */
        color: #fff;
        padding: 0 15px 0 15px;
        text-decoration: none;
        border-right: 1px solid #9b9b9b;
      }

      & ul li a:hover {
        text-decoration: underline;
      }

      & ul .active {
        text-decoration: underline;
        font-weight: bold;
      }
    `,
    toggle: `
      cursor: pointer !important;
    `,
  },
};

const config: StyleConfig = {
  defaultProps: {},
  staticProps: [],
};

export const BaseNavigation: any = applyTheme(styles, config);

const BannerLogo = styled.a`
  height: 90%;
`;

const Title = styled.h1`
  font-weight: normal;
  margin-top: 10px;
`;

const DEFAULT_MOBILE_BREAK_POINT = '900';

export default function Component(props: any) {
  const {
    title = '',
    onBannerClick = () => null,
    children,
    mobileMenu,
    mobileBreakPoint = DEFAULT_MOBILE_BREAK_POINT,
  } = props;
  const context = { mobileBreakPoint };

  return (
    <BaseNavigation>
      <BaseHeader>
        <BaseHeader.Group className="banner">
          <BannerLogo onClick={onBannerClick}>{bcgovLogoSVG}</BannerLogo>
        </BaseHeader.Group>
        <BaseHeader.Item collapse={mobileBreakPoint}>
          <Title>{isFunction(title) ? title(context) : title}</Title>
        </BaseHeader.Item>
        <BaseHeader.Item
          expand={mobileBreakPoint}
          style={{ marginLeft: 'auto', fontSize: '2rem', marginBottom: 'auto', marginTop: 'auto' }}
        >
          <BaseNavigation.Toggle>
            <FaSVG>
              <path fill="currentColor" d={Bars} />
            </FaSVG>
          </BaseNavigation.Toggle>
        </BaseHeader.Item>
      </BaseHeader>

      <BaseHeader header="sub" collapse={mobileBreakPoint}>
        {children}
      </BaseHeader>
      <BaseNavigation.Sidebar>{mobileMenu ? mobileMenu() : children}</BaseNavigation.Sidebar>
    </BaseNavigation>
  );
}

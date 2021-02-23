import React from 'react';
import styled from 'styled-components';
import { applyTheme } from 'component-library/Menu';
import bcgovLogoSVG from './svg/bcgov_logo';

const styles = {
  header: {
    main: {
      container: `
        color: #fff;
        background-color: #036;
        display: flex;
        height: 65px;
        padding: 0 1.2rem 0 0;
        border-bottom: 2px solid #fcba19;

        & .banner {
          width: 300px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 0.2rem;
          margin: 0 1.2rem 0 0;
        }
      `,
    },
    sub: {
      container: `
        color: #fcba19;
        background-color: #38598a;
        display: flex;
        padding: 5px 0 5px 0;
        -webkit-box-shadow: 0 6px 8px -4px #b3b1b3;
        -moz-box-shadow: 0 6px 8px -4px #b3b1b3;
        box-shadow: 0 6px 8px -4px #b3b1b3;

        & ul {
          display: flex;
          flex-direction: row;
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
    },
  },
};

const config = {
  defaultProps: { header: 'main' },
  staticProps: [],
};

export const BaseHeader: any = applyTheme(styles, config);

const BannerLogo = styled.a`
  height: 90%;
`;

const Title = styled.h1`
  font-weight: normal;
  margin-top: 10px;
`;

export default function Component(props: any) {
  const { title = '', onBannerClick = () => null } = props;

  return (
    <BaseHeader>
      <BaseHeader.Group className="banner">
        <BannerLogo onClick={onBannerClick}>{bcgovLogoSVG}</BannerLogo>
      </BaseHeader.Group>
      <BaseHeader.Item collapse="900">
        <Title>{title}</Title>
      </BaseHeader.Item>
    </BaseHeader>
  );
}

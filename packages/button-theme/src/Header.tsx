import React from 'react';
import styled from 'styled-components';
import { applyTheme, StyleConfig } from '@button-inc/component-library/Menu';
import Button from './Button';
import buttonLogoDataUrl from './dataurls/button_logo';
import styles from './styles';

export const headerStyles = {
  ...styles,
  // shared styles are applied to all variants
  shared: {
    container: `
      display: flex;
      height: 70px;
      padding: 0 1.2rem 0 0;

      & .toggle {
        padding-top: 1rem;
        margin-left: 1rem;
        margin-right: 3rem;
      }

      & .banner {
        width: 300px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 1em;
        margin: 0 1.2rem 0 0;
      }

      & .menu {
        margin-left: auto;

        & ul {
          display: flex;
          flex-direction: row;
          margin: 0;
          color: #000;
          list-style: none;
        }

        & ul li {
          margin-top: 1.5rem;
          font-weight: bold;
        }

        & ul li a {
          display: flex;
          font-size: 1em;
          font-weight: bold;
          color: #000;
          padding: 0 15px 0 15px;
          text-decoration: none;
          border-right: 1px solid #9b9b9b;
        }

        & ul li a:hover {
          color: #2476ED;
          text-decoration: underline;
        }
      }
    `,
  },
  variant: {
    primary: {
      container: `
        background-color: #F6FAFE;
        border-bottom: 3px solid #3978E5;
      `,
    },
    secondary: {
      container: `
        background-color: #fff;
        border-bottom: 3px solid #000;
      `,
    },
  },
};

const config: StyleConfig = {
  defaultProps: {
    variant: 'primary',
  },
  breakProps: [],
  staticProps: [],
};

export const BaseHeader = applyTheme(headerStyles, config);

const BannerLogo = styled.div`
  background: url(${buttonLogoDataUrl});
  height: 50%;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
`;

export default function Component(props: any) {
  const { onBannerClick = () => null, children, ...rest } = props;

  return (
    <BaseHeader {...rest}>
      <BaseHeader.Item className="toggle" expand="900">
        <Button size="small">Menu</Button>
      </BaseHeader.Item>
      <BaseHeader.Group className="banner">
        <BannerLogo onClick={onBannerClick} />
      </BaseHeader.Group>
      <BaseHeader.Item className="menu" collapse="900">
        {children}
      </BaseHeader.Item>
    </BaseHeader>
  );
}

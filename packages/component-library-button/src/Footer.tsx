import React from 'react';
import styled from 'styled-components';
import { applyTheme, StyleConfig } from 'component-library/Menu';
import buttonLogoDataUrl from './dataurls/button_logo';

const styles = {
  shared: {
    container: `
      display: flex;
      height: 70px;
      padding: 0 1.2rem 0 0;

      & .banner {
        width: 300px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 1em;
        margin: 0 1.2rem 0 0;
      }

      & .copyright {
        font-weight: 700;
        margin-left: auto;
        padding-top: 1.5rem;
      }
    `,
  },
  variant: {
    primary: {
      container: `
        background-color: #F6FAFE;
        border-top: 3px solid #3978E5;
      `,
    },
    secondary: {
      container: `
        background-color: #fff;
        border-top: 3px solid #000;
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

export const BaseFooter = applyTheme(styles, config);

const BannerLogo = styled.div`
  background: url(${buttonLogoDataUrl});
  height: 50%;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
`;

export default function Component(props: any) {
  const { onBannerClick = () => null, children, ...rest } = props;
  const year = new Date().getFullYear();

  return (
    <BaseFooter {...rest}>
      <BaseFooter.Group className="banner">
        <BannerLogo onClick={onBannerClick} />
      </BaseFooter.Group>
      <BaseFooter.Item className="copyright">
        Copyright <span>{year}</span>
      </BaseFooter.Item>
    </BaseFooter>
  );
}

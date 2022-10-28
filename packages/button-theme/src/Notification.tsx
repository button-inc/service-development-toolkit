import { applyTheme, StyleConfig } from '@button-inc/component-library/Notification';
import styles from './styles';

export const notificationStyles = {
  ...styles,
  shared: {
    container: `
      position: relative;
      min-height: 1em;
      margin: 1em 0em;
      line-height: 1.4285em;
      color: rgba(0, 0, 0, 0.87);
      -webkit-transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease, -webkit-box-shadow 0.1s ease;
      transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease, -webkit-box-shadow 0.1s ease;
      transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease, box-shadow 0.1s ease;
      transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease, box-shadow 0.1s ease, -webkit-box-shadow 0.1s ease;
      border-radius: 0.2rem;
      -webkit-box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.22) inset, 0px 0px 0px 0px rgba(0, 0, 0, 0);
      box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.22) inset, 0px 0px 0px 0px rgba(0, 0, 0, 0);
    `,
    header: `
      font-weight: 600;
    `,
    close: `
      cursor: pointer !important;
      text-align: center;
      text-decoration: none;
      border-radius: 0.2rem;
    `,
  },
  size: {
    small: {
      container: `
        padding: 0.8rem 0.9rem;
      `,
      content: `
        font-size: 0.8rem;
      `,
    },
    medium: {
      container: `
        padding: 1rem 1.1rem;
      `,
      content: `
        font-size: 1rem;
      `,
    },
    large: {
      container: `
        padding: 1.2rem 1.3rem;
      `,
      content: `
        font-size: 1.2rem;
      `,
    },
  },
};

const config: StyleConfig = {
  defaultProps: {
    variant: 'standard',
    size: 'medium',
    flex: false,
  },
  staticProps: [],
};

const childStyles = {
  group: {
    align: {
      left: `
      margin-right: auto;
    `,
      right: `
      margin-left: auto;
    `,
    },
  },
};

const Notification = applyTheme(notificationStyles, config, childStyles);

export default Notification;

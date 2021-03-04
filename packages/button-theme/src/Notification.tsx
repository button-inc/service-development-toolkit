import { applyTheme, StyleConfig } from '@button-inc/component-library/Notification';

const styles = {
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
      header: `
        font-size: 1rem;
      `,
      content: `
        font-size: 0.8rem;
      `,
      close: `
        font-size: 0.8rem;
        padding: 0.2rem;
      `,
    },
    medium: {
      container: `
        padding: 1rem 1.1rem;
      `,
      header: `
        font-size: 1.2rem;
      `,
      content: `
        font-size: 1rem;
      `,
      close: `
        font-size: 1rem;
        padding: 0.4rem;
      `,
    },
    large: {
      container: `
        padding: 1.2rem 1.3rem;
      `,
      header: `
        font-size: 1.4rem;
      `,
      content: `
        font-size: 1.2rem;
      `,
      close: `
        font-size: 1.2rem;
        padding: 0.6rem;
      `,
    },
  },
  variant: {
    standard: {
      container: `
        border: 1px solid #707070;
        background-color: #F2F2F2;
      `,
      header: `
        color: #000;
      `,
      content: `
        color: #000;
      `,
      close: `
        color: #000;
        border: 1px solid #000;

        &:hover {
          background: #000;
          color: #fff;
        }
      `,
      group: `
        color: #000;
      `,
    },
    warning: {
      container: `
        border: 2px solid #b58108;
        background-color: #FFF8DB;
      `,
      header: `
        color: #b58108;
      `,
      content: `
        color: #b58108;
      `,
      close: `
        color: #b58108;
        border: 1px solid #b58108;

        &:hover {
          background: #b58108;
          color: #fff;
        }
      `,
      group: `
        color: #b58108;
      `,
    },
    danger: {
      container: `
        border: 2px solid #DB2828;
        background-color: #FEE8E6;
      `,
      header: `
        color: #db2828;
      `,
      content: `
        color: #db2828;
      `,
      close: `
        color: #db2828;
        border: 1px solid #db2828;

        &:hover {
          background: #db2828;
          color: #fff;
        }
      `,
      group: `
        color: #db2828;
      `,
    },
    success: {
      container: `
        border: 2px solid #1ebc30;
        background-color: #E5F9E6;
      `,
      header: `
        color: #1ebc30;
      `,
      content: `
        color: #1ebc30;
      `,
      close: `
        color: #1ebc30;
        border: 1px solid #1ebc30;

        &:hover {
          background: #1ebc30;
          color: #fff;
        }
      `,
      group: `
        color: #1ebc30;
      `,
    },
  },
  flex: {
    container: `
      display: flex;
    `,
    group: `
      margin: auto 0.5rem;
    `,
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

const Notification = applyTheme(styles, config, childStyles);

export default Notification;

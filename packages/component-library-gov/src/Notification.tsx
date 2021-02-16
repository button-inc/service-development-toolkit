import { applyTheme } from 'component-library/Notification';

const styles = {
  shared: {
    container: `
            border: 1px solid black;
            padding: 2px;
          `,
  },
  size: {
    tiny: {
      header: 'font-size: 15px;',
    },
    medium: {
      header: 'font-size: 20px;',
    },
  },
  variant: {
    secondary: {
      container: `
                  border-color: blue;
                `,
      header: 'border-color: blue;',
      content: 'border-color: blue;',
    },
    warning: {
      container: `
                  border-color: red;
                `,
      header: 'border-color: red;',
      content: 'border-color: red;',
    },
  },
  display: {
    block: {
      container: `display: block`,
    },
    inlineBlock: {
      container: `display: inline-block;
      width: 200px;`,
    },
  },
  close: {
    left: {
      close: `
      text-align: left;`,
    },
    right: {
      close: `
      text-align: right;`,
    },
  },
  boxShadow: {
    container: `box-shadow: 10px 10px;`,
  },
  textShadow: 'text-shadow: 2px 2px;',
};

const config = {
  defaultProps: {
    variant: 'warning',
    size: 'tiny',
  },
  staticProps: [],
};

const Notification: any = applyTheme(styles, config);

export default Notification;

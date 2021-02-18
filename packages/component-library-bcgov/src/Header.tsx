import { applyTheme } from 'component-library/Header';

const styles = {
  shared: {
    container: `
            width: 100vw;
          `,
    sidebar: `
          width: 100vw;
          background-color: green;
        `,
  },
};

const config = {
  defaultProps: {},
  staticProps: [],
};

const Header: any = applyTheme(styles, config);

export default Header;

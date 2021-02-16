import { applyTheme } from 'component-library/Menu';

const styles = {
  shared: {
    container: `
            width: 100vw;
            background-color: black;
            color: white;
            display: flex;
            justify-content: space-around;
          `,
  },
  variant: {
    primary: {
      container: `border: 1px solid blue;`,
      group: 'border: 1px solid blue;',
      item: 'border: 1px solid blue;',
    },
    warning: {
      container: `border: 1px solid red;`,
      group: 'border: 1px solid red;',
      item: 'border: 1px solid red;',
    },
  },
};

const config = {
  defaultProps: {
    variant: 'primary',
  },
  staticProps: [],
};

const Menu: any = applyTheme(styles, config);

export default Menu;

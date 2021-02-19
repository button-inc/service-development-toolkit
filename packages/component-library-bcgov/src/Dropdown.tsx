import { applyTheme } from 'component-library/Select';

// see https://fontawesome.com/icons/chevron-down?style=solid
const faChevronDown = `
PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZ
hcyIgZGF0YS1pY29uPSJjaGV2cm9uLWRvd24iIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3
cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDQ4IDUxMiIgY2xhc3M9InN2Zy1pbmxpb
mUtLWZhIGZhLWNoZXZyb24tZG93biBmYS13LTE0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3Ii
IGQ9Ik0yMDcuMDI5IDM4MS40NzZMMTIuNjg2IDE4Ny4xMzJjLTkuMzczLTkuMzczLTkuMzczLTI
0LjU2OSAwLTMzLjk0MWwyMi42NjctMjIuNjY3YzkuMzU3LTkuMzU3IDI0LjUyMi05LjM3NSAzMy
45MDEtLjA0TDIyNCAyODQuNTA1bDE1NC43NDUtMTU0LjAyMWM5LjM3OS05LjMzNSAyNC41NDQtO
S4zMTcgMzMuOTAxLjA0bDIyLjY2NyAyMi42NjdjOS4zNzMgOS4zNzMgOS4zNzMgMjQuNTY5IDAg
MzMuOTQxTDI0MC45NzEgMzgxLjQ3NmMtOS4zNzMgOS4zNzItMjQuNTY5IDkuMzcyLTMzLjk0MiA
weiIgY2xhc3M9IiI+PC9wYXRoPjwvc3ZnPg==`;

const toSvgUrl = (data: string) => `url("data:image/svg+xml;base64,${data}")`;

const styles = {
  shared: {
    container: `
      & * {
        font-family: 'BCSans', 'Noto Sans', Verdana, Arial, sans-serif;
      }
    `,
    label: `
      display: block;
      margin-bottom: 5px;
    `,
    wrapper: `
      position: relative;
      display: flex;
      background: #fff;
      overflow: hidden;
      border: 2px solid #606060;
      border-radius: 0;
      padding: 0.3rem 0;

      &:after {
        content: ' ';
        background-image: ${toSvgUrl(faChevronDown)};
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        top: 0;
        right: 0;
        width: 35px;
        height: 100%;
        text-align: center;
        cursor: pointer;
        pointer-events: none;
        -webkit-transition: .25s all ease;
        -o-transition: .25s all ease;
        transition: .25s all ease;
      }

      &:focus  {
        outline: 4px solid #3B99FC;
        outline-offset: 1px;
      }

      &:hover::after {}
  `,
    input: `
      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      appearance: none;
      outline: 0;
      box-shadow: none;
      border: 0 !important;
      background: #fff;
      background-image: none;
      display: inline-block;
      border-radius: 0.15rem;
      flex: 1;
      padding: 0 .5em;
      color: #000;
      cursor: pointer;

      &::-ms-expand {
        display: none;
      }
    `,
  },
  size: {
    small: {
      label: `
        font-size: 0.7rem;
      `,
      wrapper: `
        font-size: 0.8rem;
      `,
      input: `
        font-size: 0.8rem;
      `,
    },
    medium: {
      label: `
        font-size: 0.8rem;
      `,
      wrapper: `
        font-size: 1rem;
      `,
      input: `
        font-size: 1rem;
      `,
    },
    large: {
      label: `
        font-size: 0.9rem;
      `,
      wrapper: `
        font-size: 1.2rem;
      `,
      input: `
        font-size: 1.2rem;
      `,
    },
  },
  required: {
    label: `
      &:after {
        margin: -0.2em 0em 0em 0.2em;
        content: '*';
        color: #DB2828;
      }
    `,
  },
};

const config = {
  defaultProps: {
    size: 'medium',
  },
  staticProps: ['fullWidth'],
};

const Dropdown: any = applyTheme(styles, config);

export default Dropdown;

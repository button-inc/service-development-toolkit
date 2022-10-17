const styles = {
  variant: {
    primary: {
      button: `
          color: #fff;
          background-color: #2476ED;
          box-shadow: 0px 0px 0px 1px #2476ED inset !important;

          &:hover {
            background-color: #4e96ff;
            box-shadow: 0px 0px 0px 1px #4e96ff inset !important;
            text-decoration: underline;
          }

          &:focus {
            box-shadow: 0px 0px 0px 2px #FBDD01 inset !important;
          }
        `,
      container: `
          background-color: #F6FAFE;
        `,
    },
    secondary: {
      button: `
          color: #2476ED;
          background-color: transparent;
          box-shadow: 0px 0px 0px 2px #2476ED inset !important;

          &:hover {
            background-color: #b9e2ff;
            text-decoration: underline;
          }

          &:focus {
            box-shadow: 0px 0px 0px 2px #FBDD01 inset !important;
          }
        `,
      container: `
          background-color: #fff;
        `,
    },
    warning: {
      button: `
          color: #fff;
          background-color: #F50E0E;
          box-shadow: 0px 0px 0px 1px #F50E0E inset !important;

          &:hover {
            background-color: #FA7C7C;
            box-shadow: 0px 0px 0px 1px #FA7C7C inset !important;
            text-decoration: underline;
          }

          &:focus {
            box-shadow: 0px 0px 0px 2px #FBDD01 inset !important;
          }
        `,
      input: `
            border: 2px solid #F50E0E;
          `,
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

    dark: {
      button: `
          color: #000;
          background-color: #fff;
          box-shadow: 0px 0px 0px 2px #000 inset !important;

          &:hover {
            color: #fff;
            background-color: #000;
            text-decoration: underline;
          }

          &:focus {
            box-shadow: 0px 0px 0px 2px #FBDD01 inset !important;
          }
        `,
    },
    standard: {
      input: `
            border: 1px solid #000;
          `,
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
  disabled: `
      font-size: 1rem;
      color: #fff !important;
      background-color: #2476ED !important;
      box-shadow: 0px 0px 0px 1px #2476ED inset !important;
      text-decoration: none !important;
      opacity: 0.43;
    `,
  flex: {
    container: `
        display: flex;
      `,
    group: `
        margin: auto 0.5rem;
      `,
  },
  resize: {
    none: { input: 'resize: none;' },
    both: { input: 'resize: both;' },
    horizontal: { input: 'resize: horizontal;' },
    vertical: { input: 'resize: vertical;' },
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
  size: {
    small: {
      button: `
              font-size: 0.8rem;
            `,
      container: `
              font-size: 0.8rem;
            `,

      label: `
            font-size: 0.8rem;
          `,

      input: `
          font-size: 0.8rem;
        `,
      header: `
              font-size: 1rem;
            `,
      content: `
              font-size: 0.8rem;
              padding: 0.4rem;
            `,
      close: `
              font-size: 0.8rem;
              padding: 0.2rem;
            `,
      a: `font-size: 0.8rem;`,
    },
    medium: {
      button: `
              font-size: 1rem;
            `,
      container: `
              font-size: 1rem;
            `,
      label: `
                  font-size: 1rem;
                `,
      input: `
                font-size: 1rem;
              `,
      header: `
              font-size: 1.2rem;
            `,
      content: `
              font-size: 1rem;
              padding: 0.6rem;
            `,
      close: `
              font-size: 1rem;
              padding: 0.4rem;
            `,
      a: `font-size: 1rem;`,
    },
    large: {
      button: `
              font-size: 1.2rem;
            `,
      container: `
              font-size: 1.2rem;
            `,
      label: `
                  font-size: 1.2rem;
                `,
      input: `
              font-size: 1.2rem;
            `,
      header: `
              font-size: 1.4rem;
            `,
      content: `
              font-size: 1.2rem;
              padding: 0.8rem;
            `,
      close: `
              font-size: 1.2rem;
              padding: 0.6rem;
            `,
      a: `font-size: 1.2rem`,
    },
  },
};
export default styles;

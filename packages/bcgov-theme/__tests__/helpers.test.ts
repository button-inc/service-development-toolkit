import { removeImportant, changeSelectorToObject } from '../utils/test-helpers';

const styles = {
  variant: {
    primary: {
      button: `
        background-color: #003366;

        &:hover {
          text-decoration: underline;
        }

        &:focus {
          outline: 4px solid #3B99FC;
        }

        &:active {
          opacity: 1;
        }
      `,
    },
  },
};

describe('Remove important', () => {
  it('removes important from css', () => {
    expect(removeImportant('color: red !important;')).toBe('color: red;');
  });
});

describe('Convert selectors to object', () => {
  it('moves selector styles to an object', () => {
    expect(changeSelectorToObject(styles.variant.primary.button)).toEqual({
      base: `background-color: #003366;`,
      hover: `text-decoration: underline;`,
      focus: `outline: 4px solid #3B99FC;`,
      active: `opacity: 1;`,
    });
  });
});

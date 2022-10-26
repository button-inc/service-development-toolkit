import 'happo-plugin-storybook/register';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: ['Getting Started', 'Components', ['Typography', 'Page']],
    },
  },
};

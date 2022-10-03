export const argTypes = {
  size: {
    control: {
      type: 'select',
      options: ['small', 'medium', 'large'],
    },
    description: 'The size of the callout',
  },
  content: {
    control: {
      type: 'text',
    },
    description: 'String content to show in the callout. To render more complex content, pass them as children.',
  },
};

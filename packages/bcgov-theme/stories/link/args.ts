export const argTypes = {
  size: {
    control: {
      type: 'select',
      options: ['small', 'medium', 'large'],
    },
    description: 'The size of the datepicker',
  },
  content: {
    description: 'The text for the link to contain.',
  },
  href: {
    description: 'The url that the hyperlink points to.',
  },
  external: {
    description: 'Link to an external page.',
  },
};

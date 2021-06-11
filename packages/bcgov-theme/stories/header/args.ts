export const argTypes = {
  header: {
    control: {
      type: 'select',
      options: ['main', 'sub'],
    },
    description:
      'The type of header to use. Types "main", and "sub" are supported. Toggle in controls to see the design.',
  },
  title: {
    description: 'The title to use in the header.',
  },
  onBannerClick: {
    description: 'Function to fire when the logo is clicked.',
  },
};

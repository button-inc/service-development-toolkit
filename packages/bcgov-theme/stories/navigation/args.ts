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
  mobileMenu: {
    description: 'Pass a jsx component to this prop to render a different menu on mobile devices than full-screen.',
  },
  mobileBreakPoint: {
    description: 'The number of pixels at which to break into a mobile hamburger menu.',
  },
};

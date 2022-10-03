export const argTypes = {
  size: {
    control: {
      type: 'select',
      options: ['small', 'medium', 'large'],
    },
    description: 'The size of the button',
  },
  variant: {
    control: {
      type: 'select',
      options: ['primary', 'secondary', 'primary-inverse', 'secondary-inverse'],
    },
    description: 'The style variant to use.',
  },
  onClick: { action: 'clicked' },
  disabled: {
    description: 'Pass true to disable the button.',
  },
  fullWidth: {
    description: 'apply 100% width to the button.',
  },
  fullHeight: {
    description: 'apply 100% height to the button.',
  },
};

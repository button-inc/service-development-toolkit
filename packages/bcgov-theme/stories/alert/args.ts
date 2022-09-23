export const argTypes = {
  size: {
    control: {
      type: 'select',
      options: ['small', 'medium', 'large'],
    },
    description: 'The size of the alert',
  },
  variant: {
    description: 'The style variant to use.',
    control: {
      type: 'select',
      options: ['success', 'info', 'warning', 'danger'],
    },
  },
  closable: {
    description: 'Set to true to allow the alert to be closed by the user.',
  },
  content: {
    description: 'Pass text to display in the message.',
  },
};

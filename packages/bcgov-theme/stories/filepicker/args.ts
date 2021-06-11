export const argTypes = {
  size: {
    control: {
      type: 'select',
      options: ['small', 'medium', 'large'],
    },
    description: 'The size of the filepicker',
  },
  onClick: { action: 'clicked' },
  disabled: {
    description: 'Indicates whether the field is disabled.',
  },
  required: {
    description: 'Indicates whether the field is required.',
  },
  label: {
    description: 'The label for the filepicker.',
  },
  name: {
    description: 'The name to pass on to the input. If not provided, one will be generated.',
  },
  id: {
    description:
      'The id to pass on to the input. If not provided but a label is given, one will be generated to connect them.',
  },
};

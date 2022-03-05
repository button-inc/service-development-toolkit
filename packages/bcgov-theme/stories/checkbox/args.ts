export const argTypes = {
  size: {
    control: {
      type: 'select',
      options: ['small', 'medium', 'large'],
    },
    description: 'The size of the checkbox',
  },
  onClick: { action: 'clicked' },
  label: {
    description:
      'The label for the checkbox. If an id is not provided, one will be created to connect the label to the checkbox.',
  },
  description: {
    control: {
      type: 'text',
    },
    description: 'Optional description text that will be subordinate to the label if present.',
  },
  disabled: {
    description: 'Indicates whether the field is disabled.',
  },
  required: {
    description: 'Indicates whether the field is required.',
  },
  value: {
    description: 'The value to pass on to the input.',
  },
  name: {
    description: 'The name to pass on to the input. If not provided, one will be generated with the suffix "-input".',
  },
  id: {
    description:
      'The id to pass on to the input. If not provided but a label is given, one will be generated to connect them.',
  },
};

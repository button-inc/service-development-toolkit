export const argTypes = {
  size: {
    control: {
      type: 'select',
      options: ['small', 'medium', 'large'],
    },
    description: 'The size of the datepicker',
  },
  type: {
    control: {
      type: 'select',
      options: ['email', 'number', 'password', 'tel', 'text', 'url'],
    },
  },
  label: {
    description:
      'The label for the datepicker. If an id is not provided, one will be created to connect the label to the datepicker.',
  },
  description: {
    control: {
      type: 'text'
    },
    description: "Optional description text that will be subordinate to the label if present."
  },
  disabled: {
    description: 'Indicates whether the field is disabled.',
  },
  required: {
    description: 'Indicates whether the field is required.',
  },
  value: {
    description: 'The value to pass on to the input.',
    control: {
      type: 'text',
    },
  },
  name: {
    description: 'The name to pass on to the input. If not provided, one will be generated with the suffix "-input".',
  },
  id: {
    description:
      'The id to pass on to the input. If not provided but a label is given, one will be generated to connect them.',
  },
  rounded: {
    description: 'Apply a rounded border radius to the input.',
  },
  maxLength: {
    description: 'The maximum length for the input.',
  },
};

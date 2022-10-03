export const argTypes = {
  size: {
    control: {
      type: 'select',
      options: ['small', 'medium', 'large'],
    },
    description: 'The size of the fieldset',
  },
  onClick: { action: 'clicked' },
  title: {
    description: "The title to display in the fieldset's legend.",
  },
  disabled: {
    description: 'Indicates whether the field is disabled.',
  },
  required: {
    description: 'Indicates whether the field is required.',
  },
  fullWidth: {
    description: 'Apply 100% width to the element.',
    control: {
      type: 'boolean',
    },
  },
};

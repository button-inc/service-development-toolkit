export const argTypes = {
  size: {
    control: {
      type: 'select',
      options: ['small', 'medium', 'large'],
    },
    description: 'The size of the checkbox',
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
};

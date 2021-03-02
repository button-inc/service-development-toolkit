export const fileUiSchema = {
  'ui:hints': [],
  firstQuestion: {
    'ui:options': {
      label: false,
    },
  },
};

export const fileSchema = {
  title: 'Launch Online Grant',
  properties: {
    firstQuestion: {
      type: 'string',
      title: 'First Question',
      hasFiles: true,
      name: 'firstQuestion',
    },
    secondQuestion: {
      type: 'string',
      name: 'secondQuestion',
      title: 'Second Question',
      enum: ['Yes', 'No', 'Rather not answer'],
    },
    thirdQuestion: {
      type: 'boolean',
      title: 'Third Question',
      hasFiles: true,
      name: 'thirdQuestion',
    },
    fourthQuestion: {
      type: 'object',
      properties: {
        nestedQuestion: {
          hasFiles: true,
        },
      },
    },
    fifthQuestion: {
      type: 'string',
    },
  },
};

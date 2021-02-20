const schema = {
  title: 'Custom Example',
  properties: {
    firstQuestion: {
      type: 'string',
      title: 'First Question',
      name: 'firstQuestion',
    },
    file: {
      type: 'string',
      title: 'Files',
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
      name: 'thirdQuestion',
    },
    fourthQuestion: {
      type: 'object',
      name: 'fourthQuestion',
      title: 'Fourth Question',
      properties: {
        firstQ: {
          type: 'string',
          title: 'first',
        },
        secondQ: {
          type: 'string',
          title: 'second',
        },
      },
    },
  },
};

export default schema;

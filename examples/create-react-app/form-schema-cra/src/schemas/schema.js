const schema = {
  title: 'Launch Online Grant',
  properties: {
    firstQuestion: {
      type: 'string',
      title: 'Files',
      name: 'firstQuestion',
    },
    secondQuestion: {
      type: 'string',
      name: 'secondQuestion',
      title: 'Second Question',
      enum: ['Yes', 'No', 'Rather not answer'],
    },
  },
};

module.exports = schema;

const schema = {
  title: 'Launch Online Grant',
  properties: {
    file: {
      type: 'string',
      title: 'Files',
      hasFiles: true,
      name: 'firstQuestion',
      urlPostfix: 'file-upload',
    },
    secondQuestion: {
      type: 'string',
      name: 'secondQuestion',
      title: 'Second Question',
      enum: ['Yes', 'No', 'Rather not answer'],
    },
  },
};

export default schema;

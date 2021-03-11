const schema = {
  required: ['thirdQuestion'],
  title: 'My new form title',
  properties: {
    firstQuestion: {
      type: 'string',
      title: 'Simple Input',
      name: 'firstQuestion',
    },
    secondQuestion: {
      type: 'string',
      name: 'secondQuestion',
      title: 'Input with custom validation and url',
      urlPostfix: 'with-url',
    },
    thirdQuestion: {
      type: 'string',
      name: 'thirdQuestion',
      title: 'Required Input',
    },
    fourthQuestion: {
      type: 'boolean',
      title: 'Basic Checkbox',
      name: 'fourthQuestion',
    },
    fifthQuestion: {
      type: 'string',
      title: 'Radio Groups',
      name: 'fifthQuestion',
      enum: ['one', 'two', 'three'],
      enumNames: ['one', 'two', 'three'],
    },
    sixthQuestion: {
      type: 'object',
      name: 'sixthQuestion',
      description: 'Group Properties to Include on One Page',
      properties: {
        firstQ: {
          type: 'string',
          title: 'first',
          name: 'firstQ',
        },
        secondQ: {
          type: 'string',
          title: 'second',
          name: 'secondQ',
        },
      },
      dependencies: {
        firstQ: ['secondQ'],
      },
    },
    seventhQuestion: {
      type: 'string',
      name: 'seventhQuestion',
      title: 'Text area',
    },
    eigthQuestion: {
      type: 'string',
      name: 'eigthQuestion',
      title: 'Dropdown',
      enum: ['one', 'two', 'three'],
    },
    ninthQuestion: {
      type: 'string',
      hasFiles: true,
      name: 'ninthQuestion',
      title: 'File Picker',
    },
    tenthQuestion: {
      type: 'string',
      format: 'date',
      name: 'tenthQuestion',
      title: 'Date Picker',
    },
  },
};

export default schema;

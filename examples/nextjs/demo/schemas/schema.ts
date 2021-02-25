const schema = {
  required: ['thirdQuestion'],
  properties: {
    firstQuestion: {
      type: 'string',
      title: 'Simple Input',
      name: 'firstQuestion',
    },
    secondQuestion: {
      type: 'string',
      name: 'secondQuestion',
      title: 'Input with custom validation',
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
      title: 'Radio Group',
      name: 'fifthQuestion',
      enum: ['one', 'two', 'three'],
      enumNames: ['one', 'two', 'three'],
    },
    sixthQuestion: {
      type: 'object',
      name: 'sixthQuestion',
      title: 'Group Properties to Include on One Page',
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
      format: 'date',
      name: 'ninthQuestion',
      title: 'Date Picker',
    },
    tenthQuestion: {
      type: 'string',
      hasFiles: true,
      name: 'tenthQuestion',
      title: 'Date Picker',
    },
  },
};

export default schema;

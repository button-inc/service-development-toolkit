// Only use on required elements if non-zero
const REQUIRED_TEXT_MIN_LENGTH = 0;
const TEXT_MAX_LENGTH = 1000;

const schema = {
  title: 'Launch Online Grant',
  required: ['sectorOther'],
  properties: {
    firstQuestion: {
      type: 'string',
      title: 'First Question',
      name: 'firstQuestion',
    },
    file: {
      type: 'string',
      title: 'Files',
      files: true,
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

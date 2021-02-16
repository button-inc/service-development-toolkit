// Only use on required elements if non-zero
const REQUIRED_TEXT_MIN_LENGTH = 0;
const TEXT_MAX_LENGTH = 1000;

const schema = {
  title: 'Launch Online Grant',
  type: 'object',
  required: ['sectorOther'],
  properties: {
    firstQuestion: {
      type: 'string',
      title: 'First Question',
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
      type: 'boolean',
      name: 'fourthQuestion',
      title: 'Fourth Question',
    },
  },
};

export default schema;

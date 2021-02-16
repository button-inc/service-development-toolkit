// Only use on required elements if non-zero
const REQUIRED_TEXT_MIN_LENGTH = 0;
const TEXT_MAX_LENGTH = 1000;

const schema = {
  title: 'Launch Online Grant',
  type: 'object',
  required: ['sectorOther'],
  properties: {
    sectorOther: {
      type: 'string',
      title: 'Please specify',
      name: 'sectorOther',
      minLength: REQUIRED_TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    isIndigenous: {
      type: 'string',
      name: 'isIndigenous',
      title: 'Is this an Indigenous Business?',
      enum: ['Yes', 'No', 'Rather not answer'],
    },
    otherCovidFunding: {
      type: 'boolean',
      title: 'Has your business received funding from other provincial or federal COVID-19 recovery programs?',
      name: 'otherCovidFunding',
    },
    useOfGrant: {
      type: 'boolean',
      name: 'useOfGrant',
      title:
        'I understand that grant funding received through this program must be used to support the development and improvement of online shop of the business this application identifies only.',
    },
    newField: {
      type: 'boolean',
      name: 'newField',
      title: 'New field here',
    },
  },
};

export default schema;

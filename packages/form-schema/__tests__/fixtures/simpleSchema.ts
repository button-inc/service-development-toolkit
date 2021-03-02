export const simplePropertySchema: any = {
  required: ['first', 'second'],
  properties: {
    first: {
      type: 'string',
    },
    second: {
      type: 'boolean',
    },
    third: {
      type: 'boolean',
    },
  },
};

export const expectedSimplePropertySchemas = [
  {
    required: ['first'],
    properties: {
      first: simplePropertySchema.properties.first,
    },
  },
  {
    required: ['second'],
    properties: {
      second: simplePropertySchema.properties.second,
    },
  },
  {
    required: [],
    properties: {
      third: simplePropertySchema.properties.third,
    },
  },
];

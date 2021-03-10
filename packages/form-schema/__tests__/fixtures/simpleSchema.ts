export const simplePropertySchema: any = {
  required: ['first', 'second'],
  title: 'test',
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
    title: 'test',
    type: 'object',
    properties: {
      first: simplePropertySchema.properties.first,
    },
  },
  {
    required: ['second'],
    title: 'test',
    type: 'object',
    properties: {
      second: simplePropertySchema.properties.second,
    },
  },
  {
    required: [],
    title: 'test',
    type: 'object',
    properties: {
      third: simplePropertySchema.properties.third,
    },
  },
];

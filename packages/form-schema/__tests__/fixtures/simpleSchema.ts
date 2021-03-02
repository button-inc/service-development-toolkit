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
    dependencies: {},
    hasFiles: undefined,
  },
  {
    required: ['second'],
    properties: {
      second: simplePropertySchema.properties.second,
    },
    dependencies: {},
    hasFiles: undefined,
  },
  {
    required: [],
    properties: {
      third: simplePropertySchema.properties.third,
    },
    dependencies: {},
    hasFiles: undefined,
  },
];

export const simpleDependencySchema: any = {
  required: ['third'],
  properties: {
    page: {
      type: 'object',
      properties: {
        first: {
          type: 'string',
        },
        second: {
          type: 'boolean',
        },
      },
    },
    third: {
      type: 'boolean',
    },
  },
  dependencies: {
    first: ['second'],
  },
};

export const expectedSimpleDependencySchemas = [
  {
    required: [],
    properties: {
      first: {
        type: 'string',
      },
      second: {
        type: 'boolean',
      },
    },
    dependencies: {
      first: ['second'],
    },
    hasFiles: undefined,
  },
  {
    required: ['third'],
    properties: {
      third: {
        type: 'boolean',
      },
    },
    dependencies: {},
    hasFiles: undefined,
  },
];

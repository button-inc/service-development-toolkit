export const simpleDependencySchema: any = {
  required: ['third'],
  title: 'test',
  properties: {
    page: {
      type: 'object',
      description: 'nested-title',
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
    },
    third: {
      type: 'boolean',
    },
  },
};

export const expectedSimpleDependencySchemas = [
  {
    required: [],
    title: 'test',
    type: 'object',
    description: 'nested-title',
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
  },
  {
    required: ['third'],
    title: 'test',
    type: 'object',
    properties: {
      third: {
        type: 'boolean',
      },
    },
  },
];

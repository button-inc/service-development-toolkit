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
    title: 'page',
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
    properties: {
      third: {
        type: 'boolean',
      },
    },
  },
];

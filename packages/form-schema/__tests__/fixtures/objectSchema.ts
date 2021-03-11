export const objectPropertySchema: any = {
  properties: {
    first: {
      type: 'object',
      description: 'first description',
      properties: {
        second: {
          type: 'boolean',
        },
        third: {
          type: 'boolean',
        },
      },
    },
  },
};

export const expectedObjectPropertySchema = {
  required: [],
  type: 'object',
  description: 'first description',
  properties: {
    second: {
      type: 'boolean',
    },
    third: {
      type: 'boolean',
    },
  },
};

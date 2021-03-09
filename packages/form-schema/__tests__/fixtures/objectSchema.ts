export const objectPropertySchema: any = {
  properties: {
    first: {
      type: 'object',
      title: 'first',
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
  title: 'first',
  required: [],
  type: 'object',
  properties: {
    second: {
      type: 'boolean',
    },
    third: {
      type: 'boolean',
    },
  },
};

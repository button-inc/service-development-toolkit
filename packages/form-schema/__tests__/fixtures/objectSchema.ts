export const objectPropertySchema: any = {
  properties: {
    first: {
      type: 'object',
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
  properties: {
    second: {
      type: 'boolean',
    },
    third: {
      type: 'boolean',
    },
  },
};

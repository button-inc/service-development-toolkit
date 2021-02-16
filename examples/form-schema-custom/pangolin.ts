// @ts-nocheck
import { govBuilder } from 'form-schema';
import schema from 'schemas/schema';
import uiSchema from 'schemas/uiSchema';

const options = {
  validations: {
    firstQuestion: {
      errorMessage: 'Your input is invalid.',
      validationFunction: value => value === 'success',
    },
  },
};

export const { postHandler, getHandler, Forms } = govBuilder(schema, uiSchema, '/', '/api', options);

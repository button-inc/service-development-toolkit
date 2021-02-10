// @ts-nocheck
import builder from 'form-schema';
import Checkbox from 'component-library/Checkbox';
import schema from './schemas/schema';
import uiSchema from './schemas/uiSchema';

const validations = {
  useOfGrant: {
    validationFunction: value => value,
    errorMessage: 'You must agree to continue!',
  },
};

export const { postHandler, getHandler, Forms } = builder(schema, uiSchema, '', 'api', validations);

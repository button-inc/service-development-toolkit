// @ts-nocheck
import { govBuilder } from 'form-schema';
import Input from 'component-library-gov/Input';
import Checkbox from 'component-library-gov/Checkbox';
import RadioButton from 'component-library-gov/RadioButton';
import schema from './schemas/schema';
import uiSchema from './schemas/uiSchema';

const validations = {
  useOfGrant: {
    validationFunction: value => value,
    errorMessage: 'You must agree to continue!',
  },
};

const options = {
  validations,
  // defaultLabels: false
};

export const { postHandler, getHandler, Forms } = govBuilder(schema, uiSchema, '/', '/api', options);

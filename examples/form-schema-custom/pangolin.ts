import { govBuilder } from 'form-schema';
import schema from 'schemas/schema';
import uiSchema from 'schemas/uiSchema';
import fs from 'fs';

const options = {
  validations: {
    firstQuestion: {
      errorMessage: 'Your input is invalid.',
      validationFunction: (value: string) => value === 'success',
    },
  },
  createStream: (filename: string) => fs.createWriteStream(filename),
  onFileLoad: (filename: string) => {
    console.log(`${filename} has been uploaded`);
  },
};

export const { postHandler, getHandler, fileMiddleware, Forms } = govBuilder(schema, uiSchema, '/', '/api', options);

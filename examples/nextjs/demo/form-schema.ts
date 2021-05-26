import { govBuilder } from '@button-inc/form-schema';
import schema from 'schemas/schema';
import uiSchema from 'schemas/uiSchema';
import fs from 'fs';
import path from 'path';
import formData from 'db';

let id = 1;

const options = {
  getRoute: '/',
  postRoute: '/api',
  validations: {
    secondQuestion: {
      errorMessage: 'Speak friend and enter.',
      validationFunction: (value: string) => value === 'mellon',
    },
  },
  handleReadStream: (filename: string, readStream: any) => {
    const writeStream = fs.createWriteStream(path.join('./files', filename));
    readStream.pipe(writeStream);
  },
  onFileLoad: (filename: string) => {
    console.log(`${filename} has been uploaded`);
  },
  onFormEnd: (errors: [], finishedFormData: any) => {
    if (errors) console.error(errors);
    else {
      formData[id] = finishedFormData;
      id += 1;
    }
  },
  useSession: true,
  validateEachPage: true,
  validatedUrl: '/success',
  invalidUrl: '/error',
};

export const { postMiddleware, getHandler, fileMiddleware, Forms } = govBuilder(schema, uiSchema, options);

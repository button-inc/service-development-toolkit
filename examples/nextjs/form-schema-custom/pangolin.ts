import { govBuilder } from 'form-schema';
import schema from 'schemas/schema';
import uiSchema from 'schemas/uiSchema';
import fs from 'fs';
import formData from 'db';

const options = {
  getRoute: '/',
  postRoute: '/api',
  validations: {
    firstQuestion: {
      errorMessage: 'Your input is invalid.',
      validationFunction: (value: string) => value === 'a',
    },
  },
  validatedUrl: '/success',
  invalidUrl: '/error',
  handleReadStream: (filename: string, readStream: any) => {
    const writeStream = fs.createWriteStream(filename);
    readStream.pipe(writeStream);
  },
  onFileLoad: (filename: string) => {
    console.log(`${filename} has been uploaded`);
  },
  onPost: (_postData: object, schemaIndex: number, cleanSchemaData: Function) => {
    const newData = cleanSchemaData(formData);
    formData[schemaIndex] = { ...formData[schemaIndex], ...newData };
    return formData[schemaIndex];
  },
  onFormEnd: (errors: [], _formData: any) => {
    console.log('completed a form');
    if (errors) console.error(errors);
  },
  useSession: false,
};

export const { postMiddleware, getHandler, fileMiddleware, Forms } = govBuilder(schema, uiSchema, options);

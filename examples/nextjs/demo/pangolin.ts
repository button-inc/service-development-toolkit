import { govBuilder } from 'form-schema';
import schema from 'schemas/schema';
import uiSchema from 'schemas/uiSchema';
import fs from 'fs';
import path from 'path';
// import formData from 'db';

const options = {
  getRoute: '/',
  postRoute: '/api',
  validations: {
    secondQuestion: {
      errorMessage: 'Speak friend and enter.',
      validationFunction: (value: string) => value.toLowerCase() === 'mellon',
    },
  },
  handleReadStream: (filename: string, readStream: any) => {
    const writeStream = fs.createWriteStream(path.join('./files', filename));
    readStream.pipe(writeStream);
  },
  onFileLoad: (filename: string) => {
    console.log(`${filename} has been uploaded`);
  },
  // onPost: (_postData: object, schemaIndex: number, cleanSchemaData: Function) => {
  //   const newData = cleanSchemaData(formData);
  //   formData[schemaIndex] = { ...formData[schemaIndex], ...newData };
  //   return newData;
  // },
  onFormEnd: (errors: [], _formData: any) => {
    console.log('completed a form');
    if (errors) console.error(errors);
  },
  useSession: true,
};

export const { postMiddleware, getHandler, fileMiddleware, Forms } = govBuilder(schema, uiSchema, options);

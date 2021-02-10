// @ts-nocheck
import postHandler from './postHandler';
import getHandler from './getHandler';
import buildForms from './buildForms';
import { ISchema } from './interfaces';

export default function builder(schema: ISchema, uiSchema: object, getRoute: string, postRoute: string) {
  const { Forms, schemasArray, fieldsArray } = buildForms(schema, uiSchema, getRoute, postRoute);

  const numForms = Forms.length;
  return {
    postHandler: postHandler.bind({}, getRoute, numForms, schema, schemasArray, fieldsArray),
    getHandler: getHandler.bind({}, numForms),
    Forms,
  };
}

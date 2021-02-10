// @ts-nocheck
import postHandler from './postHandler';
import getHandler from './getHandler';
import buildForms from './buildForms';
import { ISchema, IValidations } from './interfaces';

export default function builder(
  schema: ISchema,
  uiSchema: object,
  getRoute: string,
  postRoute: string,
  validations: IValidations
) {
  const { Forms, schemasArray, fieldsArray } = buildForms(schema, uiSchema, getRoute, postRoute, validations);
  const numForms: number = Forms.length;

  return {
    postHandler: postHandler.bind({}, getRoute, numForms, schema, schemasArray, fieldsArray, validations),
    getHandler: getHandler.bind({}, numForms),
    Forms,
  };
}

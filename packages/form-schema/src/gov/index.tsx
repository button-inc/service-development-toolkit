// @ts-nocheck
import postHandler from '../postHandler';
import getHandler from '../getHandler';
import buildForms from '../buildForms';
import { ISchema, IOptions } from '../interfaces';
import { removeDefaultLabels } from '../helpers';
import widgets from './widgets';

export default function builder(
  schema: ISchema,
  baseUiSchema: object,
  getRoute: string,
  postRoute: string,
  options: IOptions = {}
) {
  let uiSchema = { ...baseUiSchema };
  if (!options.defaultLabels) {
    uiSchema = removeDefaultLabels(schema, uiSchema);
  }
  const govOptions = { ...options, widgets };
  const { Forms, schemasArray, fieldsArray } = buildForms(schema, uiSchema, getRoute, postRoute, govOptions);
  const { validations } = options;
  const numForms: number = Forms.length;

  return {
    postHandler: postHandler.bind({}, getRoute, numForms, schema, schemasArray, fieldsArray, validations),
    getHandler: getHandler.bind({}, numForms),
    Forms,
  };
}

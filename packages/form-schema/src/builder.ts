// @ts-nocheck
import postHandler from './postHandler';
import fileHandler from './fileHandler';
import getHandler from './getHandler';
import buildForms from './buildForms';
import { ISchema, IOptions } from './interfaces';
import { generateUrlArray } from './Utils/urlUtils';
import { removeDefaultLabels } from './Utils/schemaUtils';

export default function builder(
  defaultWidgets: object | boolean,
  schema: ISchema,
  baseUiSchema: object,
  getRoute: string,
  postRoute: string,
  options: IOptions
) {
  let uiSchema = { ...baseUiSchema };
  let combinedOptions = { ...options };
  if (defaultWidgets) combinedOptions = { ...combinedOptions, widgets: defaultWidgets, defaultLabels: false };
  if (combinedOptions && combinedOptions.defaultLabels === false) uiSchema = removeDefaultLabels(schema, uiSchema);

  const urlArray = generateUrlArray(schema);
  const { Forms, schemasArray, fieldsArray } = buildForms(
    schema,
    uiSchema,
    getRoute,
    postRoute,
    combinedOptions,
    urlArray
  );
  const { validations } = combinedOptions;
  const numForms: number = Forms.length;

  return {
    postHandler: postHandler.bind({}, getRoute, numForms, schema, schemasArray, fieldsArray, validations, urlArray),
    fileHandler: fileHandler.bind({}, getRoute, numForms, urlArray),
    getHandler: getHandler.bind({}, numForms, urlArray),
    Forms,
  };
}

// @ts-nocheck
import postHandler from './postHandler';
import fileMiddleware from './fileMiddleware';
import getHandler from './getHandler';
import buildForms from './buildForms';
import { ISchema, IOptions, IFileOptions } from './interfaces';
import { generateUrlArray } from './Utils/urlUtils';
import { removeDefaultLabels, addWidgetsForFiles } from './Utils/schemaUtils';

const getUiSchemaFromOptions = (schema, uiSchema, options) => {
  let newUiSchema = addWidgetsForFiles(schema, uiSchema);
  if (options && options.defaultLabels === false) newUiSchema = removeDefaultLabels(schema, newUiSchema);
  return newUiSchema;
};

export default function builder(
  defaultWidgets: object | boolean,
  schema: ISchema,
  baseUiSchema: object,
  getRoute: string,
  postRoute: string,
  options?: IOptions
) {
  let uiSchema = { ...baseUiSchema };
  let combinedOptions = { ...options };
  if (defaultWidgets) combinedOptions = { ...combinedOptions, widgets: defaultWidgets, defaultLabels: false };
  uiSchema = getUiSchemaFromOptions(schema, uiSchema, combinedOptions);

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

  const { handleReadStream, onFileLoad } = options;

  const fileOptions: IFileOptions = {
    handleReadStream,
    onFileLoad,
  };

  return {
    postHandler: postHandler.bind({}, getRoute, numForms, schema, schemasArray, fieldsArray, validations, urlArray),
    fileMiddleware: fileMiddleware.bind({}, getRoute, numForms, urlArray, fileOptions),
    getHandler: getHandler.bind({}, numForms, urlArray),
    Forms,
  };
}

import postMiddleware from './postMiddleware';
import fileMiddleware from './fileMiddleware';
import getHandler from './getHandler';
import buildForms from './buildForms';
import { ISchema, IOptions, ISharedArgs } from './interfaces';
import { generateUrlArray } from './utils/urlUtils';
import { getUiSchemaFromOptions } from './utils/schemaUtils';

export default function builder(
  defaultWidgets: object | boolean,
  schema: ISchema,
  baseUiSchema: object,
  options: IOptions
) {
  let uiSchema = { ...baseUiSchema };
  let combinedOptions = { ...options };
  if (defaultWidgets) combinedOptions = { ...combinedOptions, widgets: defaultWidgets, defaultLabels: false };
  uiSchema = getUiSchemaFromOptions(schema, uiSchema, combinedOptions);
  const urlArray = generateUrlArray(schema);

  const { Forms, schemasArray, fieldsArray } = buildForms(schema, uiSchema, combinedOptions, urlArray);
  const numForms: number = Forms.length;
  const sharedArgs: ISharedArgs = {
    ...combinedOptions,
    schema,
    uiSchema,
    urlArray,
    numForms,
    schemasArray,
    fieldsArray,
  };

  return {
    postMiddleware: postMiddleware.bind({}, sharedArgs),
    fileMiddleware: fileMiddleware.bind({}, sharedArgs),
    getHandler: getHandler.bind({}, sharedArgs),
    Forms,
  };
}

import postMiddleware from './postMiddleware';
import fileMiddleware from './fileMiddleware';
import getHandler from './getHandler';
import buildForms from './buildForms';
import { ISchema, IOptions, IFileOptions } from './interfaces';
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
  const { handleReadStream, onFileLoad, onPost, onFormEnd, getRoute, postRoute, useSession } = combinedOptions;

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

  const fileOptions: IFileOptions = {
    handleReadStream,
    onFileLoad,
  };

  return {
    postMiddleware: postMiddleware.bind(
      {},
      getRoute,
      numForms,
      schema,
      schemasArray,
      fieldsArray,
      validations,
      urlArray,
      onFormEnd,
      onPost,
      useSession
    ),
    fileMiddleware: fileMiddleware.bind({}, getRoute, numForms, urlArray, fileOptions),
    getHandler: getHandler.bind({}, numForms, urlArray, useSession),
    Forms,
  };
}

import { validateFormData } from './validation';
import { removePageFields, matchPostBody } from './cleanData';
import { getUrlPage } from './helpers';
import { IValidations, ISchema } from './interfaces';

function cleanSchemaData(postData: object, pageSchema: ISchema, formData: object) {
  const clearedFormData = removePageFields(formData, pageSchema);
  const clearedPostData = matchPostBody(postData, pageSchema);
  return { ...clearedFormData, ...clearedPostData };
}

function defaultPageOverHandler(session: any, pageSchema: ISchema, postData: object): object {
  const { formData = {} } = session || {};
  const newFormData = cleanSchemaData(postData, pageSchema, formData);
  return newFormData;
}

export default async function postHandler(
  getRoute: string,
  numForms: number,
  schema: ISchema,
  schemas: ISchema[],
  fieldsArray: string[][],
  validations: IValidations,
  req: any,
  res: any,
  onEnd: Function | boolean = false,
  handlePageOver: Function | boolean = false
) {
  const {
    body: { js },
    url,
  } = req;

  let {
    body: { postData },
  } = req;

  if (!js) postData = req.body;
  const currentPage = getUrlPage(url);

  const nextPage = currentPage + 1;
  const schemaIndex = currentPage - 1;
  const pageSchema = schemas[schemaIndex];
  let newFormData: object = {};

  if (!handlePageOver) {
    newFormData = defaultPageOverHandler(req.session, schema, postData);
    req.session = newFormData;
  } else if (typeof handlePageOver === 'function') {
    newFormData = handlePageOver(postData, schemaIndex, cleanSchemaData.bind({}, postData, pageSchema));
  }

  if (nextPage > numForms) {
    const result = validateFormData(newFormData, schema, fieldsArray, validations);
    if (typeof onEnd === 'function') onEnd(result.errors, newFormData);
  }

  const props = { nextPage, formData: newFormData };

  if (js) {
    res.json(props);
  } else {
    res.redirect(`${getRoute}/${nextPage}`);
  }
}

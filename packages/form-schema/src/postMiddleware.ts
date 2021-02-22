import { validateFormData } from './Utils/validationUtils';
import { removePageFields, matchPostBody } from './Utils/cleanDataUtils';
import { getPageInfo, parseUrl } from './Utils/urlUtils';
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
  urlArray: string[],
  onEnd: Function | boolean = false,
  onPost: Function | boolean = false,
  req: any,
  res: any
) {
  const {
    body: { js },
    url,
  } = req;

  let {
    body: { postData },
  } = req;

  if (!js) postData = req.body;
  const { nextPageNumber, nextPagePostfix, schemaIndex } = getPageInfo(url, urlArray);
  const pageSchema = schemas[schemaIndex];
  let newFormData: object = {};

  if (!onPost) {
    newFormData = defaultPageOverHandler(req.session, schema, postData);
    req.session.formData = newFormData;
  } else if (typeof onPost === 'function') {
    newFormData = onPost(postData, schemaIndex, cleanSchemaData.bind({}, postData, pageSchema));
  }

  if (nextPageNumber > numForms) {
    const result = validateFormData(newFormData, schema, fieldsArray, validations);
    if (typeof onEnd === 'function') onEnd(result.errors, newFormData);
  }

  const props = { nextPage: nextPagePostfix, formData: newFormData, isLastPage: nextPageNumber > numForms };
  if (js) {
    res.json(props);
  } else {
    const redirectUrl = parseUrl(getRoute, String(nextPagePostfix));
    res.redirect(redirectUrl);
  }
}

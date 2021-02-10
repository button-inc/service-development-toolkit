// @ts-nocheck
import { validateFormData } from './validation';
import { removePageFields, matchPostBody } from './cleanData';
import { getUrlPage } from './helpers';
import { IValidations, ISchema } from './interfaces';

export default async function postHandler(
  getRoute: string,
  numForms: number,
  schema: ISchema,
  schemas: ISchema[],
  fieldsArray: string[],
  validations: IValidations,
  req: any,
  res: any,
  onEnd: Function,
  onPageOver: Function
) {
  const {
    body: { js },
    url,
    session,
  } = req;

  let {
    body: { postData },
  } = req;

  if (!js) postData = req.body;

  const nextPage = getUrlPage(url) + 1;
  const schemaIndex = nextPage - 2;
  const { formData = {} } = session;

  const currentPageSchema = schemas[schemaIndex];
  const clearedFormData = removePageFields(formData, currentPageSchema);

  const clearedPostData = matchPostBody(postData, currentPageSchema);
  const newFormData = { ...clearedFormData, ...clearedPostData };
  session.formData = newFormData;

  console.log(newFormData);

  console.log(nextPage, numForms);
  if (nextPage > numForms) {
    const result = validateFormData(newFormData, schema, fieldsArray, validations);
    onEnd(result.errors, newFormData);
  }

  const props = { nextPage, formData };

  if (js) {
    res.json(props);
  } else {
    res.redirect(`${getRoute}/${nextPage}`);
  }
}

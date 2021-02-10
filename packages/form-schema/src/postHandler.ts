// @ts-nocheck
import { validateFormData } from './validation';
import { removePageFields, matchPostBody } from './cleanData';
import { getUrlPage } from './helpers';

export default async function postHandler(
  getRoute,
  numForms,
  schema,
  schemas,
  fieldsArray,
  req,
  res,
  onEnd,
  onPageOver
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
  const { formData = {} } = session;

  const currentPageSchema = schemas[nextPage - 1];
  const clearedFormData = removePageFields(formData, currentPageSchema);

  const clearedPostData = matchPostBody(postData, currentPageSchema);
  const newFormData = { ...clearedFormData, ...clearedPostData };
  session.formData = newFormData;

  console.log(newFormData);

  if (nextPage === numForms) {
    const result = validateFormData(newData, schema, fieldsArray);
    onEnd(result.errors, newData);
  }

  const props = { nextPage, formData };

  if (js) {
    console.log('got here');
    res.json(props);
  } else {
    res.redirect(`${getRoute}/${nextPage}`);
  }
}

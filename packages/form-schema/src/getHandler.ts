import { getUrlPage } from './helpers';

export default function getHandler(numPages: number, req, handlePageLoad: Function | boolean = false) {
  const page = getUrlPage(req.url);
  const validPage = Number.isInteger(page) && page > 0 && page <= numPages;

  if (!validPage) return { formIndex: 0, formData: {}, validPage: false };
  const formIndex = page - 1;

  // onRequest: function with arguments [schemaIndex] that returns formData
  let { session: { formData = {} } = {} } = req;
  console.log('formData from session', formData);
  if (typeof handlePageLoad === 'function') formData = handlePageLoad(formIndex);
  console.log('formData after session', formData);

  return { formIndex, formData, validPage: true };
}

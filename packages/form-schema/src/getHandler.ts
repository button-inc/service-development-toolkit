import { getUrlPage } from './Utils/urlUtils';

function validatePage(page, urlArray, numPages) {
  if (urlArray.indexOf(page) !== -1) {
    return true;
  }
  if (Number.isInteger(page) && urlArray[page - 1] === '') {
    return Number.isInteger(page) && page > 0 && page <= numPages;
  }
  return false;
}

export default function getHandler(
  numPages: number,
  urlArray: string[],
  req,
  handlePageLoad: Function | boolean = false
) {
  const page = getUrlPage(req.url);
  const validPage = validatePage(page, urlArray, numPages);

  if (!validPage) return { formIndex: 0, formData: {}, validPage: false };
  const formIndex = Number.isInteger(page) ? page - 1 : urlArray.indexOf(page);
  let { session: { formData = {} } = {} } = req;
  if (typeof handlePageLoad === 'function') formData = handlePageLoad(formIndex);

  return { formIndex, formData, validPage: true };
}

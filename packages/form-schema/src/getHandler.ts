import { getUrlPage, getPrevPageUrl } from './Utils/urlUtils';

function validatePage(page, urlArray, numPages) {
  if (urlArray.indexOf(page) !== -1) {
    return true;
  }
  if (Number.isInteger(page) && urlArray[page - 1] === '') {
    return Number.isInteger(page) && page > 0 && page <= numPages;
  }
  return false;
}

export default function getHandler(numPages: number, urlArray: string[], useSession: boolean, req) {
  const page = getUrlPage(req.url);
  const validPage = validatePage(page, urlArray, numPages);
  const prevPageUrl: string | -1 = getPrevPageUrl(String(page), urlArray);

  if (!validPage) return { formIndex: 0, formData: {}, validPage: false };
  const formIndex = Number.isInteger(page) ? page - 1 : urlArray.indexOf(page);

  let formData = {};
  if (useSession) formData = req.session.formData || {};

  return { prevPageUrl, formIndex, formData, validPage: true };
}

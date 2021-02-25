import { ISchema } from '../interfaces';

export const getUrlPage = url => {
  const splitUrl = url.split('/');
  let urlEnd = splitUrl[splitUrl.length - 1];
  if (urlEnd === 'file') {
    urlEnd = splitUrl[splitUrl.length - 2];
  }
  if (urlEnd.includes('.')) [urlEnd] = urlEnd.split('.');
  return Number(urlEnd) || urlEnd;
};

const getPageIndex = (page: string, urlArray: string[]) => {
  const pageIndex = urlArray.indexOf(page);
  if (pageIndex !== -1) return pageIndex;
  return Number(page) - 1;
};

export const getPrevPageUrl = (page: string, urlArray: string[]) => {
  const prevPageIndex = getPageIndex(page, urlArray) - 1;
  if (prevPageIndex === -1) return -1;
  if (urlArray[prevPageIndex]) return `/${urlArray[prevPageIndex]}`;
  return `/${String(prevPageIndex + 1)}`;
};

export const parseUrl = (getRoute: string, nextPage: string) => {
  let route;
  if (getRoute[getRoute.length - 1] === '/') route = `${getRoute}${nextPage}`;
  else route = `${getRoute}/${nextPage}`;
  return route;
};

export const generateUrlArray = (schema: ISchema) => {
  const propertyEntries = Object.entries(schema.properties);
  const urlArray: string[] = [];
  propertyEntries.forEach(([_propertyName, propertyValue]) => {
    if (propertyValue.urlPostfix) urlArray.push(propertyValue.urlPostfix);
    else urlArray.push('');
  });
  return urlArray;
};

export const getPageInfo = (url, urlArray) => {
  const currentPageName = getUrlPage(url);
  const currentPageNumber = Number.isInteger(currentPageName) ? currentPageName : urlArray.indexOf(currentPageName) + 1;

  const nextPageNumber = currentPageNumber + 1;
  const nextPagePostfix = urlArray[currentPageNumber] || nextPageNumber;
  const schemaIndex = currentPageNumber - 1;
  return { nextPageNumber, nextPagePostfix, schemaIndex };
};

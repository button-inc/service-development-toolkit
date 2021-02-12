export const getUrlPage = url => {
  const splitUrl = url.split('/');
  let urlEnd = splitUrl[splitUrl.length - 1];
  if (urlEnd.includes('.')) [urlEnd] = urlEnd.split('.');
  return Number(urlEnd);
};

export function parseUrl(getRoute: string, nextPage: string) {
  let route;
  if (getRoute[getRoute.length - 1] === '/') route = `${getRoute}${nextPage}`;
  else route = `${getRoute}/${nextPage}`;
  return route;
}

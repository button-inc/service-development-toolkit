import forEach from 'lodash/forEach';

export const getUrlPage = url => {
  const splitUrl = url.split('/');
  let urlEnd = splitUrl[splitUrl.length - 1];
  if (urlEnd.includes('.')) [urlEnd] = urlEnd.split('.');
  return Number(urlEnd);
};

export const parseUrl = (getRoute: string, nextPage: string) => {
  let route;
  if (getRoute[getRoute.length - 1] === '/') route = `${getRoute}${nextPage}`;
  else route = `${getRoute}/${nextPage}`;
  return route;
};

export const removeDefaultLabels = (schema, uiSchema) => {
  const newUiSchema = { ...uiSchema };
  forEach(schema.properties, (_value, key) => {
    newUiSchema[key] = {
      ...uiSchema[key],
      'ui:options': {
        label: false,
      },
    };
  });
  return newUiSchema;
};

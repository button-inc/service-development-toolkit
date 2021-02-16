import forEach from 'lodash/forEach';
import { ISchema } from './interfaces';

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

export const generateUrlArray = (schema: ISchema) => {
  const propertyEntries = Object.entries(schema.properties);
  console.log(propertyEntries);
  const urlArray: string[] = [];
  propertyEntries.forEach(([_propertyName, propertyValue]) => {
    if (propertyValue.urlPostfix) urlArray.push(propertyValue.urlPostfix);
    else urlArray.push('');
  });
  return urlArray;
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

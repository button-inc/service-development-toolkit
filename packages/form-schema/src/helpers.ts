import forEach from 'lodash/forEach';
import { ISchema } from './interfaces';

export const getUrlPage = url => {
  const splitUrl = url.split('/');
  let urlEnd = splitUrl[splitUrl.length - 1];
  if (urlEnd.includes('.')) [urlEnd] = urlEnd.split('.');
  return Number(urlEnd) || urlEnd;
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

export const removeDefaultLabels = (schema, uiSchema) => {
  const newUiSchema = { ...uiSchema };
  forEach(schema.properties, (value, key) => {
    if (value.properties) {
      forEach(value.properties, (_nestedValue, nestedKey) => {
        newUiSchema[key] = {
          ...newUiSchema[key],
          [nestedKey]: {
            ...(newUiSchema[key] && newUiSchema[key][nestedKey]),
            'ui:options': {
              label: false,
            },
          },
        };
      });
    } else {
      newUiSchema[key] = {
        ...newUiSchema[key],
        'ui:options': {
          label: false,
        },
      };
    }
  });
  return newUiSchema;
};

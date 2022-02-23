import _ from 'lodash';
import { getNestedFieldPropertiesByName } from './schemaUtils';
import { ISharedArgs, ISchema } from '../interfaces';

function getFieldsForSchema(schema: ISchema) {
  try {
    return Object.keys(schema.properties);
  } catch (e) {
    console.error(e);
    return [];
  }
}

function getBooleanValue(value) {
  let newValue;
  if (value === 'false') {
    newValue = false;
  }
  if (value === 'true') {
    newValue = true;
  } else if (value === true || value === false) {
    newValue = value;
  }
  return newValue;
}

const getArrayValue = value => (Array.isArray(value) ? value : [value]);

// Clears fields for page before saving new values
export function removePageFields(formData: object, schema: ISchema) {
  const fields = getFieldsForSchema(schema);
  return _.omit(formData, fields);
}

export function matchPostBody(postData: object, schema: ISchema): object {
  const formattedData = { ...postData };
  const { properties } = schema;
  const dataArray = Object.keys(formattedData);
  const nestedFields = getNestedFieldPropertiesByName(schema);
  const toDelete: string[] = [];

  dataArray.forEach(propertyName => {
    let newValue = formattedData[propertyName];
    const objectIndex = nestedFields.findIndex(field => {
      const ownedPropertyNames = Object.values(field)[0];
      return ownedPropertyNames.includes(propertyName);
    });

    // Remove any posted values not on the full-schema
    if (!properties[propertyName] && objectIndex === -1) {
      toDelete.push(propertyName);
      return;
    }

    if (properties[propertyName] && properties[propertyName].type === 'boolean') {
      newValue = getBooleanValue(newValue);
      formattedData[propertyName] = newValue;
    }

    if (properties[propertyName] && properties[propertyName].type === 'array') {
      newValue = getArrayValue(newValue);
      formattedData[propertyName] = newValue;
    }

    // If fieldname is part of an object
    if (objectIndex !== -1) {
      const owningPropertyName = Object.keys(nestedFields[objectIndex])[0];
      toDelete.push(propertyName);
      // Handle nested boolean and array fields
      if (properties[owningPropertyName].properties[propertyName].type === 'boolean') {
        newValue = getBooleanValue(newValue);
      } else if (properties[owningPropertyName].properties[propertyName].type === 'array') {
        newValue = getArrayValue(newValue);
      }
      // handles when empty string is passed (user didn't enter)
      else if (properties[owningPropertyName].properties[propertyName].type === 'number') {
        newValue = Number(newValue);
      }

      if (!formattedData[owningPropertyName]) {
        formattedData[owningPropertyName] = {};
        formattedData[owningPropertyName][propertyName] = newValue;
      } else {
        formattedData[owningPropertyName][propertyName] = newValue;
      }
    }
    // TODO: add support for cleaning other rjsf types below, e.g number
  });
  if (toDelete.length > 0) {
    return _.omit(formattedData, toDelete);
  }
  return formattedData;
}

export function cleanSchemaData(postData: object, pageSchema: ISchema, formData: object) {
  const clearedFormData = removePageFields(formData, pageSchema);
  const clearedPostData = matchPostBody(postData, pageSchema);
  return { ...clearedFormData, ...clearedPostData };
}

function defaultPageOverHandler(session: any, pageSchema: ISchema, postData: object): object {
  const { formData = {} } = session || {};
  const newFormData = cleanSchemaData(postData, pageSchema, formData);
  return newFormData;
}

export function getCleanedFormData(sharedArgs: ISharedArgs, postData: object, pageSchema: ISchema, req) {
  const { onPost, useSession } = sharedArgs;
  let newFormData = {};
  if (useSession) {
    newFormData = defaultPageOverHandler(req.session, pageSchema, postData);
    req.session.formData = newFormData;
  } else if (typeof onPost === 'function') {
    newFormData = onPost(postData, pageSchema, cleanSchemaData.bind({}, postData, pageSchema, req));
  }
  return newFormData;
}

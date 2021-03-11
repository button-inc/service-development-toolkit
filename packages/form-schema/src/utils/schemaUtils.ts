import forEach from 'lodash/forEach';
import { IDependencies, ISchema } from '../interfaces';

interface INewSchema extends ISchema {
  required: string[];
  dependencies?: IDependencies;
}

export const addWidgetsForFiles = (schema: ISchema, uiSchema) => {
  const { properties } = schema;
  const newUiSchema = { ...uiSchema };
  forEach(properties, (value: any, propertyName) => {
    if (value.type === 'object') {
      const innerProperties = value.properties;
      forEach(innerProperties, (innerValue, innerPropertyName) => {
        if (innerValue.hasFiles) {
          newUiSchema[innerPropertyName] = {
            ...newUiSchema[innerPropertyName],
            'ui:widget': 'FileWidget',
          };
        }
      });
    }
    if (value.hasFiles) {
      newUiSchema[propertyName] = {
        ...newUiSchema[propertyName],
        'ui:widget': 'FileWidget',
      };
    }
  });
  return newUiSchema;
};

export function getNestedFieldPropertiesByName(schema: ISchema) {
  const { properties } = schema;
  const nestedFields: object[] = [];
  Object.entries(properties).forEach(([ownerProperty, value]) => {
    if (value.type === 'object') {
      const ownedProperties: object = { [ownerProperty]: [] };
      Object.keys(value.properties).forEach(fieldName => {
        ownedProperties[ownerProperty].push(fieldName);
      });
      nestedFields.push(ownedProperties);
    }
  });
  return nestedFields;
}

export function getRequiredFields(allRequired: string[], propertyNames: string[]) {
  const schemaRequired: string[] = [];
  forEach(allRequired, (requiredPropertyName: string) => {
    if (propertyNames.includes(requiredPropertyName)) {
      schemaRequired.push(requiredPropertyName);
    }
  });
  return schemaRequired;
}

export function createSchemaFromObject(currentField: any, allRequired?: string[], formTitle?: string) {
  const { type, description, title, ...rest } = currentField;
  const propertyNames = Object.keys(currentField.properties);
  const required = getRequiredFields(allRequired || [], propertyNames);
  const newSchema: ISchema = {
    ...rest,
    required,
    type: 'object',
    description,
    title: formTitle,
  };
  return newSchema;
}

export function splitSchema(schema: ISchema): ISchema[] {
  const schemas: ISchema[] = [];
  const { properties: allProperties, required: allRequired = [], title } = schema;
  forEach(allProperties, (currentField: any, propertyName: string) => {
    if (currentField.type === 'object') {
      return schemas.push(createSchemaFromObject(currentField, allRequired, title));
    }
    const properties = { [propertyName]: currentField };
    const { hasFiles } = currentField;
    const required = getRequiredFields(allRequired, [propertyName]);
    const newSchema: INewSchema = {
      properties,
      type: 'object',
      required,
      title,
    };
    if (hasFiles) newSchema.hasFiles = hasFiles;
    return schemas.push(newSchema);
  });
  return schemas;
}

export const removeDefaultLabels = (schema, uiSchema) => {
  const newUiSchema = { ...uiSchema };
  forEach(schema.properties, (value, key) => {
    if (value.properties) {
      forEach(value.properties, (_nestedValue, nestedKey) => {
        newUiSchema[nestedKey] = {
          ...newUiSchema[nestedKey],
          'ui:options': {
            label: false,
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

export const getUiSchemaFromOptions = (schema: ISchema, uiSchema, options) => {
  let newUiSchema = addWidgetsForFiles(schema, uiSchema);
  if (options && options.defaultLabels === false) newUiSchema = removeDefaultLabels(schema, newUiSchema);
  return newUiSchema;
};

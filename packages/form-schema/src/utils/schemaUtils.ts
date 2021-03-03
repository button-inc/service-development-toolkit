import forEach from 'lodash/forEach';
import isPlainObject from 'lodash/isPlainObject';
import { IDependencies, ISchema } from '../interfaces';

interface INewSchema extends ISchema {
  required: string[];
  dependencies: IDependencies;
}

function getDependantProperties(propertyDependencies: object[]): string[] {
  const dependantProperties: string[] = [];
  propertyDependencies.forEach(dependencyRelation => {
    dependantProperties.push(Object.values(dependencyRelation)[0]);
  });
  return dependantProperties;
}

function getNestedFieldProperties(properties: object): string[] {
  const nestedFields: string[] = [];
  Object.entries(properties).forEach(([_ownerProperty, value]) => {
    if (value && value.type === 'object') {
      Object.keys(value.properties).forEach(fieldName => {
        nestedFields.push(fieldName);
      });
    }
  });
  return nestedFields;
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

export function getPropertyDependencies(dependencies: IDependencies): object[] {
  const propertyDependencies: object[] = [];
  if (isPlainObject(dependencies)) {
    Object.entries(dependencies).forEach(([ownerProperty, value]) => {
      if (value.oneOf) {
        value.oneOf.forEach(scenario => {
          if (scenario.required) {
            propertyDependencies.push({ [ownerProperty]: scenario.required[0] });
          }
        });
      }
    });
  }
  return propertyDependencies;
}

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

// Note: this works for non-integer keys
export const getSchemaOrder = (schema: ISchema, uiSchema) => {
  if (uiSchema['ui:order']) return uiSchema['ui:order'];
  const order: string[] = [];
  forEach(schema.properties, (value: any, key) => {
    order.push(key);
    if (value.type === 'object') {
      forEach(value.properties, (_nestedValue, nestedKey) => {
        order.push(nestedKey);
      });
    }
  });
  return order;
};

/* splitSchema is built to handle only dependencies of the form
{
  propertyName: {
    oneOf: [
      {
        properties: {...},
      },
      {
        properties: {...}, <-- property lists match
        required: [] <-- Only one requirement
      },
    ]
  }
}
i.e, properties that only toggle a single requirement.
This is the format that easily supports non-js environments.
For more complex dependencies this should not be used. */
export function splitSchema(schema: ISchema, uiSchema): ISchema[] {
  const schemas: ISchema[] = [];
  const { properties, dependencies, required, title, type } = schema;
  const propertyDependencies = dependencies ? getPropertyDependencies(dependencies) : [];
  const dependantProperties = getDependantProperties(propertyDependencies);
  const nestedFieldProperties = getNestedFieldProperties(properties);
  const order = getSchemaOrder(schema, uiSchema);
  order.forEach(propertyName => {
    // Dependant properties will be included in the schema of property they depend on
    // and can be skipped
    if (dependantProperties.includes(propertyName)) return;

    // Nested fields error on properties[propertyName] since they aren't directly in it.
    // In our case, we handle them in the next if statement
    if (nestedFieldProperties.includes(propertyName)) return;

    // Costs is a nested field that is basically a "mini schema" so to speak.
    // In order for the ui:field to be applied, we need { costs: properties[costs]}
    // as opposed to newSchema = properties['costs']
    if (properties[propertyName] && properties[propertyName].type === 'object') {
      const newSchema: ISchema = {
        title,
        properties: {
          [propertyName]: properties[propertyName],
        },
      };
      schemas.push(newSchema);
    } else {
      // @ts-ignore
      const newSchema: INewSchema = {
        title,
        type,
        properties: {},
        required: [],
        dependencies: {},
        hasFiles: properties[propertyName].hasFiles,
      };

      // copy property
      newSchema.properties[propertyName] = properties[propertyName];

      // Add required
      if (required && required.includes(propertyName)) {
        newSchema.required.push(propertyName);
      }

      // Check for dependency. Add dependant properties and dependency to current schema
      const dependancyRelation = propertyDependencies.filter(
        dependant => Object.keys(dependant)[0] === propertyName
      )[0];
      const dependancy = dependancyRelation && dependancyRelation[propertyName];
      if (dependancy) {
        newSchema.properties[dependancy] = properties[dependancy];
        if (dependencies) newSchema.dependencies[propertyName] = dependencies[propertyName];
      }

      // Add to schema list
      schemas.push(newSchema);
    }
  });
  return schemas;
}

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

export const getUiSchemaFromOptions = (schema: ISchema, uiSchema, options) => {
  let newUiSchema = addWidgetsForFiles(schema, uiSchema);
  if (options && options.defaultLabels === false) newUiSchema = removeDefaultLabels(schema, newUiSchema);
  return newUiSchema;
};
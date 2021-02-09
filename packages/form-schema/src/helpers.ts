import validate from 'react-jsonschema-form/lib/validate';

const SAVING_ERROR_MSG = '';

// TEMP, will come from builder function
const fullSchema = {};
const fieldsArray: any = [];

export function pageForward({ req, newData, page, js, onPageOver = (a, b, c) => {} }) {
  const { res } = req;

  const nextPage = page + 1;
  const props = { page: nextPage, formData: newData };

  onPageOver(res, props, js);

  if (js) {
    res.json(props);
  } else {
    res.redirect(`/apply/${nextPage}`);
  }
}

function getFieldsForSchema(schema) {
  try {
    return Object.keys(schema.properties);
  } catch (e) {
    console.error(e);
    return [];
  }
}

// Clears fields for page before saving new values
export function removePageFields(formData, schema) {
  const fields = getFieldsForSchema(schema);
  return _.omit(formData, fields);
}

export function createValidator(page) {
  const fields = fieldsArray[page - 1];

  // It checks whether or not the field belong to the scoped page;
  // if the page is not valid, it always returns `true`.
  const isPageFor = field => !fields || fields.includes(field);

  return function customValidate(formData, errors) {
    if (isPageFor('useOfGrant')) {
      if (formData.useOfGrant !== true) {
        if (errors.useOfGrant) errors.useOfGrant.addError('You must agree to continue!');
      }
    }

    if (isPageFor('personalInformation')) {
      if (formData.personalInformation !== true) {
        if (errors.personalInformation) errors.personalInformation.addError('You must agree to continue!');
      }
    }

    if (isPageFor('taxImplications')) {
      if (formData.taxImplications !== true) {
        if (errors.taxImplications) errors.taxImplications.addError('You must agree to continue!');
      }
    }
    return errors;
  };
}

export function validateFormData(formData) {
  const validated = validate(formData, fullSchema, createValidator(-1));

  const { errors } = validated;

  return errors.length === 0 ? { isValidated: true, isValid: true } : { isValidated: true, isValid: false, errors };
}

export async function submitApplication({ req, newData, js, onEnd }) {
  const { res } = req;
  const result = validateFormData(newData);
  if (!result.isValid) {
    return onEnd(result.errors, newData, res, js);
  }
  req.session.formData = {};
  return onEnd(false, newData, res, js);
}

const getArrayValue = value => (Array.isArray(value) ? value : [value]);

/* Non-js users will post 'true' or 'false' string
    rjsf will post true or false bool,
    Match rjsf format and ignore other values */
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

// Returns array of all nested fields in object fields.
function getNestedFieldProperties(properties) {
  const nestedFields: any = [];
  Object.entries(properties).forEach(([_ownerProperty, value]: any) => {
    if (value.type === 'object') {
      Object.keys(value.properties).forEach(fieldName => {
        nestedFields.push(fieldName);
      });
    }
  });
  return nestedFields;
}

// Returns array objects of all nested fields in object fields, e.g [{cost: ['serviceProviders', 'acquitisionCosts']}]
export function getNestedFieldPropertiesByName(schema) {
  const { properties } = schema;
  const nestedFields: any = [];
  Object.entries(properties).forEach(([ownerProperty, value]: any) => {
    if (value.type === 'object') {
      const ownedProperties: any = { [ownerProperty]: [] };
      Object.keys(value.properties).forEach(fieldName => {
        ownedProperties[ownerProperty].push(fieldName);
      });
      nestedFields.push(ownedProperties);
    }
  });
  return nestedFields;
}

// Match body format to rjsf format for non-js cases
export function matchPostBody(postData, schema) {
  const formattedData = { ...postData };
  const { properties } = schema;
  const dataArray = Object.keys(formattedData);
  const nestedFields = getNestedFieldPropertiesByName(schema);
  const toDelete: any = [];

  dataArray.forEach(propertyName => {
    let newValue = formattedData[propertyName];
    const objectIndex = nestedFields.findIndex(field => {
      const ownedPropertyNames: any = Object.values(field)[0];
      return ownedPropertyNames.includes(propertyName);
    });

    // Remove any posted values not on the full-schema
    if (!properties[propertyName] && objectIndex === -1) {
      toDelete.push(propertyName);
      return;
    }

    if (properties[propertyName].type === 'boolean') {
      newValue = getBooleanValue(newValue);
      formattedData[propertyName] = newValue;
    }

    if (properties[propertyName].type === 'array') {
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

const isObject = obj => obj === Object(obj);

/* Returns array of dependencies in format [..., {ownerPropertyName: dependantPropertyName}] */
export function getPropertyDependencies(dependencies: any) {
  const propertyDependencies: any = [];
  if (isObject(dependencies)) {
    Object.entries(dependencies).forEach(([ownerProperty, value]: any) => {
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

// Returns array of dependant properties
function getDependantProperties(propertyDependencies) {
  const dependantProperties: any = [];
  propertyDependencies.forEach(dependencyRelation => {
    dependantProperties.push(Object.values(dependencyRelation)[0]);
  });
  return dependantProperties;
}

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
export function splitSchema(schema, order) {
  const schemas: any = [];
  const { properties, dependencies, required, title, type } = schema;
  const propertyDependencies = getPropertyDependencies(dependencies);
  const dependantProperties = getDependantProperties(propertyDependencies);
  const nestedFieldProperties = getNestedFieldProperties(properties);
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
    if (properties[propertyName].type === 'object') {
      const newSchema = {
        properties: {
          [propertyName]: properties[propertyName],
        },
      };
      schemas.push(newSchema);
    } else {
      const newSchema: any = { title, type, properties: {}, required: [], dependencies: {} };

      // copy property
      newSchema.properties[propertyName] = properties[propertyName];

      // Add required
      if (required.includes(propertyName)) {
        newSchema.required.push(propertyName);
      }

      // Check for dependency. Add dependant properties and dependency to current schema
      const dependancyRelation = propertyDependencies.filter(
        dependant => Object.keys(dependant)[0] === propertyName
      )[0];
      const dependancy = dependancyRelation && dependancyRelation[propertyName];
      if (dependancy) {
        newSchema.properties[dependancy] = properties[dependancy];
        newSchema.dependencies[propertyName] = dependencies[propertyName];
      }

      // Add to schema list
      schemas.push(newSchema);
    }
  });

  return schemas;
}

import validate from 'react-jsonschema-form/lib/validate';
import forEach from 'lodash/forEach';
import { ISharedArgs, IValidations } from '../interfaces';

export function createValidator(page: number, fieldsArray: string[][], validations?: IValidations) {
  const fields = fieldsArray[page];
  // It checks whether or not the field belong to the scoped page;
  // if the page is not valid, it always returns `true`.
  const isPageFor = field => !fields || fields.includes(field);

  return function customValidate(formData, errors) {
    forEach(validations, ({ validationFunction, errorMessage }, propertyName) => {
      if (isPageFor(propertyName)) {
        const passesValidation = validationFunction(formData[propertyName], formData);
        if (!passesValidation) errors[propertyName].addError(errorMessage);
      }
    });

    return errors;
  };
}

// see https://github.com/rjsf-team/react-jsonschema-form/blob/6f3c4c78765cbae67b91bf7762094c9b7e38c7d1/packages/core/src/validate.js#L167
export function validateFormData(
  formData: object,
  fullSchema: object,
  fieldsArray: string[][],
  validations?: IValidations
) {
  const validated = validate(formData, fullSchema, createValidator(-1, fieldsArray, validations));
  const { errors } = validated;
  return errors.length === 0 ? { isValidated: true, isValid: true } : { isValidated: true, isValid: false, errors };
}

export function handleFormEnd(sharedArgs: ISharedArgs, formData: object) {
  const { fieldsArray, validations, onFormEnd, schema: fullSchema } = sharedArgs;
  const result = validateFormData(formData, fullSchema, fieldsArray, validations);
  if (typeof onFormEnd === 'function') onFormEnd(result.errors, formData);
}

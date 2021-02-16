# Form Schema Custom

This example shows a use case for form-schema with custom data handling and custom errors.

## Files

- **schemas/schema.ts**: Exports a JSON object defining your form fields
- **schemas/uiSchema.ts**: Exports a JSON object defining ui for your form
- **pangolin.ts**: This file is importing the govBuilder version, which will have government style widgets hooked up by default.
In addition to the arguments in the default example, you can pass an `options` argument, which is an object with keys:
  - defaultLabels: bollean to indicate whether or not to include the standard rsjf labels (may want to remove if providing custom widgets)
  - widgets: array of custom widgets
  - validations: object of validations for schema keys. Each key should be a property of your form schema, and the value should be an object with `errorMessage`, the message to display when failing the validation, and `validationFunction`, the function to test validation. This takes the property value and full formData as agruments, and
  is expected to return a boolean
- **pages/[page].tsx**: In addition to the default setup, the `getHandler` can be called with a second callback argument, which can be used to return your data for the current form page. It will be given the current formIndex as an argument.
- **pages/api/[submit].ts** Post route handler. In addition to default setup, this function can take two callbacks, one to be called when the form is completed, and one to be called on each pageOver event. The pageOverHandler will be called with:
  - postData: the data the user posted
  - schemaIndex: index of the current schema
  - callback function: a callback that will prepare your returned data (match post body for js and non-js use cases, remove existing values for current page)
The pageOver handler should call the clean data callback with its data, and return the cleaned data.
The onEnd handler will be called with:
  - erros: an array of any validation errors (if length is 0 was valid submission)
  - the new form data
- **db.ts**: A simple json object to show implementation of saving/getting data from a custom source
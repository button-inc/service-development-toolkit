# Form Schema

## Overview

This library is built on top of [react json schema form](https://github.com/rjsf-team/react-jsonschema-form), with an aim to make it easier to create forms that have the following properties:

- **Progressive enhancement**: When used with a SSR platform, the forms will be functional for users who haven't loaded the javascript or css, and progressively enhance when they are added.
- **User Experience**: This package focuses on making it easy to create single question-per-page forms, to create a smooth user experience.
- **Accessibility**: This package is designed to plug in with pangolin component-libraries easily which have a focus on accessible components.

Note that while this package makes it easier to meet these three principles, it is not limited to them. For example, it can be used with a client-side rendering framework like create react app if you are interested only in accessibility and single-page form questions.

## Usage

### Description:

This package is setup to split a json schema into a series of pages, and handle redirection and form data between the pages for users with or without javascript automatically. To do this, it uses dynamic routes for POST requests and GET requests to handle the individual forms. The package generates handler functions and middleware you can use in these routes.

### Setup

To get started, import the main `builder(schema, uiSchema, options)` function. It takes the following arguments:
  - **Schema**: A schema defining your form.
  - **uiSchema**: A schema defining your ui.
  - **options**: Configuration options, which are:
    - getRoute: string. The base route where you will put the getHandler.
    - postRoute: string. The base route where you will put the post middleware.
    - defaultLabels?: boolean. Whether or not to include the default styled labels.
    - widgets?: object | boolean. Widgets to override the defaults.
    - validations?: object. An object defining custom validations to run for specific fields. It follows the format `filedName: {validationFunction: Function(fieldValue, formData), errorMessage: string}` where the validation function will receive the field value and all formdata and returns a boolean.
    - handleReadStream?: Function(filename: string, readStream: stream). A function you can use to handle uploaded files.
    - onFileLoad(filename: string)?: Function. A function you can use when file upload completes.
    - onPost?: Function(postedData: object, schemaIndex: number, cleanSchemaData: Function). Function that will be called whenever form data is posted. You can use this to handle any posted data. To use, pass in your form data to the cleanSchemaData object. After saving the cleaned data, return it. Example:
    ``` javascript
      onPost: (_postData: object, schemaIndex: number, cleanSchemaData: Function) => {
        const myData = getFormDataFromDatabase();
        const newData = cleanSchemaData(myData);
        saveNewDataToDatabase(newData);
        return newData;
     },
    ```
    - onFormEnd?: Function(errors: [], formData: object). Function fired when a form is completed.
    - useSession?: Boolean. Whether or not to use sessions to save incomplete forms. If true, enable a session object on the request.


This can be called to create the following resources:

- **getHandler(request, [getFormData: function])**: Call this function in the get route you are using to render forms. It will return the props that you need for the current form page, which are:

  - `formIndex`: The index of the form component to render.
  - `formData`: The current formData to pass into the form. Intended for use with sessions enabled, if not using sessions will be an empty object.
  - `validPage`: Whether or not the requested route is valid (since it is a dynamic route).

  Example:

  ```javascript
  const { formIndex, formData, validPage } = getHandler(req);
  res.json({ formIndex, formData, validPage });
  ```

  If using sessions, the formData will be returned for you. If saving and retrieving data yourself, the formIndex can be used to return your data after calling the handler.

  Example:

  ```javascript
  const { formIndex, validPage } = getHandler(req);
  const formData = retriveDataFromDatabase(formIndex);
  res.json({ formIndex, formData, validPage });
  ```

  Arguments:

  - request: A request object

- **postMiddleware(request, response)**: Add this middleware to the dynamic post route you are using. This middleware should be called after body parsing middleware is applied. It will handle parsing and storing the data to make the non-js and js cases match. See the `onPost` and `onEnd` options for the builder function to customize saving of posted data.

  Arguments:

  - request: A request object
  - response: A response object

- **Forms**: An array of react components for each form in the schema.
- **fileMiddleware(request, response)**: If using files anywhere in your schema, add this middleware to `<postRoute>/file`, and disable the bodyparsing middleware for this route. It will handle streaming a file upload. See the `handleReadStream` option for how to use the file stream.

  Arguments:

  - request: A request object
  - response: A response object

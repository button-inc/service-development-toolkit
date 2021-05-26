# Form Schema

**Contents**
  - [Overview](#overview)
  - [Getting Started](#getting-started)
  - [Usage](#usage)
    - [Schemas](#schemas)
    - [Rendering Forms](#rendering-forms)
    - [Posting Data](#posting-data)
    - [Files](#files)
    - [Custom Data Handling](#custom-data-handling)
  - [Functions](#functions)
    - [Builder](#builder)
    - [validationFunction](#validationfunction)
    - [handleReadStream](#handlereadstream)
    - [onFileLoad](#onfileload)
    - [onPost](#onpost)
    - [onFormEnd](#onFormEnd)
    - [getHandler](#getHandler)

## Overview

This library is built on top of [react json schema form](https://github.com/rjsf-team/react-jsonschema-form), with an aim to make it easier to create forms that have the following properties:

- **Progressive enhancement**: When used with a SSR platform, the forms will be functional for users who haven't loaded the javascript or css, and progressively enhance when they are added.
- **User Experience**: This package focuses on making it easy to create single question-per-page forms, to create a smooth user experience.
- **Accessibility**: This package is designed to plug in easily with the service-development toolkit component-libraries, which have a focus on accessible components.

Note that while this package makes it easier to meet these three goals, it is not limited to them. For example, it can be used with a client-side rendering framework like create react app if you are interested only in accessibility and single-page form questions.

## Getting Started

Install package:
- `npm i @button-inc/form-schema` or `yarn add @button-inc/form-schema` depending on your package manager.

Add to your app:
- `import builder from @button-inc/form-schema`, or to use with themed components,
`import {govBuilder} from @button-inc/form-schema`

See below for specific use cases, or browse our [examples](https://github.com/button-inc/service-development-toolkit/tree/develop/examples) for a working setup.

## Usage

This package is setup to split a json schema into a series of pages, as well as handle redirection, form data, and front-end/back-end validation for users with or without javascript. To do this, it requires three main configuration pieces:

- **[Schemas](#schemas)**: Schemas defining your forms and their ui.
- **[Rendering Forms](#rendering-forms)**: A dynamic `GET` route is required to handle rendering the split-up forms.
- **[Posting Data](#posting-data)**: A dynamic `POST` route is required to handle saving data for the split-up forms.

The Form components, functions and middleware to set this up will be returned from the main `builder` function (default import). E.g:

```javascript
import builder from '@button-inc/form-schema';
export const { postMiddleware, getHandler, Forms } = builder(schema, uiSchema, options);
```

Where the `Forms` will be an array of form components.

### Schemas

Since this library utilizes [react json schema form](https://github.com/rjsf-team/react-jsonschema-form), the schema configuration is largely the same. The differences are:

**form-schema**:

- **Splitting Pages**: The schema you provide will be split into individual properties, each of which can be rendered on a page. However, for fields that need to be displayed together you can group them in a property with `type: 'object'`. They will be shown together on a single page. E.g

```javascript
  {
    ...
    properties: {
      groupedFields: {
        type: 'object',
        properties: {
          onPageOne: {
            type: 'string',
            ...
          },
          alsoOnPageOne: {
            type: 'string',
            ...
          }
        }
      }
    }
  }
```

- **dependencies**: Currently, only the dependency `oneOf` is supported. `anyOf` will be added in the future.
- **files**: To allow uploading files with `multipart` encoding, you can add a custom `hasFiles` boolean property to fields of type `string`. See [files](#files) for more information.
- **names**: To support non-javascript users, fields will include a name attribute. This needs to be set in the schema property, as `name: string`.
- **html5 validations**: HTML5 validation attributes such as maxlength, minlength, and patterns can be set on the schema to be passed down to fields.

**ui-schema**:
The ui schema has the same properties as [react json schema form](https://github.com/rjsf-team/react-jsonschema-form).

### Rendering Forms

To handle rendering forms, you will need to know any previous form data to load into the form, as well as the index of the current form to render. The [getHandler](#gethandler) returns these for you, as well as whether or not the current route corresponds to an actual form-page. You can make a request to this route, and use the returned props to render the correct form. For example:

- _getRoute.js_

```javascript
app.get('/getRoute/:id', (req, res) => {
  const { formIndex, formData, validPage } = getHandler(req);
  res.json({ formIndex, formData, validPage });
});
```

_Note that this is if you want to use sessions to store data. To handle data in between pages yourself, see the [custom data handling](#custom-data-handling) section._

- _form.jsx_

```javascript
// Import the array of form components from the file you created them in.
import { Forms } from 'form-schema';

export default function Form({ formIndex, formData, validPage }) {
  const Form = Forms[formIndex];
  return <>{validPage && <Form formData={formData} />}</>;
}
```

The `Form` component will be an rjsf form component, and can be passed in the usual props, such as templates. In addition, it can take a [rerouteHandler](#reroutehandler) prop, which is a function to handle redirection when javascript is enabled. This allows you to use whatever SPA front-end router you need. E.g:

_form.jsx_

```javascript
  ...
  const rerouteHandler = (nextPage: string, _isValid: boolean, lastPage: boolean) => {
    // Re-route using your routing library
    router.push(lastPage ? '/end' : nextPage);
  };
  return <>{validPage && <Form formData={formData} rerouteHandler={rerouteHandler} />}</>;
}
```

_Note: If not providing this prop, redirection will be handled via `window.location` which will cause a re-render._

### Posting Data

To save data as the user progresses through pages, a dynamic post route needs to be setup. This post route requires [body parsing](https://www.npmjs.com/package/body-parser) middleware to be enabled, which is enabled by default in `express` (4.16+) and `nextjs`. In the dynamic route, simply pass the middleware in. E.g:

```javascript
app.post('/postRoute/:num', postMiddleware);
```

If the `useSession` option is set as true, you should setup [session](https://www.npmjs.com/package/express-session) middleware for this route, and it will parse and save the data for you. If not using sessions, see the [custom data handling](#custom-data-handling) section which allows you to save the data how you want in between forms. Lastly, when a form is completed a final [onFormEnd](#onformend) function will fire, allowing you to see if it validated correctly on the backend, and save the data. This is configured in the `options` argument of the `builder` function.

### Files

For handling file uploads, the data needs to be parsed differently. To support this, a separate `POST` route needs to be configured ar `postRoute/:num/file`, where `postRoute` is the route configured in options. This route can be configured similarily to the base route:

_postRoute/:num/file.js_

```javascript
app.post('/postRoute/:num', fileMiddleware);
```

Inside this route, the body-parser middleware needs to be disabled to allow file parsing. To handle the file stream, the `options` configuration passes into builder takes two functions, [handleReadStream](#handlereadstream) and [onFileLoad](#onfileload). These can be used to pipe the stream onward, and notify when the upload is complete.

### Custom Data Handling

By default, a session can be used to store incomplete form data. To handle the data yourself, pass in `useSessions: false` to the options configuration, along with an [onPost](#onpost) function. The `onPost` function can be used to clean the form data and save it in between pages. E.g:

_options_

```javascript
  onPost: (postData: object, schemaIndex: number, cleanSchemaData: Function) => {
    const formData = getDataFromDB();
    const newData = cleanSchemaData(formData);
    saveDataToDB(newData);
    return newData;
  },
```

_Note that the cleaned data is expected to be returned by this function._

To retrieve the data, in your `GET` route, simply retrieve it after calling the handler.

_getRoute.js_

```javascript
app.get('/getRoute/:id', (req, res) => {
  const { formIndex, validPage } = getHandler(req);
  const formData = getDataFromDB(formIndex);
  res.json({ formIndex, formData, validPage });
});
```

# Functions

## Builder

Builder function is the default export of the package, and can also be imported with certain widgets pre-attached by importing the named import govBuilder.
For example:

```javascript
import { govBuilder } from '@button-inc/form-schema';
```

or

```javascript
import builder from '@button-inc/form-schema';
```

It takes the following arguments:

<table>
  <tr>
    <th>Arguments</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Schema</td>
    <td>Object</td>
    <td>
      A form-schema compatible with
      <a href="https://react-jsonschema-form.readthedocs.io/en/latest/quickstart/#form-schema"
        >react json schema form</a
      >
      . In addition to the base configuration options, any field under the properties key can be passed:
      <ul>
        <li><strong>hasFiles</strong>: A boolean value indicating if the field is a file upload. File uploads should be given type <code>string</code>. See the [files](#Files) section for more details.</li>
        <li><strong>name</strong>: The name of the input field.</li>
        <li><strong>pattern</strong>: html5 pattern validation</li>
        <li><strong>minLength</strong>: html5 length validation</li>
        <li><strong>maxLength</strong>: html5 length validation</li>
      </ul>
      By default, all properties will be split into individual pages. To group fields onto a single page, create a
      property of type <code>object</code>. All of it's child properties will be grouped together.
    </td>
  </tr>

  <tr>
    <td>uiSchema</td>
    <td>object</td>
    <td>
      A ui schema compatible with
      <a href="https://react-jsonschema-form.readthedocs.io/en/latest/quickstart/#form-uischema"
        >react json schema form</a
      >
    </td>
  </tr>

  <tr>
    <td>options</td>
    <td>object</td>
    <td>
      A configuration object. It can be passed the following keys:
      <ul>
        <li><code>getRoute*</code>: A string value of the dynamic route the <code>getHandler</code> will be called at.</li>
        <li><code>postRoute*</code>: A string value of the dynamic route the <code>postHandler</code> will be called at.</li>
        <li><code>useSession</code>: A boolean value indicating whether or not to use sessions. If set <code>true</code>, ensure a session object is provided on req.session.</li>
        <li><code>defaultLabels</code>: A boolean value indicating whether or not to keep the default generated labels.</li>
        <li><code>widgets</code>: An object containing widget overrides.</li>
        <li><code>validations</code>: An object defining custom validation functions. Object should have the form
          <pre>
          {
            propertyName: {
              validationFunction: function,
              errorMessage: string
            }
          }
          </pre>
        See <a href='#validationfunction'>validationFunction</a> for argument details.
        </li>
        <li><code>handleReadStream</code>: A function to handle file upload streams. See <a href='#handlereadstream'>handlereadstream</a> for argument details.</li>
        <li><code>onFileLoad</code>: A function to handle file upload streams. See <a href='#onfileload'>onFileLoad</a> for argument details.</li>
        <li><code>onPost</code>: A function to handle file upload streams. See <a href='#onpost'>onPost</a> for argument details.</li>
        <li><code>onFormEnd</code>: A function to handle file upload streams. See <a href='#onformend'>onFormEnd</a> for argument details.</li>
      </ul>
    </td>
  </tr>
</table>

Builder returns the values:

- **getHandler**: A function to handle get requests. See [getHandler](#getHandler) for more details.
- **postMiddleware**: Middleware to handle post requests. See [postMiddleware](#postMiddleware) for more details.
- **fileMiddleware**: Middleware to handle file post requests. See [fileMiddleware](#fileMiddleware) for more details.
- **Forms**: An array of form components corresponding to each page.

## validationFunction

A function to generate custom validations. It takes the following arguments:

<table>
  <tr>
    <th>Arguments</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>fieldValue</td>
    <td>string</td>
    <td>The value of the field being validated</td>
  </tr>
  <tr>
    <td>formData</td>
    <td>object</td>
    <td>All data entered for the current application.</td>
  </tr>
</table>

The return value should be a boolean indicating whether or not the input is valid.

## handleReadStream

A function to handle file upload streams. It taks arguments:

<table>
  <tr>
    <th>Argument</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>filename</td>
    <td>string</td>
    <td>The name of the uploaded file.</td>
  </tr>
  <tr>
    <td>readStream</td>
    <td>Readable Stream</td>
    <td>A readable stream of the uploaded file.</td>
  </tr>
</table>

## onFileLoad

A callback that will fire when files finish uploading. It takes the arguments:

<table>
  <tr>
    <th>Argument</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>filename</td>
    <td>string</td>
    <td>The name of the uploaded file.</td>
  </tr>
</table>

## onPost

A callback that will fire when form data is posted to the API. It takes the arguments:

<table>
  <tr>
    <th>Argument</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>postedData</td>
    <td>object</td>
    <td>The data that was posted by the user.</td>
  </tr>
  <tr>
    <td>schemaIndex</td>
    <td>number</td>
    <td>Index of the schema that was posted from.</td>
  </tr>
  <tr>
    <td>cleanSchemaData</td>
    <td>function</td>
    <td>Function to clean any form data you are using. This will remove fields for the current form page from the data, so that new user data will still be updated for fields such as un-checked checkboxes, which don't post anything in the non-javascript use case. It takes the current formdata as an argument, e.g
    <pre>
      const formData = getFormDataFromDB();
      const newData = cleanSchemaData(formData);
      saveNewDataToDB(newData);
    </pre>
    </td>
  </tr>
</table>

The return value should be the cleaned data.

## onFormEnd

A callback that will fire when the form is completes. It takes the arguments:

<table>
  <tr>
    <th>Argument</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>errors</td>
    <td>Array</td>
    <td>An array of error objects for any failed fields.</td>
  </tr>
  <tr>
    <td>formData</td>
    <td>object</td>
    <td>The data of the final submission.</td>
  </tr>
</table>

## getHandler

This function should be used at the dynamic route following the `getRoute` you set in `options`. For example, if you setup your get route to be `'/'`,
you should call `getHandler` at `'/:num'`. It is used to return the information you need to render the correct form, see the return values below. It takes arguments:

<table>
  <tr>
    <th>Argument</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>request</td>
    <td>object</td>
    <td>The request object for the current route.</td>
  </tr>
</table>

The return value for the function is an object with the following properties:

- `formIndex`: A number showing the index of the form component to render.
- `formData`: An object containing current formData to pass into the form. Intended for use with sessions enabled, if not using sessions will be an empty object.
- `validPage`: A boolean indicating whether or not the current route points to a valid form page.

# Form Schema Default

This example shows a use case for the simplest setup of the form-schema library.

## Files

- **schemas/schema.ts**: Exports a JSON object defining your form fields
- **schemas/uiSchema.ts**: Exports a JSON object defining ui for your form
- **form-schema.ts**: This file is importing the govBuilder version, which will have government style widgets hooked up by default.
  Call the returned function with arguments:
  - schema: your form schema
  - uiSchema: your UI schema
  - get route: string of the route you will get your form page from
  - post route: route you will post form data to
    It will return:
  - postHandler: function to call in your post route
  - getHandler: function to call in your get route
  - Forms: Array of split up form components
- **pages/[page].tsx**: get route for this example. With default settings, data will be saved to session, and expects req.session to exist. Calling the `getHandler` function
with the `req` arguments will return the current `formIndex` to render the correct Form, `formData` to be passed to the form, and whether or not the dynamic route is a `validPage`. Pass the `rerouteHandler` prop to the form to be called after the data is submitted and handle redirection, which will be called with arguments:
  - nextPage: the next page to use in the dynamic route
  - isValid: whether or not the next page is valid
  - lastPage: whether or not this is the final page
- **pages/api/[submit].ts** Post route handler. Call post handler here with `req` and `res` as arguments. With no further customization, it will save form data to the expected session argument on req.session
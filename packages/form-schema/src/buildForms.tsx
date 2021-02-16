import Form from 'react-jsonschema-form';
import React from 'react';
import axios from 'axios';
import { createValidator } from './validation';
import { splitSchema } from './splitSchema';
import { IOptions, ISchema, IForms } from './interfaces';
import { parseUrl } from './helpers';

export default function buildForms(
  schema: ISchema,
  uiSchema: object,
  getRoute: string,
  postRoute: string,
  options: IOptions,
  urlArray: string[]
): IForms {
  const order = uiSchema['ui:order'];
  const { validations, widgets } = options;
  const schemasArray = splitSchema(schema, order);
  const fieldsArray = schemasArray.map(schema => Object.keys(schema.properties));
  const lastPage = schemasArray.length;

  return {
    Forms: schemasArray.map((schema, i) => {
      const key = `form-${i}`;
      const validation = createValidator(i, fieldsArray, validations);
      const pageNumber = i + 1;
      const pageName = urlArray[pageNumber - 1] || pageNumber;

      return function Forms(props) {
        const handleSubmit = async ({ formData }) => {
          const result = await axios.post(`${postRoute}/${pageNumber}`, {
            postData: formData,
            page: pageNumber,
            js: true,
          });
          const { nextPage, isValid } = result.data;
          if (props.rerouteHandler) {
            const urlToNavigate = parseUrl(getRoute, nextPage);
            props.rerouteHandler(urlToNavigate, isValid, nextPage > lastPage);
          } else if (typeof window === 'object') window.location.href = `${getRoute}/${pageName}`;
        };

        return (
          <Form
            key={key}
            name="my-form"
            method="post"
            action={`${postRoute}/${pageName}`}
            schema={schema}
            uiSchema={uiSchema}
            validate={validation}
            onSubmit={handleSubmit}
            widgets={widgets}
            {...props}
          />
        );
      };
    }),
    fieldsArray,
    schemasArray,
  };
}

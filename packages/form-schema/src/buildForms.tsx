import Form from 'react-jsonschema-form';
import React from 'react';
import axios from 'axios';
import { createValidator } from './validation';
import { splitSchema } from './splitSchema';
import { ISchema, IValidations } from './interfaces';
import { parseUrl } from './helpers';

export default function buildForms(
  schema: ISchema,
  uiSchema: object,
  getRoute: string,
  postRoute: string,
  validations: IValidations
): object {
  const order = uiSchema['ui:order'];
  const schemasArray = splitSchema(schema, order);
  const fieldsArray = schemasArray.map(schema => Object.keys(schema.properties));

  return {
    Forms: schemasArray.map((schema, i) => {
      const key = `form-${i}`;
      const validation = createValidator(i, fieldsArray, validations);
      const pageNumber = i + 1;

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
            props.rerouteHandler(urlToNavigate, isValid);
          } else if (typeof window === 'object') window.location.href = `${getRoute}/${nextPage}`;
        };

        return (
          <Form
            key={key}
            name="my-form"
            method="post"
            action={`${postRoute}/${pageNumber}`}
            schema={schema}
            uiSchema={uiSchema}
            validate={validation}
            onSubmit={handleSubmit}
            {...props}
          />
        );
      };
    }),
    fieldsArray,
    schemasArray,
  };
}

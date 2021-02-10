import Form from 'react-jsonschema-form';
import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { createValidator } from './validation';
import { splitSchema } from './splitSchema';
import { ISchema, IValidations } from './interfaces';

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
        const router = useRouter();

        const handleSubmit = async ({ formData }) => {
          const result = await axios.post(`${postRoute}/${pageNumber}`, {
            postData: formData,
            page: pageNumber,
            js: true,
          });
          const { nextPage, isValidated, isValid, hasError } = result.data;
          router.push(`${getRoute}/${nextPage}`);
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

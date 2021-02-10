import Form from 'react-jsonschema-form';
import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { createValidator } from './validation';
import { splitSchema } from './splitSchema';
import { ISchema } from './interfaces';

export default function buildForms(schema: ISchema, uiSchema: object, getRoute: string, postRoute: string): object {
  const order = uiSchema['ui:order'];
  const schemasArray = splitSchema(schema, order);
  const fieldsArray = schemasArray.map(schema => Object.keys(schema.properties));

  return {
    Forms: schemasArray.map((schema, i) => {
      const key = `form-${i}`;
      return function Forms(props) {
        const router = useRouter();

        const handleSubmit = async ({ formData }) => {
          const result = await axios.post(`${postRoute}/${i}`, { postData: formData, page: i, js: true });
          const { nextPage, isValidated, isValid, hasError } = result.data;
          router.push(`${getRoute}/${nextPage}`);
        };

        return (
          <Form
            key={key}
            name="my-form"
            method="post"
            action={`${postRoute}/${i}`}
            schema={schema}
            uiSchema={uiSchema}
            validate={createValidator(i, fieldsArray)}
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

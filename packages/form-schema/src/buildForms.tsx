import Form from 'react-jsonschema-form';
import React from 'react';
import { createValidator } from './helpers';
import { splitSchema } from './splitSchema';
import { ISchema } from './interfaces';

export default function buildForms(schema: ISchema, uiSchema: object, postRoute: string): Function[] {
  const order = uiSchema['ui:order'];
  const schemasArray = splitSchema(schema, order);
  const fieldsArray = schemasArray.map(schema => Object.keys(schema.properties));

  return schemasArray.map((schema, i) => {
    const key = `form-${i}`;
    return function Forms(props) {
      return (
        <Form
          key={key}
          name="my-form"
          method="post"
          action={`${postRoute}/${i}`}
          schema={schema}
          uiSchema={uiSchema}
          validate={createValidator(i, fieldsArray)}
          onSubmit={e => console.log('submitted')}
          {...props}
        />
      );
    };
  });
}

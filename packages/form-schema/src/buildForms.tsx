import Form from 'react-jsonschema-form';
import React from 'react';
import { splitSchema, createValidator } from './helpers';

export default function buildForms(schema, uiSchema, postRoute) {
  const order = uiSchema['ui:order'];
  const schemasArray = splitSchema(schema, order);

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
          validate={createValidator(i)}
          onSubmit={e => console.log('submitted')}
          {...props}
        />
      );
    };
  });
}

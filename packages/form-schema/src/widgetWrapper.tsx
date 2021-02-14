import { Component } from 'react';

export default function (components: any[]) {
  const newComponents = components.map(Component => {
    const SchemaInput = props => {
      const { value, onChange, required, schema } = props;
      const { name, title, inputType, pattern, minLength, maxLength } = schema;
      return <Component name={name} />;
    };
    return SchemaInput;
  });
  return true;
}

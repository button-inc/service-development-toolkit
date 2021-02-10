// @ts-nocheck
import onPost from './onPost';
import buildForms from './buildForms';

function onGet(req, onEnd, onPageOver) {}

export default function builder(schema, uiSchema, getRoute, postRoute, config) {
  const { Forms, schemasArray, fieldsArray } = buildForms(schema, uiSchema, getRoute, postRoute);

  const numForms = Forms.length;
  return {
    onPost: onPost.bind({}, getRoute, numForms, schema, schemasArray, fieldsArray),
    onGet,
    Forms,
  };
}

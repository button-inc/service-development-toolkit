// @ts-nocheck
import onPost from './onPost';
import buildForms from './buildForms';

function onGet(req, onEnd, onPageOver) {}

export default function builder(schema, uiSchema, getRoute, postRoute, config) {
  const Forms = buildForms(schema, uiSchema, postRoute);
  return {
    onPost,
    onGet,
    Forms,
  };
}

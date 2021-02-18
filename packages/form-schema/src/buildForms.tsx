import Form from 'react-jsonschema-form';
import React, { useState } from 'react';
import axios from 'axios';
import { createValidator } from './validation';
import { splitSchema } from './splitSchema';
import { IOptions, ISchema, IForms } from './interfaces';
import { parseUrl } from './helpers';

const getEncoding = type => {
  if (type === 'file') return 'multipart/form-data';
  return 'application/x-www-form-urlencoded';
};

const getContentType = files => {
  if (files) return 'multipart/form-data';
  return 'application/json';
};

const getFormData = stuff => {
  const data = new FormData();
  data.append('file', stuff.file[0]);
  return data;
};

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

  return {
    Forms: schemasArray.map((schema, i) => {
      const key = `form-${i}`;
      const validation = createValidator(i, fieldsArray, validations);
      const pageNumber = i + 1;
      const pageName = urlArray[pageNumber - 1] || pageNumber;
      const { files } = schema;

      return function FormPage(props) {
        const [stuff, setStuff] = useState();

        const handleSubmit = async ({ formData }) => {
          let data = { postData: formData, page: pageNumber, js: true };
          // @ts-ignore
          if (files) data = getFormData(stuff);
          console.log(data);
          const result = await axios({
            method: 'post',
            url: `${postRoute}/${pageName}${files ? '/file' : ''}`,
            // data: { postData: data, page: pageNumber, js: true },
            data,
            headers: { 'Content-Type': getContentType(files) },
            // headers: { 'Content-Type': 'multipart/form-data' },
          });
          const { nextPage, isValid, isLastPage } = result.data;
          console.log(nextPage, isValid, isLastPage);
          if (props.rerouteHandler) {
            const urlToNavigate = parseUrl(getRoute, nextPage);
            props.rerouteHandler(urlToNavigate, isValid, isLastPage);
          } else if (typeof window === 'object') window.location.href = parseUrl(getRoute, nextPage);
        };
        const additionalProps: any = {};
        if (files) {
          additionalProps.onChange = e => {
            console.log('hey hey hey', e.formData);
            setStuff(e.formData);
          };
          additionalProps.noValidate = true;
        }
        return (
          <Form
            key={key}
            name="my-form"
            method="post"
            action={`${postRoute}/${pageName}${files ? '/file' : ''}`}
            schema={schema}
            uiSchema={uiSchema}
            // validate={validation}
            onSubmit={handleSubmit}
            widgets={widgets}
            {...additionalProps}
            {...props}
          />
        );
      };
    }),
    fieldsArray,
    schemasArray,
  };
}

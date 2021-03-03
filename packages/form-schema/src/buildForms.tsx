import Form from 'react-jsonschema-form';
import React, { useState } from 'react';
import axios from 'axios';
import { createValidator } from './utils/validationUtils';
import { splitSchema } from './utils/schemaUtils';
import { IOptions, ISchema, IForms } from './interfaces';
import { parseUrl } from './utils/urlUtils';

const getContentType = files => {
  if (files) return 'multipart/form-data';
  return 'application/json';
};

const getFormData = (files: object) => {
  const data = new FormData();
  const fileList = Object.values(files)[0];
  data.append('file', fileList[0]);
  data.append('js', 'true');
  return data;
};

export default function buildForms(schema: ISchema, uiSchema: object, options: IOptions, urlArray: string[]): IForms {
  const { validations, widgets } = options;
  const schemasArray = splitSchema(schema);
  const fieldsArray = schemasArray.map(schema => Object.keys(schema.properties));
  const { getRoute, postRoute } = options;

  return {
    Forms: schemasArray.map((schema, i) => {
      const key = `form-${i}`;
      const validation = createValidator(i, fieldsArray, validations);
      const pageNumber = i + 1;
      const pageName = urlArray[pageNumber - 1] || pageNumber;
      const { hasFiles } = schema;

      return function FormPage(props) {
        const [files, setFiles] = useState({});

        const handleSubmit = async ({ formData }) => {
          let data: object = { postData: formData, page: pageNumber, js: true };
          if (hasFiles) data = getFormData(files);
          const result = await axios({
            method: 'post',
            url: `${postRoute}/${pageName}${hasFiles ? '/file' : ''}`,
            data,
            headers: { 'Content-Type': getContentType(hasFiles) },
          });

          const { nextPage, errors = [] } = result.data;
          if (props.rerouteHandler) {
            const urlToNavigate = parseUrl(getRoute, nextPage);
            const errorStrings = errors.map(err => err.stack);
            props.rerouteHandler(urlToNavigate, errorStrings);
          } else if (typeof window === 'object') window.location.href = parseUrl(getRoute, nextPage);
        };
        const fileProps: any = {};
        if (hasFiles) {
          fileProps.onChange = e => {
            setFiles(e.formData);
          };
          fileProps.noValidate = true;
          fileProps.action = `${postRoute}/${pageName}/file`;
          fileProps.enctype = 'multipart/form-data';
        }
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
            {...fileProps}
            {...props}
          />
        );
      };
    }),
    fieldsArray,
    schemasArray,
  };
}

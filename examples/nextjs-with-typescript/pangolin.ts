// @ts-nocheck
import builder from 'form-schema';
import Checkbox from 'component-library/Checkbox';
import schema from './schemas/schema';
import uiSchema from './schemas/uiSchema';

export const widgets = {
  CheckboxWidget: Checkbox,
};

export const { onPost, onGet, Forms } = builder(schema, uiSchema, '', 'api');

// @ts-nocheck
import builder from 'form-schema';
import schema from './schemas/schema';
import uiSchema from './schemas/uiSchema';

export const { onPost, onGet, Forms } = builder(schema, uiSchema, '', '/api/submit');

// @ts-nocheck
import { govBuilder } from 'form-schema';
import schema from 'schemas/schema';
import uiSchema from 'schemas/uiSchema';

export const { postHandler, getHandler, Forms } = govBuilder(schema, uiSchema, '/', '/api');

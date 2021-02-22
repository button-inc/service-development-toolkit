import { govBuilder } from 'form-schema';
import schema from 'schemas/schema';
import uiSchema from 'schemas/uiSchema';

const options = {
  getRoute: '/',
  postRoute: '/api',
  useSession: true,
  onFormEnd: (errors: [], formData: object) => console.log(`save ${JSON.stringify(formData)} to db here`),
};

export const { postMiddleware, getHandler, Forms } = govBuilder(schema, uiSchema, options);

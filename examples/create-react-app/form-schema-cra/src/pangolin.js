const { govBuilder } = require('form-schema');
const schema = require('./schemas/schema');
const uiSchema = require('./schemas/uiSchema');

const options = {
  getRoute: '/',
  postRoute: '/api',
  useSession: true,
};

const { postMiddleware, getHandler, fileMiddleware, Forms } = govBuilder(schema, uiSchema, options);
module.exports = { postMiddleware, getHandler, fileMiddleware, Forms };

import { govBuilder } from '../lib';
import schema from './formSchema';
import uiSchema from './uiSchema';

const options = {
  getRoute: '/form',
  postRoute: '/api',
  useSession: true,
  onFormEnd: (errors, formData) => {
    // (errors, formData, req) are possible parameters here
    // write function for what will happen on the form end
    console.log(`${JSON.parse(formData)} saved to database.`);
  },
  onPost: () => {
    // (formData, schemaIndex, cleanSchemaData, req) are possible parameters here
    // function that will fire on each page change
  },
  validateEachPage: true,
  validatedUrl: '/review',
  invalidUrl: '/error',
};
const { Forms } = govBuilder(schema, uiSchema, options);
const Form = Forms[1];

const rerouteHandler = (nextPage: string) => {
  // router.push(nextPage);
};

const FormExample = () => {
  return (
    <div>
      <Form formData={{}} rerouteHandler={rerouteHandler} />
    </div>
  );
};

export default FormExample;

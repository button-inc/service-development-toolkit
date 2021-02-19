import { withSession } from 'next-session';
import { postHandler } from 'pangolin';
import formData from 'db';

const handlePageOver = (_postData: object, schemaIndex: number, cleanSchemaData: Function) => {
  const newData = cleanSchemaData(formData);
  formData[schemaIndex] = { ...formData[schemaIndex], ...newData };
  return newData;
};

function handler(req: any, res: any) {
  postHandler(req, res, (errors: []) => console.log(errors));
}

export default withSession(handler);

export const config = {
  api: {
    bodyParser: true,
  },
};

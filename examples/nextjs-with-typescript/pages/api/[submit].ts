import { withSession } from 'next-session';
import { postHandler } from '../../pangolin';
import { formData } from '../../db';

const handlePageOver = (postData: object, schemaIndex: number, cleanSchemaData: Function) => {
  formData.data = { ...formData, ...postData };
  const cleanedData = cleanSchemaData(formData);
  console.log(cleanedData);
  return cleanSchemaData(formData);
};

function handler(req: any, res: any) {
  postHandler(req, res, () => {}, handlePageOver);
}

export default withSession(handler);

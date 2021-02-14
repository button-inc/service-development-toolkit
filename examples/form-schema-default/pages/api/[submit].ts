import { withSession } from 'next-session';
import { postHandler } from 'pangolin';
// import { formData } from '../../db';

// const handlePageOver = (postData: object, schemaIndex: number, cleanSchemaData: Function) => {
//   const newData = cleanSchemaData(formData);
//   formData.data = { ...formData.data, ...newData };
//   return newData;
// };

function handler(req: any, res: any) {
  // postHandler(req, res, () => console.log('finished form'), handlePageOver);
  postHandler(req, res);
}

export default withSession(handler);
